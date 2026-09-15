const seatsContainer = document.querySelector("#seats");

const selectedSeatsText =
    document.querySelector("#selectedSeats");

const selectedCountText =
    document.querySelector("#selectedCount");

let selectedSeats = [];


for (let i = 1; i <= 20; i++) {

    const seat = document.createElement("img");

    seat.className = "seat";

    // Booked seats
    if (i == 3 || i == 7 || i == 12 || i == 18) {

        seat.src = "images/not.png";

    }
    else {

        seat.src = "images/avail.png";

        seat.addEventListener("click", function () {

            if (seat.src.includes("avail.png")) 
            {

                // Select seat
                seat.src = "images/select.png";

                selectedSeats.push(i);

            }
            else 
            {

                // Unselect seat
                seat.src = "images/avail.png";

                selectedSeats.splice(selectedSeats.indexOf(i), 1);
            }

            // Display selected seats
            selectedSeatsText.textContent = selectedSeats.join(", ");

            // Display count
            selectedCountText.textContent =
                "Selected Count: " + selectedSeats.length;

        });
    }

    seatsContainer.appendChild(seat);
}