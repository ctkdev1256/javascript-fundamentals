const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

resetButtonEl.addEventListener("click", () => {
  // Set counter to 0
  counterValueEl.textContent = 0;

  // Reset background color
  counterEl.classList.remove(".counter--limit");

  // Reset counter title
  counterTitleEl.textContent = "Counter";

  // Enable increase and decrease buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // Unfocus (blur) reset button
  resetButtonEl.blur();
});

const decrementCounter = () => {
  const currentValue = counterValueEl.textContent;

  // Convert value to number type
  const currentValueAsNumber = +currentValue;

  // Decrement by 1
  const newValue = currentValueAsNumber - 1;

  // Check if new value is less than 0
  if (newValue < 0) {
    // if it is, force it to be 0
    newValue = 0;
  }

  // Update counter element with new value
  counterValueEl.textContent = newValue;

  // Unfocus (blur) button
  decreaseButtonEl.blur();
};

decreaseButtonEl.addEventListener("click", decrementCounter);

const incrementCounter = () => {
  // Get current value of counter
  const currentValue = counterValueEl.textContent;

  // Convert value to number type
  const currentValueAsNumber = +currentValue;

  // Increment by 1
  let newValue = currentValueAsNumber + 1;

  // Check if new value is greater than 10
  if (newValue > 10) {
    //if it is, force it to be 10
    newValue = 10;

    // Set a visual indicator that limit has been reached
    counterEl.classList.add("counter--limit");

    // Update counter title to said limit has been reached
    counterTitleEl.innerHTML = "Limit has been reached. <b>10!</>";

    // Disable increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  // Set counter element with new value
  counterValueEl.textContent = newValue;

  // Unfocus (blur) button
  increaseButtonEl.blur();
};

increaseButtonEl.addEventListener("click", incrementCounter);

document.addEventListener("keydown", incrementCounter);
