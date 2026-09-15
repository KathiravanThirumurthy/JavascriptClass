const seatsContainer = document.querySelector("#seats");

for (let i = 1; i <= 20; i++) {

    const seat = document.createElement("img");

    seat.className = "seat";

    // Create booked seats
    if (i == 3 || i == 7 || i == 12 || i == 18) {

        seat.src = "images/not.png";

    }
    else {

        seat.src = "images/avail.png";

        // Click event
        seat.addEventListener("click", function () 

        {
            console.log("Clicked");
            //Is this seat currently available?
            // includes is string method "apple".includes("app")     // true
            if (seat.src.includes("avail.png")) {

                seat.src = "images/select.png";

            }
            else {

                
                seat.src = "images/avail.png";

            }

        });
    }

    seatsContainer.appendChild(seat);
}