const add = document.getElementById('add');
const section = document.querySelector('section');
const itemName = document.getElementById('item-name');
let count = 0;

const addItem = () => {
    if (itemName.value !== "") {
        const item = document.createElement('p');
        item.setAttribute('id', count++);
        item.innerHTML = `${itemName.value}<span class="delete"><i class="fa-solid fa-xmark"></i></span>`;

        section.appendChild(item);
        itemName.value = "";
    }
};

add.addEventListener("click", addItem);
itemName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});

// const items = document.querySelectorAll('section > p');
// const deleteButtons = document.querySelectorAll('.delete');
section.addEventListener('click', (event) => {
    if (event.target.tagName === "I") {
        const id = event.target.parentNode.parentNode.getAttribute('id');
        let items = section.children;
        for (const item of items) {
            if (item.getAttribute("id") === id) {
                section.removeChild(item);
                return;
            }
        }
    }
});