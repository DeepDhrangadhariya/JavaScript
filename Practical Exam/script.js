let products = [];

    function addProduct() {
        const title = document.getElementById('title').value.trim();
        const price = parseFloat(document.getElementById('price').value);
        const image = document.getElementById('image').value.trim();
        const category = document.getElementById('category').value.trim();

        if (!title || !price || isNaN(price)) {
            alert('Please provide a valid title and price.');
            return;
        }

        const product = { id: Date.now(), title, price, image, category };
        products.push(product);
        saveProducts();
        addProductToList();
        clearInputs();
    }

    function editProduct(id) {
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            const title = prompt('Enter new title:');
            const price = parseFloat(prompt('Enter new price:'));
            const image = prompt('Enter new image URL:');
            const category = prompt('Enter new category:');

            if (title && price && !isNaN(price)) {
                products[index] = { id, title, price, image, category };
                saveProducts();
                addProductToList();
            } else {
                alert('Invalid input.');
            }
        }
    }

    function deleteProduct(id) {
        products = products.filter(product => product.id !== id);
        saveProducts();
        addProductToList();
    }

    function saveProducts() {
        localStorage.setItem('products', JSON.stringify(products));
    }

    function loadProducts() {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            products = JSON.parse(storedProducts);
        }
    }

    function addProductToList() {
        const productList = document.getElementById('productList');
        productList.innerHTML = '';
        products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${product.image}" alt="${product.title}" style="max-width: 100px;">
                <div>
                    <h3>${product.title}</h3>
                    <p>Price: $${product.price}</p>
                    <p>Category: ${product.category}</p>
                </div>
                <div>
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="deleteProduct(${product.id})">Delete</button>
                </div>
            `;
            productList.appendChild(li);
        });
    }

    function clearInputs() {
        document.getElementById('title').value = '';
        document.getElementById('price').value = '';
        document.getElementById('image').value = '';
        document.getElementById('category').value = '';
    }

    function sortProducts(order) {
        products.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
        addProductToList();
    }

    function searchProducts() {
        const searchTerm = document.getElementById('search').value.trim().toLowerCase();
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
        renderFilteredProducts(filteredProducts);
    }

    function filterProducts() {
        const category = document.getElementById('categoryFilter').value;
        const filteredProducts = category ? products.filter(product => product.category.toLowerCase() === category.toLowerCase()) : products;
        renderFilteredProducts(filteredProducts);
    }

    function renderFilteredProducts(filteredProducts) {
        const productList = document.getElementById('productList');
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${product.image}" alt="${product.title}" style="max-width: 100px;">
                <div>
                    <h3>${product.title}</h3>
                    <p>Price: $${product.price}</p>
                    <p>Category: ${product.category}</p>
                </div>
                <div>
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="deleteProduct(${product.id})">Delete</button>
                </div>
            `;
            productList.appendChild(li);
        });
    }

    loadProducts();
    addProductToList();