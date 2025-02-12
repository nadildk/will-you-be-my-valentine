const maxClicks = 7;
const title = document.getElementById("title");
const penguinImg = document.getElementById("penguinImg");
const buttonsContainer = document.getElementById("buttonsContainer");
const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

let counter = 0;

function hideButtons() {
    buttonsContainer.style.display = "none";
    buttonsContainer.style.visibility = "hidden";
}

function displayAcceptance() {
    const flowerPetals = document.getElementById("flowerPetals");
    const acceptSound = document.getElementById("acceptSound");

    title.textContent = "💝💖";

    flowerPetals.style.display = "block";
    flowerPetals.style.visibility = "visible";

    acceptSound.play();

    hideButtons();
}

function displayRejection() {
    const rejectSound = document.getElementById("rejectSound");

    title.textContent = "oh ok...";

    penguinImg.src = "assets/valentineRejected.gif";
    document.body.style.backgroundColor = "#a0b2ee";

    rejectSound.play();

    hideButtons();
}

function randomizeButtonLocation() {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

noButton.onclick = function() {
    counter += 1
    
    randomizeButtonLocation();

    if (counter === maxClicks) {
        displayRejection();
    }
};

yesButton.onclick = function() {
    displayAcceptance();
}