// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Set up an empty cart array to store the selected products
let cartItems = [];

// Add click event listeners to each "Add to Cart" button
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the product ID from the button's data attribute
    const productId = button.getAttribute("data-product-id");

    // Find the selected product by ID (you can replace this with your own logic)
    const selectedProduct = {
      id: productId,
      name: `Product ${productId}`,
      price: 10 * productId,
    };

    // Add the selected product to the cart array
    cartItems.push(selectedProduct);

    // Update the cart display
    updateCartDisplay();
  });
});

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const emptyCartMessage = document.getElementById("empty-cart-message");

  // Clear the cart display
  cartItemsContainer.innerHTML = "";
  cartTotalElement.textContent = "";

  if (cartItems.length === 0) {
    // Display empty cart message
    emptyCartMessage.style.display = "block";
  } else {
    // Hide empty cart message
    emptyCartMessage.style.display = "none";

    // Loop through the cart items and create the HTML for each item
    cartItems.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("cart-item");
      li.innerHTML = `
          <span class="item-name">${item.name}</span>
          <span class="item-price">$${item.price}</span>
        `;
      cartItemsContainer.appendChild(li);
    });

    // Calculate and display the total
    const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
    cartTotalElement.textContent = `Total: $${cartTotal}`;
  }
}
