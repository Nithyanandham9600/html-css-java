// Select the form and list
const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

// Listen for form submit
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get input value
  const newItem = document.getElementById('item').value;

  // Create new li
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  // Add to ul
  itemList.appendChild(li);

  // Clear input
  document.getElementById('item').value = '';
});
