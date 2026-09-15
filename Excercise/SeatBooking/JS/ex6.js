const seatsContainer = document.querySelector("#seats");

const selectedSeatsText =
    document.querySelector("#selectedSeats");

const selectedCountText =
    document.querySelector("#selectedCount");


// Seat data
const bookedSeats = [3, 7, 12, 18];


// User selection
let selectedSeats = [];


for (let i = 1; i <= 20; i++) {

    const seat = document.createElement("img");

    seat.className = "seat";


    // Check whether this seat is booked
    if (bookedSeats.includes(i)) {

        seat.src = "images/not.png";

    }
    else {

        seat.src = "images/avail.png";


        // Seat click
        seat.addEventListener("click", function () {

            if (seat.src.includes("avail.png")) {

                // Select
                seat.src = "images/select.png";

                selectedSeats.push(i);

            }
            else {

                // Unselect
                seat.src = "images/avail.png";

                selectedSeats.splice(
                    selectedSeats.indexOf(i),
                    1
                );
            }


            // Display selected seats
            selectedSeatsText.textContent =
                selectedSeats.join(", ");


            // Display count
            selectedCountText.textContent =
                "Selected Count: " +
                selectedSeats.length;

        });
    }


    seatsContainer.appendChild(seat);
}