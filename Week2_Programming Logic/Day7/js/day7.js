let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

var animal = "cat";
switch(animal)
{
case "horse":
console.log("It's a horse");
break;
case "mouse":
console.log("It's a mouse");
break;
case "cat":
console.log("It's a cat");
break;
default:
console.log("I don't know what it is");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let j = 1;

while (j <= 5) {
    console.log(j);
    j++;
}

let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);

//break
/*
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
*/
// continue
/*
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
*/