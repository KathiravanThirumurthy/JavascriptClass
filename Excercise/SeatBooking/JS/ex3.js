const seatsContainer = document.querySelector("#seats");

for (let i = 1; i <= 20; i++) {

    const seat = document.createElement("img");

    seat.className = "seat";

    if (i == 3 || i == 7 || i == 12 || i == 18) {
        seat.src = "images/not.png";
    }
    else {
        seat.src = "images/avail.png";
    }

    seatsContainer.appendChild(seat);
}