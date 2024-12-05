const anchorLink = document.querySelector(".anchor-link");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    anchorLink.classList.add("show");
  } else {
    anchorLink.classList.remove("show");
  }
});

let timeRemaining = 90;
let timerInterval;
let timer = document.querySelector(".content__timer");
let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let headerSecond = document.querySelector(".header-second");
let footerSecond = document.querySelector(".footer-second");
let isVisible = true;

function updateTimer() {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  timer.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    toggleHeaderFooter();
    timeRemaining = 90;
    startTimer();
  } else {
    timeRemaining--;
  }
}

function toggleHeaderFooter() {
  if (isVisible) {
    header.classList.add("hidden");
    footer.classList.add("hidden");
    header.classList.remove("visible");
    footer.classList.remove("visible");

    headerSecond.classList.add("visible");
    footerSecond.classList.add("visible");
    headerSecond.classList.remove("hidden");
    footerSecond.classList.remove("hidden");
  } else {
    headerSecond.classList.add("hidden");
    footerSecond.classList.add("hidden");
    headerSecond.classList.remove("visible");
    footerSecond.classList.remove("visible");

    header.classList.add("visible");
    footer.classList.add("visible");
    header.classList.remove("hidden");
    footer.classList.remove("hidden");
  }

  isVisible = !isVisible;
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

startTimer();
