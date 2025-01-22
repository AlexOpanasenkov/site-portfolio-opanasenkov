const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const menuLinks = document.querySelectorAll(".menu-link");

btn.addEventListener("click", ()=> {
  nav.classList.toggle("menu-open");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("menu-open"); // Закрываем меню при клике на ссылку
  });
});

// Проблема заключается в том, что ваше меню .menu занимает всю высоту экрана (top: 0; bottom: 0;), и при переходе к якорю оно остаётся видимым. Вам нужно скрывать меню при клике на якорную ссылку.

// Решение
// Добавьте обработчик события click для всех ссылок в меню, чтобы при нажатии на ссылку меню закрывалось.