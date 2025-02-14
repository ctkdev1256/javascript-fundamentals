//button disabled
// document.querySelector('.btn').disabled = true;

// const buttonEl = document.querySelector('.btn');
// buttonEl.blur();
// buttonEl.focus();

// const inputEl = document.querySelector('.input');
// inputEl.value = 'asdfasdf';

const headingEl = document.querySelector(".heading");
// headingEl.textContent = 'Hello World.';

// const headingEl = document.querySelector('.heading');
// headingEl.innerHTML = 'Hello <span>Everyone</span>.';

headingEl.insertAdjacentElement("beforebegin", "Hello <span>everyone</span>");
