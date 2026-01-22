const API_URL = "http://localhost:3000/items";

const form = document.getElementById("itemForm");
const nameInput = document.getElementById("name");
const itemIdInput = document.getElementById("itemId");
const itemList = document.getElementById("itemList");
const cancelBtn = document.getElementById("cancelBtn");
const priceInput = document.getElementById("price");
const descInput = document.getElementById("description");

// Load items on page load
async function loadItems() {
  const res = await fetch(API_URL);
  const items = await res.json();

  itemList.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>Item: ${item.name}</span><br>
      <span>Price: ${item.price}</span><br>
      <span>Desc: ${item.description}</span>
      <div class="actions">
        <button onclick="editItem('${item._id}', '${item.name}', '${item.price}', '${item.description}')">Edit</button>
        <button class="delete" onclick="deleteItem('${item._id}')">Delete</button>
      </div>
    `;
    itemList.appendChild(li);
  });
}

  console.log('JS loaded');

// Add or Update item
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log('running submit');
  
  const name = nameInput.value;
  const id = itemIdInput.value;

  if (id) {
    // Update
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });
  } else {
    // Create
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });
  }

  resetForm();
  loadItems();
});

// Edit
function editItem(id, name, price, description) {
  itemIdInput.value = id;
  nameInput.value = name;
  priceInput.value = price;
  descInput.value = description;
}

// Delete
async function deleteItem(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
  loadItems();
}

// Reset form
function resetForm() {
  itemIdInput.value = "";
  nameInput.value = "";
}

cancelBtn.addEventListener("click", resetForm);

// Initial load
loadItems();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    name: nameInput.value,
    price: priceInput.value,
    description: descInput.value
  };

  const id = itemIdInput.value;

  if (id) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  }

  resetForm();
  loadItems();
});