// BasicPosh storefront interactions
(function () {
    const Cart = window.BasicPoshCart;
    if (!Cart) return;

    function updateCartBadges() {
        const count = Cart.getCount();
        document.querySelectorAll('[data-cart-count]').forEach((el) => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    function addFromElement(el, options) {
        const product = Cart.productFromElement(el);
        if (!product.id || !product.name || !product.price) return false;
        Cart.addItem(product);
        updateCartBadges();
        if (options && options.redirect) {
            window.location.href = 'cart.html';
        }
        return true;
    }

    document.querySelectorAll('[data-add-to-cart]').forEach((el) => {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            if (!addFromElement(el, { redirect: false })) return;

            if (el.classList.contains('quick-add-btn')) {
                const originalText = el.textContent;
                el.textContent = 'Added to Cart';
                el.classList.add('bg-on-tertiary-container');
                setTimeout(() => {
                    window.location.href = 'cart.html';
                }, 600);
            } else {
                window.location.href = 'cart.html';
            }
        });
    });

    document.querySelectorAll('.add-shopping-cart-btn').forEach((btn) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (addFromElement(btn, { redirect: true })) return;
            window.location.href = 'cart.html';
        });
    });

    window.addEventListener('cart-updated', updateCartBadges);
    updateCartBadges();
})();
