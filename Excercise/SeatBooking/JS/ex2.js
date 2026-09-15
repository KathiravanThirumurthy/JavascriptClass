const seatsContainer = document.querySelector("#seats");

for (let i = 1; i <= 10; i++) {

    const seat = document.createElement("img");

    seat.className = "seat";

    seat.src = "images/avail.png";

    seatsContainer.appendChild(seat);
}