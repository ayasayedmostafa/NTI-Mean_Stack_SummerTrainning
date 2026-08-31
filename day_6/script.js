var products = [
  { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
  { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
  { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
  { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
];

var editId = null;

function nextId() {
  var max = 0;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id > max) {
      max = products[i].id;
    }
  }
  return max + 1;
}

function showProducts() {
  var tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    var row = document.createElement("tr");
    if (p.id === editId) {
      row.className = "editing";
    }

    row.innerHTML =
      "<td>" + p.id + "</td>" +
      "<td>" + p.name + "</td>" +
      "<td>" + p.category + "</td>" +
      "<td>" + p.price + "</td>" +
      "<td>" + p.quantity + "</td>" +
      "<td>" +
      "<button onclick='editProduct(" + p.id + ")'>Edit</button>" +
      "<button class='delete-btn' onclick='deleteProduct(" + p.id + ")'>Delete</button>" +
      "</td>";

    tbody.appendChild(row);
  }
}

function getInputs() {
  var name = document.getElementById("nameInput").value.trim();
  var category = document.getElementById("categoryInput").value.trim();
  var price = parseFloat(document.getElementById("priceInput").value);
  var qty = parseInt(document.getElementById("quantityInput").value);

  return { name: name, category: category, price: price, quantity: qty };
}

function clearInputs() {
  document.getElementById("nameInput").value = "";
  document.getElementById("categoryInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("quantityInput").value = "";
}

function handleAdd() {
  var data = getInputs();

  if (data.name == "") {
    alert("write a name");
    return;
  }
  if (isNaN(data.price) || data.price <= 0) {
    alert("price not valid");
    return;
  }
  if (isNaN(data.quantity) || data.quantity < 0) {
    alert("quantity not valid");
    return;
  }

  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase() == data.name.toLowerCase()) {
      alert("this product already exists");
      return;
    }
  }

  products.push({
    id: nextId(),
    name: data.name,
    category: data.category,
    price: data.price,
    quantity: data.quantity
  });

  clearInputs();
  showProducts();
}

function editProduct(id) {
  var p = null;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      p = products[i];
    }
  }
  if (p == null) return;

  document.getElementById("nameInput").value = p.name;
  document.getElementById("categoryInput").value = p.category;
  document.getElementById("priceInput").value = p.price;
  document.getElementById("quantityInput").value = p.quantity;

  editId = id;
  document.getElementById("formTitle").innerText = "Update Product";
  document.getElementById("addBtn").classList.add("hide");
  document.getElementById("updateBtn").classList.remove("hide");
  document.getElementById("cancelBtn").classList.remove("hide");

  showProducts();
}

function handleUpdate() {
  if (editId == null) return;

  var data = getInputs();

  if (data.name == "") {
    alert("write a name");
    return;
  }
  if (isNaN(data.price) || data.price <= 0) {
    alert("price not valid");
    return;
  }
  if (isNaN(data.quantity) || data.quantity < 0) {
    alert("quantity not valid");
    return;
  }

  for (var i = 0; i < products.length; i++) {
    if (products[i].id === editId) {
      products[i].name = data.name;
      products[i].category = data.category;
      products[i].price = data.price;
      products[i].quantity = data.quantity;
    }
  }

  cancelEdit();
}

function cancelEdit() {
  editId = null;
  clearInputs();
  document.getElementById("formTitle").innerText = "Add Product";
  document.getElementById("addBtn").classList.remove("hide");
  document.getElementById("updateBtn").classList.add("hide");
  document.getElementById("cancelBtn").classList.add("hide");
  showProducts();
}

function deleteProduct(id) {
  var sure = confirm("delete this product?");
  if (!sure) return;

  var newProducts = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id !== id) {
      newProducts.push(products[i]);
    }
  }
  products = newProducts;

  if (editId === id) {
    cancelEdit();
  } else {
    showProducts();
  }
}

showProducts();