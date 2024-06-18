document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".product .btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Produk berhasil ditambahkan ke keranjang!");
        });
    });
});
// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const notification = document.getElementById('notification');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            addToCart(button);
        });
    });

    function addToCart(button) {
        // Logic to add product to the cart can be added here
        // Display notification
        showNotification();
    }

    function showNotification() {
        notification.classList.remove('hidden');
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            notification.classList.add('hidden');
        }, 2000);
    }
});
