console.log("Shopping cart");
/*

Display every product price.
Calculate the total bill.
Display the total.
*/
let prices = [250, 120, 500, 80, 300];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    console.log("Product Price:", prices[i]);
    total = total + prices[i];
}

console.log("Total Bill:", total);

/*
let marks = [85, 72, 91, 64, 45, 78, 95];
Display each student's mark.
Count how many students passed (>= 50).
Count how many failed.
Calculate the average mark.

*/

let marks = [85, 72, 91, 64, 45, 78, 95];

let passed = 0;
let failed = 0;
let totalmarks = 0;

for (let i = 0; i < marks.length; i++) {

    // Display each student's mark
    console.log("Student " + (i + 1) + " Mark:", marks[i]);

    // Calculate total
    totalmarks = totalmarks + marks[i];

    // Count pass and fail
    if (marks[i] >= 50) {
        passed++;
    } else {
        failed++;
    }
}

// Calculate average
let average = total / marks.length;

console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("Average Mark:", average);

/*
Youtube Videos
let views = [1200, 4500, 2300, 8900, 1500];
Calculate total views.
Find the highest views.
Find the lowest views.
*/
let views = [1200, 4500, 2300, 8900, 1500];

let totalviews = 0;
let highestview = views[0];
let lowestview = views[0];

for (let i = 0; i < views.length; i++) {

    // Calculate total views
    totalviews = totalviews + views[i];

    // Find highest views
    if (views[i] > highestview) {
        highestview = views[i];
    }

    // Find lowest views
    if (views[i] < lowestview) {
        lowestview = views[i];
    }
}

console.log("Total Views:", totalviews);
console.log("Highest Views:", highestview);
console.log("Lowest Views:", lowestview);

/*

Skip Out-of-Stock Products
let stock = [10, 0, 5, 0, 20, 8];
If stock is 0, skip that product using:
continue;
Output
Product 1 → In Stock: 10
Product 3 → In Stock: 5
Product 5 → In Stock: 20
Product 6 → In Stock: 8

*/

let stock = [10, 0, 5, 0, 20, 8];

for (let i = 0; i < stock.length; i++) {

    // Skip out-of-stock products
    if (stock[i] === 0) {
        continue;
    }

    console.log("Product " + (i + 1) + " - In Stock:", stock[i]);
}