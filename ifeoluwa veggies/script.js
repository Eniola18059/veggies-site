// Countdown Timer for Promo
const countdownElement = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const promoEndDate = new Date("December 15, 2024 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = promoEndDate - now;

  // If the promo has ended
  if (timeLeft <= 0) {
    countdownElement.innerHTML = "The promo has ended!";
    clearInterval(countdownInterval); // Stop the interval
    return;
  }

  // Calculate time components
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update countdown values
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Smooth Scrolling for Navigation Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Floating WhatsApp Icon Interaction
const whatsappIcon = document.querySelector(".fab.fa-whatsapp");
if (whatsappIcon) {
  whatsappIcon.style.cursor = "pointer";
  whatsappIcon.addEventListener("click", () => {
    window.open("https://wa.me/07087853939", "_blank");
  });
}
