const seatsContainer = document.querySelector("#seats");

for (let i = 1; i <= 10; i++) {

    const seat = document.createElement("div");

    seat.className = "seat";

    seat.textContent = i;
    /*
        textContent → I want to put text.
        innerText → I want the visible text.
        innerHTML → I want to put HTML.
    */
    console.log(seat);

    seatsContainer.appendChild(seat);
}

console.log(p1.textContent);
console.log(p1.innerText);

console.log(p2.textContent);
console.log(p2.innerText);