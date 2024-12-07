import { gymStickAnimation } from "./frames/gymStick.js";

const placeholder = document.getElementById("stickman");
const startButton = document.getElementById("start");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const pauseButton = document.getElementById("pause");

let play = false;
let counter = 0;
let intervalId = null;

const runAnimation = () => {
    if (!play) {
        play = true;
        animate();
    }
};

const pauseAnimation = () => {
    if (play) {
        play = false;
        clearInterval(intervalId);
        intervalId = null;
    }
};

const previousFrame = () => {
    if (counter > 0) {
        counter--;
        placeholder.innerHTML = gymStickAnimation[counter % 10];
    }
};

const nextFrame = () => {
    if (counter < 200) {
        counter++;
        placeholder.innerHTML = gymStickAnimation[counter % 10];
    }
};

startButton.addEventListener("click", runAnimation);
pauseButton.addEventListener("click", pauseAnimation);
previousButton.addEventListener("click", previousFrame);
nextButton.addEventListener("click", nextFrame);

const animate = () => {
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        if (!play || counter > 200) {
            clearInterval(intervalId);
            intervalId = null;
            return;
        }

        placeholder.innerHTML = gymStickAnimation[counter % 10];
        counter++;
    }, 500);
};
