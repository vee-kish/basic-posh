// BasicPosh cart — localStorage-backed shopping cart
window.BasicPoshCart = (function () {
    const STORAGE_KEY = 'basicposh_cart';

    function readCart() {
        try {
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
            return Array.isArray(data) ? data : [];
        } catch {
            return [];
        }
    }

    function writeCart(items) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        window.dispatchEvent(new CustomEvent('cart-updated'));
    }

    function getItems() {
        return readCart();
    }

    function getCount() {
        return readCart().reduce((sum, item) => sum + item.quantity, 0);
    }

    function findIndex(items, id) {
        return items.findIndex((item) => item.id === id);
    }

    function addItem(product) {
        const items = readCart();
        const index = findIndex(items, product.id);

        if (index >= 0) {
            items[index].quantity += product.quantity || 1;
        } else {
            items.push({
                id: product.id,
                name: product.name,
                price: Number(product.price),
                image: product.image || '',
                variant: product.variant || '',
                quantity: product.quantity || 1,
            });
        }

        writeCart(items);
        return items;
    }

    function removeItem(id) {
        const items = readCart().filter((item) => item.id !== id);
        writeCart(items);
        return items;
    }

    function updateQuantity(id, quantity) {
        const items = readCart();
        const index = findIndex(items, id);
        if (index < 0) return items;

        if (quantity <= 0) {
            items.splice(index, 1);
        } else {
            items[index].quantity = quantity;
        }

        writeCart(items);
        return items;
    }

    function clearCart() {
        writeCart([]);
    }

    function getSubtotal() {
        return readCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    function formatKES(amount) {
        return 'KES ' + amount.toLocaleString('en-KE');
    }

    function productFromElement(el) {
        return {
            id: el.dataset.productId,
            name: el.dataset.productName,
            price: Number(el.dataset.productPrice),
            image: el.dataset.productImage || '',
            variant: el.dataset.productVariant || '',
            quantity: 1,
        };
    }

    return {
        getItems,
        getCount,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getSubtotal,
        formatKES,
        productFromElement,
    };
})();
