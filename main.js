const add = document.getElementById('add');
const section = document.querySelector('section');
add.addEventListener("click", (event) => {
    const item = document.getElementById('item').value;
    section.innerHTML += `<p>${item}<span><i class="fa-solid fa-xmark"></i></span></p>`;
});

const items = document.querySelectorAll('section > p');
const deleteButtons = items.querySelectorAll('span');