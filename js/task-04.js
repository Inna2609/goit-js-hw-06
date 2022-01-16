// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const diminutiveBtn = document.querySelector('[data-action="decrease"]');
const magnifyingBtn = document.querySelector('[data-action="increase"]');
const elem = document.querySelector('#value');

diminutiveBtn.addEventListener('click', onBtnClickDecrease);

magnifyingBtn.addEventListener('click', onBtnClickIncrease);

function onBtnClickDecrease() {
  counterValue -= 1;
  elem.textContent = counterValue;
};

function onBtnClickIncrease() {
  counterValue += 1;
  elem.textContent = counterValue;
};