const balloon = document.getElementById("balloon");

let fontSize = 20; // initial font size in pixels

function inflateBalloon() {
    fontSize *= 1.1; // inflate by 10%
    balloon.style.fontSize = fontSize + "px";

    // check if balloon size exceeds a certain limit
    if (fontSize > 100) {
        balloon.innerHTML = "💥"; // explode
        document.removeEventListener("keydown", handleKey); // remove event listener
    }
}

function deflateBalloon() {
    fontSize *= 0.9; // deflate by 10%
    balloon.style.fontSize = fontSize + "px";
}

function handleKey(event) {
    if (event.key === "ArrowUp") {
        inflateBalloon();
    } else if (event.key === "ArrowDown") {
        deflateBalloon();
    }
}

// Add event listener for key presses
document.addEventListener("keydown", handleKey);
