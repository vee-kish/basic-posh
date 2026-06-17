// BasicPosh cart page renderer
(function () {
    const Cart = window.BasicPoshCart;
    if (!Cart) return;

    const itemsContainer = document.getElementById('cart-items');
    const emptyState = document.getElementById('cart-empty');
    const summarySection = document.getElementById('cart-summary');
    if (!itemsContainer) return;

    const SHIPPING = 1625;
    const TAX_RATE = 0.07;

    function render() {
        const items = Cart.getItems();
        const subtotal = Cart.getSubtotal();
        const tax = Math.round(subtotal * TAX_RATE);
        const total = subtotal + SHIPPING + tax;

        if (items.length === 0) {
            itemsContainer.innerHTML = '';
            if (emptyState) emptyState.classList.remove('hidden');
            if (summarySection) summarySection.classList.add('hidden');
            return;
        }

        if (emptyState) emptyState.classList.add('hidden');
        if (summarySection) summarySection.classList.remove('hidden');

        itemsContainer.innerHTML = items.map((item) => `
            <div class="flex flex-col md:flex-row gap-6 pb-8 border-b border-surface-container" data-cart-item="${item.id}">
                <div class="w-full md:w-48 h-64 md:h-48 bg-surface-container-low overflow-hidden rounded">
                    <img alt="${item.name}" class="w-full h-full object-cover mix-blend-multiply" src="${item.image}">
                </div>
                <div class="flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start">
                            <h3 class="font-headline-md text-headline-md text-primary">${item.name}</h3>
                            <p class="font-headline-md text-headline-md text-primary">${Cart.formatKES(item.price)}</p>
                        </div>
                        ${item.variant ? `<p class="font-label-md text-label-md text-secondary mt-1 uppercase tracking-widest">${item.variant}</p>` : ''}
                        <div class="mt-4 space-y-1">
                            <span class="inline-block px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">In Stock</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-6">
                        <div class="flex items-center border border-outline-variant rounded px-2 py-1">
                            <button class="p-1 hover:text-primary text-secondary transition-colors" data-qty-action="decrease" data-item-id="${item.id}" type="button">
                                <span class="material-symbols-outlined text-[18px]">remove</span>
                            </button>
                            <span class="px-4 font-label-md text-label-md" data-qty-display="${item.id}">${item.quantity}</span>
                            <button class="p-1 hover:text-primary text-secondary transition-colors" data-qty-action="increase" data-item-id="${item.id}" type="button">
                                <span class="material-symbols-outlined text-[18px]">add</span>
                            </button>
                        </div>
                        <button class="text-secondary font-label-md text-label-md hover:text-error transition-colors flex items-center gap-1" data-remove-item="${item.id}" type="button">
                            <span class="material-symbols-outlined text-[18px]">delete</span>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        const subtotalEl = document.getElementById('cart-subtotal');
        const taxEl = document.getElementById('cart-tax');
        const totalEl = document.getElementById('cart-total');
        if (subtotalEl) subtotalEl.textContent = Cart.formatKES(subtotal);
        if (taxEl) taxEl.textContent = Cart.formatKES(tax);
        if (totalEl) totalEl.textContent = Cart.formatKES(total);
    }

    itemsContainer.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('[data-remove-item]');
        if (removeBtn) {
            Cart.removeItem(removeBtn.dataset.removeItem);
            render();
            return;
        }

        const qtyBtn = e.target.closest('[data-qty-action]');
        if (qtyBtn) {
            const id = qtyBtn.dataset.itemId;
            const item = Cart.getItems().find((i) => i.id === id);
            if (!item) return;
            const nextQty = qtyBtn.dataset.qtyAction === 'increase' ? item.quantity + 1 : item.quantity - 1;
            Cart.updateQuantity(id, nextQty);
            render();
        }
    });

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (Cart.getItems().length === 0) return;
            alert('Thank you! Your order has been placed. A confirmation email will be sent shortly.');
            Cart.clearCart();
            render();
        });
    }

    window.addEventListener('cart-updated', render);
    render();
})();
