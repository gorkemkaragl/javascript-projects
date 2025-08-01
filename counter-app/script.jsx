let counter = Number(localStorage.getItem("counter")) || 0;

const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", () => {
  counter++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  counter--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  updateDisplay();
});

function updateDisplay() {
  counterDisplay.textContent = counter;
  localStorage.setItem("counter", counter);

  if (counter > 0) {
    counterDisplay.style.color = "green";
  } else if (counter < 0) {
    counterDisplay.style.color = "red";
  } else {
    counterDisplay.style.color = "#333";
  }
}

updateDisplay(); // İlk ekrana yansıtma için
