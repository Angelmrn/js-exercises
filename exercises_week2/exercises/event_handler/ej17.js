// Initialize the cart from sessionStorage or set it as an empty array
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Function to display the cart
function displayCart() {
  const cartDisplay = document.getElementById('cartDisplay');
  cartDisplay.innerHTML = ''; // Clear previous display

  if (cart.length === 0) {
    cartDisplay.textContent = 'Your cart is empty.';
  } else {
    cart.forEach((item, index) => {
      const itemElement = document.createElement('p'); // Create a paragraph for each item
      itemElement.textContent = `${index + 1}. ${item}`; // Display item with index
      cartDisplay.appendChild(itemElement); // Append to cart display
    });
  }
}

// Create input and buttons for cart actions
const itemInput = document.createElement('input'); // Input for adding items
itemInput.placeholder = 'Enter item name';
document.body.appendChild(itemInput);

const addButton = document.createElement('button'); // Button to add item
addButton.textContent = 'Add to Cart';
document.body.appendChild(addButton);

const cartDisplay = document.createElement('div'); // Div to display the cart
cartDisplay.id = 'cartDisplay';
document.body.appendChild(cartDisplay);

// Display the cart initially
displayCart();

// Add button event listener
addButton.addEventListener('click', () => {
  const newItem = itemInput.value.trim(); // Get item from input
  if (newItem) {
    cart.push(newItem); // Add item to cart
    sessionStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart in sessionStorage
    itemInput.value = ''; // Clear input
    displayCart(); // Update cart display
  } else {
    alert('Please enter an item name.');
  }
});