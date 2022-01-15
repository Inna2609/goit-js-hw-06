// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories", numberOfCategories.length);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// const ul = Array.from(document.querySelector('#categories').children);
const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};

// В результате, в консоли будут выведены такие сообщения.
// Number of categories: 3
// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5