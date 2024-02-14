const productForm = document.getElementById("productForm");
const productTitle = document.getElementById("productTitle");
const productPrice = document.getElementById("productPrice");
const productImage = document.getElementById("productImage");
const productCategory = document.getElementById("productCategory");
const productList = document.getElementById("productList");

let productData = JSON.parse(localStorage.getItem("products")) || [];

function addProduct(product) {
  productData.push(product);
  localStorage.setItem("products", JSON.stringify(productData));
}

function addProductToList() {
  productList.innerHTML = "";
  productData.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.setAttribute("id","listDiv")
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.title}" width="400" />
      <h1>${product.title}</h1>
      <h3>Price: $ ${product.price}</h3>
      
      <h4>Category: ${product.category}</h4>
      <button data-id="${product.id}" onclick="deleteProduct(${product.id})">Delete</button>
    `;
    productList.appendChild(productDiv);
  });
}

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(productData));
}

function deleteProduct(id) {
      productData = productData.filter((p) => p.id !== id);
      saveProducts();
      addProductToList();
    }

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = {
    id: Date.now(),
    title: productTitle.value,
    price: productPrice.value,
    image: productImage.value,
    category: productCategory.value,
  };
  addProduct(product);
  productTitle.value = "";
  productPrice.value = "";
  productImage.value = "";
  productCategory.value = "";
  addProductToList();
  saveProducts();
});

addProductToList();


// const productForm = document.getElementById("productForm");
// const productTitle = document.getElementById("productTitle");
// const productPrice = document.getElementById("productPrice");
// const productImage = document.getElementById("productImage");
// const productCategory = document.getElementById("productCategory");
// const productList = document.getElementById("productList");
// const editForm = document.getElementById("editForm");
// const editTitle = document.getElementById("editTitle");
// const editPrice = document.getElementById("editPrice");
// const editImage = document.getElementById("editImage");
// const editCategory = document.getElementById("editCategory");
// const editProductBtn = document.getElementById("editProductBtn");
// const deleteProductBtn = document.getElementById("deleteProductBtn");
// let currentProductId = null;

// let productData = JSON.parse(localStorage.getItem("products")) || [];

// function addProduct(product) {
//   productData.push(product);
//   localStorage.setItem("products", JSON.stringify(productData));
// }

// function addProductToList() {
//   productList.innerHTML = "";
//   productData.forEach((product) => {
//     const productDiv = document.createElement("div");
//     productDiv.innerHTML = `
//       <h3>${product.title}</h3>
//       <p>Price: ${product.price}</p>
//       <img src="${product.image}" alt="${product.title}" width="100" />
//       <p>Category: ${product.category}</p>
//       <button data-id="${product.id}" onclick="editProduct(${product.id})">Edit</button>
//       <button data-id="${product.id}" onclick="deleteProduct(${product.id})">Delete</button>
//     `;
//     productList.appendChild(productDiv);
//   });
// }

// function editProduct(id) {
//   currentProductId = id;
//   const product = productData.find((p) => p.id === id);
//   if (product) {
//     editTitle.value = product.title;
//     editPrice.value = product.price;
//     editImage.value = product.image;
//     editCategory.value = product.category;
//   }
// }

// function saveEditedProduct() {
//   if (currentProductId === null) return;
//   const product = productData.find((p) => p.id === currentProductId);
//   if (product) {
//     product.title = editTitle.value;
//     product.price = editPrice.value;
//     product.image = editImage.value;
//     product.category = editCategory.value;
//     saveProducts();
//     currentProductId = null;
//   }
// }

// function deleteProduct(id) {
//   productData = productData.filter((p) => p.id !== id);
//   saveProducts();
//   addProductToList();
// }

// function saveProducts() {
//   localStorage.setItem("products", JSON.stringify(productData));
// }

// productForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const product = {
//     title: productTitle.value,
//     price: productPrice.value,
//     image: productImage.value,
//     category: productCategory.value,
//     id: new Date().getTime(),
//   };
//   addProduct(product);
//   productTitle.value = "";
//   productPrice.value = "";
//   productImage.value = "";
//   productCategory.value = "";
//   addProductToList();
//   saveProducts();
// });

// editProductBtn.addEventListener("click", saveEditedProduct);







