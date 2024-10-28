const cartItems = [];
const productItemsContainer = document.getElementById("product-items");
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

// Lista de productos
const products = [
    { name: "Super Nintendo", price: 1200000 },
    { name: "Nintendo NES", price: 1120000 },
    { name: "Game Boy SP", price: 200000 },
    { name: "Game Cube", price: 200000 },
    { name: "Nintendo 64", price: 1000000 },
    { name: "Nintendo DS", price: 1500000 },
    { name: "Nintendo 3DS", price: 900000 },
    { name: "Nintendo Wii", price: 500000 },
    { name: "Nintendo Wii U", price: 550000 },
    { name: "Nintendo Switch", price: 1600000 },
    { name: "PSP", price: 600000 },
    { name: "PlayStation 1", price: 1000000 },
    { name: "PlayStation 2", price: 1200000 },
    { name: "PlayStation 3", price: 1300000 },
    { name: "PlayStation 4", price: 2000000 },
    { name: "PlayStation 5", price: 3500000 },
    { name: "Xbox One", price: 1000000 },
    { name: "Xbox 360", price: 800000 },
    { name: "Xbox Series X", price: 3000000 },
    { name: "PS Vita", price: 1000000 },
];

// Función para cargar la lista de productos en el HTML
function loadProducts() {
    products.forEach((product, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>$${product.price} USD</td>
            <td><button onclick="addToCart('${product.name}', ${product.price})">Agregar al Carrito</button></td>
        `;
        productItemsContainer.appendChild(row);
    });
}

// Función para agregar productos al carrito
function addToCart(product, price) {
    const existingProduct = cartItems.find(item => item.product === product);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cartItems.push({ product, price, quantity: 1 });
    }
    renderCart();
}

// Función para actualizar el carrito en el HTML
function renderCart() {
    cartItemsContainer.innerHTML = ""; // Limpia el contenido del carrito
    let total = 0;

    cartItems.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.product}</td>
            <td>$${item.price} USD</td>
            <td>
                <input type="number" min="1" value="${item.quantity}" 
                    onchange="updateQuantity(${index}, this.value)">
            </td>
            <td>$${subtotal} USD</td>
            <td><button onclick="removeFromCart(${index})" class="btn btn-danger">🗑️</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    totalPriceElement.textContent = `Total: $${total} USD`;
}

// Función para actualizar la cantidad de un producto en el carrito
function updateQuantity(index, quantity) {
    cartItems[index].quantity = parseInt(quantity);
    renderCart();
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cartItems.splice(index, 1);
    renderCart();
}

// Configuración de eventos para los botones de continuar comprando y pagar
document.getElementById("continue-shopping").addEventListener("click", () => {
    alert("Puedes seguir comprando.");
});

document.getElementById("pay-button").addEventListener("click", () => {
    alert("¡Gracias por su compra!");
    cartItems.length = 0;
    renderCart();
});

// Cargar productos al inicio
loadProducts();




