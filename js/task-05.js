// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');

inputEl.addEventListener('input', onInputChange);


function onInputChange(event) {
    
    spanEl.textContent = event.currentTarget.value;  

    if (inputEl.value  === null || inputEl.value  === '') {
        spanEl.textContent = 'Anonymous';
    }
};
