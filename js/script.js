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

function filterCards() {
  const query = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".idea-card");
  
  cards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    if (title.includes(query)) {
      card.classList.remove("is-hidden");
    } else {
      card.classList.add("is-hidden");
    }
  });
}

searchInput.addEventListener("input", filterCards);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchInput.value = "";
    searchInput.dispatchEvent(new Event("input"));
  }
});

ideaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const text = ideaInput.value.trim();
  if (!text) return;
  
  const li = document.createElement("li");
  li.classList.add("idea-card");
  li.setAttribute("data-title", text);
  
  const span = document.createElement("span");
  span.textContent = text;
  
  const button = document.createElement("button");
  button.classList.add("fav-button");
  button.setAttribute("aria-pressed", "false");
  button.textContent = "☆";
  
  li.append(span, button);
  list.append(li);
  
  ideaInput.value = "";
  filterCards();
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".fav-button");
  if (!button) return;
  
  const isFavorite = button.classList.toggle("is-favorite");
  button.setAttribute("aria-pressed", isFavorite ? "true" : "false");
  button.textContent = isFavorite ? "★" : "☆";
  
  updateCount();
});