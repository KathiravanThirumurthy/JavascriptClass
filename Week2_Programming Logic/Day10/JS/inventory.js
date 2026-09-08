// Product Inventory System

// Create an array containing 5 product objects

const products = [
    {
        productId: 101,
        productName: "T-Shirt",
        category: "Clothing",
        price: 399,
        stock: 20
    },
    {
        productId: 102,
        productName: "Jeans",
        category: "Clothing",
        price: 899,
        stock: 10
    },
    {
        productId: 103,
        productName: "Cap",
        category: "Accessories",
        price: 299,
        stock: 0
    },
    {
        productId: 104,
        productName: "Shoes",
        category: "Footwear",
        price: 1200,
        stock: 5
    },
    {
        productId: 105,
        productName: "Sunglasses",
        category: "Accessories",
        price: 450,
        stock: 8
    }
];


// BASIC
// 1. Display all products

console.log("----- ALL PRODUCTS -----");

products.forEach(function(product) {
    console.log(product);
});


// 2. Display product names

console.log("----- PRODUCT NAMES -----");

products.forEach(function(product) {
    console.log(product.productName);
});


// 3. Display prices

console.log("----- PRODUCT PRICES -----");

products.forEach(function(product) {
    console.log(product.productName + " - ₹" + product.price);
});


// INTERMEDIATE
// 4. Find products below ₹500

console.log("----- PRODUCTS BELOW ₹500 -----");

const productsBelow500 = products.filter(function(product) {
    return product.price < 500;
});

console.log(productsBelow500);


// 5. Find products with stock = 0

console.log("----- OUT OF STOCK PRODUCTS -----");

const outOfStock = products.filter(function(product) {
    return product.stock === 0;
});

console.log(outOfStock);


// 6. Calculate total inventory value

console.log("----- TOTAL INVENTORY VALUE -----");

const totalInventoryValue = products.reduce(function(total, product) {
    return total + (product.price * product.stock);
}, 0);

console.log("Total Inventory Value: ₹" + totalInventoryValue);


// CHALLENGE
// 7. Search for a product

function searchProduct(productName) {

    const product = products.find(function(product) {
        return product.productName.toLowerCase() === productName.toLowerCase();
    });

    if (product) {
        console.log("----- PRODUCT FOUND -----");
        console.log(product);
    } else {
        console.log("Product not found.");
    }
}


// Test the search function

searchProduct("Jeans");