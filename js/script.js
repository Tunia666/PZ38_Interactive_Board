"use strict";

const searchInput = document.querySelector("#search-input");
const ideaForm = document.querySelector("#idea-form");
const ideaInput = document.querySelector("#idea-input");
const list = document.querySelector("#ideas-list");
const count = document.querySelector("#favorite-count");
const status = document.querySelector("#board-status");

function updateCount() {
  count.textContent = list.querySelectorAll(".fav-button.is-favorite").length;
}

// Задание 1. На input в searchInput переберите .idea-card через querySelectorAll().
// Сравните data-title с запросом в нижнем регистре и переключите is-hidden.

// Задание 2. На keydown в searchInput обработайте Escape:
// очистите поле и вызовите обновление поиска (можно dispatchEvent(new Event("input"))).

// Задание 3. На submit формы создайте li.idea-card, span и button.fav-button.
// Запишите data-title, добавьте в список и очистите поле.
// Обновите фильтр, чтобы новая карточка сразу отображалась корректно.

// Задание 4. Подключите один click к list. Найдите .fav-button через closest().
// Переключите is-favorite, aria-pressed и символ ☆ / ★. Вызовите updateCount().
