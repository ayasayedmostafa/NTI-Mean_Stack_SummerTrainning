var store = (function () {
  var products = [
    { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
    { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
    { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
    { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
  ];

  function getNextId() {
    if (products.length === 0) {
      return 1;
    }
    var maxId = products.reduce(function (max, p) {
      return p.id > max ? p.id : max;
    }, 0);
    return maxId + 1;
  }

    function createProduct(name, price, category, quantity) {
    name = String(name).trim();
    category = String(category).trim();

    if (name === "") {
      return "Error: name is required";
    }
    if (typeof price !== "number" || isNaN(price) || price <= 0) {
      return "Error: price must be a number greater than 0";
    }
    if (!Number.isInteger(quantity) || quantity < 0) {
      return "Error: quantity must be an integer >= 0";
    }

    var isDuplicate = products.some(function (p) {
      return p.name.trim().toLowerCase() === name.toLowerCase();
    });
    if (isDuplicate) {
      return "Error: product name already exists";
    }

    var newProduct = {
      id: getNextId(),
      name: name,
      price: price,
      category: category,
      quantity: quantity
    };
    products.push(newProduct);
    return newProduct;
  }

  /////
    function getAllProducts() {
    return products;
  }

  function printProducts(list) {
    console.table(list);
  }

  function getProductById(id) {
    var found = products.find(function (p) {
      return p.id === id;
    });
    return found ? found : null;
  }

  //
    function updateProduct(id, name, price, category, quantity) {
    var product = getProductById(id);
    if (!product) {
      return "Error: product not found";
    }

    if (name !== undefined && name !== null && String(name).trim() !== "") {
      product.name = String(name).trim();
    }
    if (price !== undefined && price !== null && !isNaN(price) && price > 0) {
      product.price = price;
    }
    if (category !== undefined && category !== null && String(category).trim() !== "") {
      product.category = String(category).trim();
    }
    if (quantity !== undefined && quantity !== null && Number.isInteger(quantity) && quantity >= 0) {
      product.quantity = quantity;
    }

    return product;
  }

    function deleteProduct(id) {
    var product = getProductById(id);
    if (!product) {
      return "Error: product not found";
    }

    var sure = confirm('Delete "' + product.name + '"? this cannot be undone');
    if (!sure) {
      return "Delete cancelled";
    }

    var index = products.findIndex(function (p) {
      return p.id === id;
    });
    var removed = products.splice(index, 1);
    return removed[0];
  }

    function filterProducts(keyword) {
    var key = String(keyword).trim().toLowerCase();
    return products.filter(function (p) {
      return (
        p.name.trim().toLowerCase().includes(key) ||
        p.category.trim().toLowerCase().includes(key)
      );
    });
  }

    /////
  function sortByPrice(order) {
    if (order === undefined) {
      order = "asc";
    }
    return products.toSorted(function (a, b) {
      return order === "desc" ? b.price - a.price : a.price - b.price;
    });
  }

  ///////
  function getStoreStats() {
    var totalProducts = products.length;
    var totalStockValue = products.reduce(function (sum, p) {
      return sum + p.price * p.quantity;
    }, 0);
    var totalPriceSum = products.reduce(function (sum, p) {
      return sum + p.price;
    }, 0);
    var averagePrice = totalProducts > 0 ? (totalPriceSum / totalProducts).toFixed(2) : "0.00";
    var outOfStockCount = products.filter(function (p) {
      return p.quantity === 0;
    }).length;

    return {
      totalProducts: totalProducts,
      totalStockValue: totalStockValue,
      averagePrice: averagePrice,
      outOfStockCount: outOfStockCount
    };
  }

  //////
  function groupByCategory() {
    return products.reduce(function (groups, p) {
      if (!groups[p.category]) {
        groups[p.category] = [];
      }
      groups[p.category].push(p);
      return groups;
    }, {});
  }

  ////
  function filterByPriceRange(min, max) {
    if (min === undefined) min = 0;
    if (max === undefined) max = Infinity;
    return products.filter(function (p) {
      return p.price >= min && p.price <= max;
    });
  }

  //////
  var inStock = (list) => list.filter((p) => p.quantity > 0);

  function withAfterAction(fn, callback) {
    var result = fn();
    if (typeof callback === "function") {
      callback();
    }
    return result;
  }

  ////////
  function addMany(...items) {
    var results = [];
    items.forEach(function (item) {
      results.push(createProduct(item.name, item.price, item.category, item.quantity));
    });
    return results;
  }

  return {
    getAllProducts: getAllProducts,
    printProducts: printProducts,
    createProduct: createProduct,
    getProductById: getProductById,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    filterProducts: filterProducts,
    sortByPrice: sortByPrice,
    getStoreStats: getStoreStats,
    groupByCategory: groupByCategory,
    inStock: inStock,
    withAfterAction: withAfterAction,
    addMany: addMany
  };
})();


function createProduct(name, price, category, quantity) {
  return store.createProduct(name, price, category, quantity);
}
function getAllProducts() {
  return store.getAllProducts();
}
function printProducts(list) {
  store.printProducts(list);
}
function getProductById(id) {
  return store.getProductById(id);
}
function updateProduct(id, name, price, category, quantity) {
  return store.updateProduct(id, name, price, category, quantity);
}
function deleteProduct(id) {
  return store.deleteProduct(id);
}
function filterProducts(keyword) {
  return store.filterProducts(keyword);
}

function startApp() {
  while (true) {
    var choice = prompt(
      "===== NTI Mini Store =====\n" +
      "1) Add product\n" +
      "2) Show all products\n" +
      "3) Show product by ID\n" +
      "4) Update product\n" +
      "5) Delete product\n" +
      "6) Search / Filter\n" +
      "0) Exit"
    );

    if (choice === null || choice === "0") {
      console.log("Bye!");
      break;
    }

    switch (choice) {
      case "1": {
        var name = prompt("Product name:");
        var price = parseFloat(prompt("Price:"));
        var category = prompt("Category:");
        var quantity = parseInt(prompt("Quantity:"), 10);

        var result = createProduct(name, price, category, quantity);
        if (typeof result === "string") {
          alert(result);
        } else {
          console.log("Product added:");
          console.table([result]);
        }
        break;
      }

      case "2": {
        printProducts(getAllProducts());
        break;
      }

      case "3": {
        var id3 = parseInt(prompt("Enter product ID:"), 10);
        if (isNaN(id3)) {
          alert("Please enter a valid number");
          break;
        }
        var product3 = getProductById(id3);
        if (product3) {
          console.table([product3]);
        } else {
          alert("Product not found");
        }
        break;
      }

      case "4": {
        var id4 = parseInt(prompt("Enter product ID to update:"), 10);
        if (isNaN(id4)) {
          alert("Please enter a valid number");
          break;
        }
        var existing = getProductById(id4);
        if (!existing) {
          alert("Product not found");
          break;
        }

        var newName = prompt('New name (leave empty to keep "' + existing.name + '"):');
        var newPriceInput = prompt("New price (leave empty to keep " + existing.price + "):");
        var newCategory = prompt('New category (leave empty to keep "' + existing.category + '"):');
        var newQuantityInput = prompt("New quantity (leave empty to keep " + existing.quantity + "):");

        var newPrice = newPriceInput === "" || newPriceInput === null ? undefined : parseFloat(newPriceInput);
        var newQuantity = newQuantityInput === "" || newQuantityInput === null ? undefined : parseInt(newQuantityInput, 10);

        var updated = updateProduct(
          id4,
          newName === "" ? undefined : newName,
          newPrice,
          newCategory === "" ? undefined : newCategory,
          newQuantity
        );

        if (typeof updated === "string") {
          alert(updated);
        } else {
          console.log("Product updated:");
          console.table([updated]);
        }
        break;
      }

      case "5": {
        var id5 = parseInt(prompt("Enter product ID to delete:"), 10);
        if (isNaN(id5)) {
          alert("Please enter a valid number");
          break;
        }
        var deleteResult = deleteProduct(id5);
        if (typeof deleteResult === "string") {
          alert(deleteResult);
        } else {
          alert("Deleted: " + deleteResult.name);
        }
        break;
      }

      case "6": {
        var keyword = prompt("Search by name or category:");
        if (keyword === null || keyword.trim() === "") {
          alert("Please enter a keyword");
          break;
        }
        var results = filterProducts(keyword);
        if (results.length === 0) {
          alert('No products match "' + keyword + '"');
        } else {
          printProducts(results);
        }
        break;
      }

      default: {
        alert("Invalid choice, please pick a number from 0 to 6");
      }
    }
  }
}

startApp();