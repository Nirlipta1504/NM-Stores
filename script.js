document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const cartIcon = document.querySelector('.fa-shopping-cart');
    const cartModal = document.createElement('div');

    // Toggle navigation bar on small screens
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Create and show modal for shopping cart
    cartIcon.addEventListener('click', () => {
        showCartModal();
    });

    function showCartModal() {
        cartModal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>Your Shopping Cart</h2>
        <p>Your cart is currently empty.</p>
      </div>
    `;
        cartModal.classList.add('cart-modal');
        document.body.appendChild(cartModal);

        const closeButton = cartModal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });

        cartModal.style.display = 'block';
    }

    // Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});
