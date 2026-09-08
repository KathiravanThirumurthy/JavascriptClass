// Shopping Cart & Order Management System


// Product List

let products = [
    {
        id: 101,
        name: "T-Shirt",
        category: "Clothing",
        price: 499,
        stock: 10
    },
    {
        id: 102,
        name: "Jeans",
        category: "Clothing",
        price: 999,
        stock: 5
    },
    {
        id: 103,
        name: "Shoes",
        category: "Footwear",
        price: 1499,
        stock: 8
    },
    {
        id: 104,
        name: "Cap",
        category: "Accessories",
        price: 299,
        stock: 15
    },
    {
        id: 105,
        name: "Backpack",
        category: "Bags",
        price: 799,
        stock: 6
    }
];


// Shopping Cart

let cart = [];


// Display All Products

function displayProducts() {

    console.log("========== AVAILABLE PRODUCTS ==========");

    for (let i = 0; i < products.length; i++) {

        console.log(
            "ID:", products[i].id,
            "| Name:", products[i].name,
            "| Category:", products[i].category,
            "| Price: ₹" + products[i].price,
            "| Stock:", products[i].stock
        );
    }

    console.log("========================================");
}


// Search Product

function searchProduct(productName) {

    let product = products.find(function(item) {
        return item.name.toLowerCase() === productName.toLowerCase();
    });

    if (product) {

        console.log("Product Found:");
        console.log(product);

    } else {

        console.log("Product not found.");

    }
}


// Add Product to Cart

function addToCart(productId, quantity) {

    let product = products.find(function(item) {
        return item.id === productId;
    });

    if (!product) {

        console.log("Product not found.");
        return;

    }

    if (product.stock < quantity) {

        console.log(
            "Sorry, only " + product.stock +
            " " + product.name + " available."
        );

        return;
    }

    let cartItem = cart.find(function(item) {
        return item.id === productId;
    });

    if (cartItem) {

        cartItem.quantity = cartItem.quantity + quantity;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });

    }

    product.stock = product.stock - quantity;

    console.log(
        quantity + " " + product.name +
        " added to cart."
    );
}


// Remove Product from Cart

function removeFromCart(productId) {

    let cartIndex = cart.findIndex(function(item) {
        return item.id === productId;
    });

    if (cartIndex === -1) {

        console.log("Product is not in the cart.");
        return;

    }

    let removedProduct = cart[cartIndex];

    // Return the quantity back to product stock

    let product = products.find(function(item) {
        return item.id === productId;
    });

    product.stock = product.stock + removedProduct.quantity;

    cart.splice(cartIndex, 1);

    console.log(
        removedProduct.name + " removed from cart."
    );
}


// Display Cart

function displayCart() {

    console.log("========== SHOPPING CART ==========");

    if (cart.length === 0) {

        console.log("Your cart is empty.");
        return;

    }

    for (let i = 0; i < cart.length; i++) {

        let itemTotal =
            cart[i].price * cart[i].quantity;

        console.log(
            "Name:", cart[i].name,
            "| Price: ₹" + cart[i].price,
            "| Quantity:", cart[i].quantity,
            "| Total: ₹" + itemTotal
        );
    }

    console.log("===================================");
}


// Calculate Subtotal

function calculateSubtotal() {

    let subtotal = 0;

    for (let i = 0; i < cart.length; i++) {

        subtotal =
            subtotal +
            (cart[i].price * cart[i].quantity);
    }

    return subtotal;
}


// Apply Discount

function applyDiscount(subtotal) {

    let discount = 0;

    if (subtotal >= 2000) {

        discount = subtotal * 0.10;

    } else if (subtotal >= 1000) {

        discount = subtotal * 0.05;

    }

    return discount;
}


// Calculate Final Amount

function calculateFinalAmount() {

    let subtotal = calculateSubtotal();

    let discount = applyDiscount(subtotal);

    let finalAmount = subtotal - discount;

    return finalAmount;
}


// Display Order Summary

function displayOrderSummary() {

    let subtotal = calculateSubtotal();

    let discount = applyDiscount(subtotal);

    let finalAmount = calculateFinalAmount();

    console.log("========== ORDER SUMMARY ==========");

    displayCart();

    console.log("Subtotal: ₹" + subtotal);
    console.log("Discount: ₹" + discount);
    console.log("Final Amount: ₹" + finalAmount);

    console.log("===================================");
}


// Test the Program


// Display all products

displayProducts();


// Search for a product

console.log("\n--- SEARCH PRODUCT ---");

searchProduct("Jeans");


// Add products to cart

console.log("\n--- ADDING PRODUCTS ---");

addToCart(101, 2);
addToCart(102, 1);
addToCart(104, 2);


// Display cart

console.log("\n--- CURRENT CART ---");

displayCart();


// Display order summary

console.log("\n--- ORDER SUMMARY ---");

displayOrderSummary();


// Remove a product

console.log("\n--- REMOVE PRODUCT ---");

removeFromCart(104);


// Display updated cart

console.log("\n--- UPDATED CART ---");

displayCart();


// Display final order summary

console.log("\n--- FINAL ORDER SUMMARY ---");

displayOrderSummary();