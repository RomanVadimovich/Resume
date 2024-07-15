const hamb1 = document.querySelector("#hamb");
const popup1 = document.querySelector("#popup");
const body1 = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu1 = document.querySelector("#menu").cloneNode(1);


// При клике на иконку hamb вызываем ф-ию hambHandler
hamb1.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup1.classList.toggle("open");
    hamb1.classList.toggle("active");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup1.append(menu1);
}

// Код для закрытия меню при нажатии на ссылку
const links1 = Array.from(menu1.children);

// Для каждого элемента меню при клике вызываем ф-ию
links1.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup1.classList.remove("open");
    hamb1.classList.remove("active");
}