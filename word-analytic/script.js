const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  // Input Validation
  if (textareaEl.value.includes("<script>")) {
    alert("You cannot use <script> in your text.");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  // Determine new numbers
  let numberOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.includes === 0) {
    numberOfWords = 0;
  }
  const numberCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 40 - numberCharacters;
  const facebookCharactersLeft = 60 - numberCharacters;

  // Visual indictor limit(s) characters exceeded
  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharactersLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }

  // Set new numbers
  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
};

textareaEl.addEventListener("input", inputHandler);
