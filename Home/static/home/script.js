const staticUrl = document.body.getAttribute("data-static-url");


const productGrid = document.getElementById('productGrid');
const farmerGrid = document.getElementById('farmerGrid');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeButtons = document.querySelectorAll('.close');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Sample Data for Indian Farmers and Products
const products = [
    {
        id: 1,
        name: "Tomatoes",
        description: "Fresh and juicy, grown organically",
        price: 40,
        quantity: 100,
        unit: "kg",
        image: staticUrl+"images/tomatoes.jpg"
    },
    {
        id: 2,
        name: "Carrots",
        description: "Sweet and crunchy, rich in vitamins",
        price: 50,
        quantity: 80,
        unit: "kg",
        image: staticUrl+"images/carrot.jpg"
    },
    {
        id: 3,
        name: "Potatoes",
        description: "Freshly harvested, perfect for curries",
        price: 30,
        quantity: 120,
        unit: "kg",
        image: staticUrl+"images/potatoes.jpg"
    },
    {
        id: 4,
        name: "Onions",
        description: "Pungent and flavorful, essential for Indian cooking",
        price: 35,
        quantity: 90,
        unit: "kg",
        image: staticUrl+"images/onion.jpg"
    },
    {
        id: 5,
        name: "Spinach",
        description: "Nutrient-rich leafy greens",
        price: 20,
        quantity: 60,
        unit: "kg",
        image: staticUrl+"images/spinach.jpg"
    },
    {
        id: 6,
        name: "Cauliflower",
        description: "Fresh and white, perfect for sabzi",
        price: 25,
        quantity: 70,
        unit: "kg",
        image: staticUrl+"images/cauliflower.jpg"
    },
    {
        id: 7,
        name: "Brinjal",
        description: "Purple and fresh, great for baingan bharta",
        price: 45,
        quantity: 50,
        unit: "kg",
        image: staticUrl+"images/brinjal.jpg"
    },
    {
        id: 8,
        name: "Cucumber",
        description: "Cool and refreshing, perfect for salads",
        price: 15,
        quantity: 100,
        unit: "kg",
        image: staticUrl+"images/cucumber.jpg"
    }
];

const farmers = [
    {
        id: 1,
        name: "Ramesh Patel",
        location: "Gujarat",
        image: staticUrl+"images/farmer1.jpg"
    },
    {
        id: 2,
        name: "Manoj Sharma",
        location: "Uttar Pradesh",
        image: staticUrl+"images/farmer5.jpg"
    },
    {
        id: 3,
        name: "Rajesh Kumar",
        location: "Punjab",
        image: staticUrl+"images/farmer3.jpg"
    },
    {
        id: 4,
        name: "Anita Singh",
        location: "Maharashtra",
        image: staticUrl+"images/farmer4.jpg"
    }
];

// Render Products
function renderProducts() {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='{% static 'home/images/potatoes.jpg'%}';">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">₹${product.price} / ${product.unit}</div>
                <p>Available: ${product.quantity} ${product.unit}</p>
            </div>
        </div>
    `).join('');
}

// Render Farmers
function renderFarmers() {
    farmerGrid.innerHTML = farmers.map(farmer => `
        <div class="farmer-card">
            <img src="${farmer.image}" alt="${farmer.name}" onerror="this.src='{% static 'home/images/potatoes.jpg'%}';">
            <div class="farmer-info">
                <h3>${farmer.name}</h3>
                <p>${farmer.location}</p>
            </div>
        </div>
    `).join('');
}

//login
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

//Register
registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');
const productForm = document.getElementById('productForm');

addProductBtn.addEventListener('click', () => {
    addProductForm.style.display = 'block';
});

productForm.addEventListener('submit', (e) => {
    e.preventDefault();


    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').value;

    // Create a new product object
    const newProduct = {
        id: products.length + 1,
        name: productName,
        description: productDescription,
        price: productPrice,
        quantity: 0, // Default quantity
        unit: 'kg',
        image: productImage
    };

    // Add the new product to the products array
    products.push(newProduct);

    // Render the updated product list
    renderProducts();

    productForm.reset();
    addProductForm.style.display = 'none';

    alert('Product added successfully!');
});

//Login Form 
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login logic (replace with actual authentication)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        loginModal.style.display = 'none';
    } else {
        alert('Invalid username or password');
    }
});

// Register Form
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const role = document.getElementById('role').value;

    // Simulate registration logic (replace with actual backend integration)
    alert(`Registration successful! Welcome, ${username} (${role}).`);
    registerModal.style.display = 'none';
});

renderProducts();
renderFarmers();