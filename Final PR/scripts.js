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