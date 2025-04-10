// cart.js
let cart = [];

// Function to render cart items
function renderCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';  // Clear existing items

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty!</p>';
    return;
  }

  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <p><strong>${item.name}</strong> - $${item.price}</p>
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;
    cartContainer.appendChild(itemDiv);
  });
}

// Function to add item to the cart
function addItem() {
  const productName = document.getElementById('product-name').value;
  const productPrice = document.getElementById('product-price').value;

  if (!productName || !productPrice || isNaN(productPrice)) {
    alert('Please enter valid product name and price!');
    return;
  }

  const newItem = {
    name: productName,
    price: parseFloat(productPrice),
  };

  cart.push(newItem);
  renderCart();

  // Clear input fields after adding item
  document.getElementById('product-name').value = '';
  document.getElementById('product-price').value = '';
}

// Function to remove item from the cart
function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// Event listener for the Add Item button
document.getElementById('add-item-btn').addEventListener('click', addItem);

// Initial render
renderCart();
