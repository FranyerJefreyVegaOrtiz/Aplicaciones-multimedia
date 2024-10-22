
let cart = JSON.parse(localStorage.getItem('cart')) || [];
    

const product = {
    id: 1,
    image: "/Project/assets/img/products/SaludPerro1.png",
    name: "Artri-Vet",
    price: "91.000"
};

document.getElementById("addProduct").addEventListener("click", function() {

    cart.push(product);
    
    localStorage.setItem('cart', JSON.stringify(cart));

    document.getElementById("cartCount").textContent = cart.length;

    alert("Producto añadido al carrito!");
});

document.getElementById("cartCount").textContent = cart.length;

document.getElementById("viewCart").addEventListener("click", function() {
    window.location.href = "carrito.html";  // Redirige al archivo HTML del carrito
});