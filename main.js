const add = document.getElementById('add');
const section = document.querySelector('section');
const item = document.getElementById('item');
let count = 0;

const addItem = (event) => {
    if (item.value !== "") {
        section.innerHTML += `<p id="${count++}">${item.value}<span><i class="fa-solid fa-xmark"></i></span></p>`;
        item.value = "";
    }
};

add.addEventListener("click", addItem);
item.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});

const items = document.querySelectorAll('section > p');
const deleteButtons = document.querySelectorAll('section > p > span');