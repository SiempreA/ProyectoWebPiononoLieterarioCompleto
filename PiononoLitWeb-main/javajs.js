


// Elementos del DOM
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cart = document.getElementById('carrito');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Estado del carrito
let cartItems = [];

// Función para mostrar el carrito
function renderCart() {
    cartItemsContainer.innerHTML = ''; // Limpiar el contenedor del carrito
    let total = 0;

    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.innerHTML = `
            <span>${item.name}</span>
            <span>${item.quantity} x S/${item.price.toFixed(2)}</span>
            <div class="quantity-controls">
                <button class="quantity-btn decrease" data-index="${index}">-</button>
                <span class="product-quantity">${item.quantity}</span>
                <button class="quantity-btn increase" data-index="${index}">+</button>
            </div>
            <button class="remove-item" data-index="${index}">Eliminar</button>
        `;
        cartItemsContainer.appendChild(listItem);

        total += item.quantity * item.price;
    });

    cartTotal.textContent = `S/${total.toFixed(2)}`;
}

// Función para agregar productos al carrito
function addToCart(name, price) {
    const existingItem = cartItems.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }

    renderCart();
}

// Evento de click en los botones "Agregar al carrito"
addToCartButtons.forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.closest('.box');
        const name = product.querySelector('h3').textContent;
        const price = parseFloat(product.querySelector('.price').textContent.replace('S/', ''));

        addToCart(name, price);

        // Mostrar el carrito si está oculto
        if (cart.style.display === 'none') {
            cart.style.display = 'block';
        }
    });
});

// Evento para manejar las acciones dentro del carrito
cartItemsContainer.addEventListener('click', event => {
    const index = parseInt(event.target.getAttribute('data-index'));

    // Aumentar cantidad
    if (event.target.classList.contains('increase')) {
        cartItems[index].quantity++;
        renderCart();
    }

    // Disminuir cantidad
    if (event.target.classList.contains('decrease')) {
        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity--;
        }
        renderCart();
    }

    // Eliminar producto
    if (event.target.classList.contains('remove-item')) {
        cartItems.splice(index, 1); // Eliminar el producto del carrito
        renderCart();

        // Ocultar el carrito si está vacío
        if (cartItems.length === 0) {
            cart.style.display = 'none';
        }
    }
});
// Seleccionar el botón de "Pagar"
const payButton = document.getElementById('pay-button');

// Agregar evento de clic al botón
payButton.addEventListener('click', () => {
    // Redirigir a la página "detalle_carrito.html"
    window.location.href = 'detalle_carrito.html';
});
