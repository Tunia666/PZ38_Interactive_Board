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

function filterIdeas() {
  const query = searchInput.value.trim().toLowerCase();
  
  list.querySelectorAll(".idea-card").forEach((card) => {
    const matches = card.dataset.title.toLowerCase().includes(query);
    card.classList.toggle("is-hidden", !matches);
  });
}

searchInput.addEventListener("input", filterIdeas);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchInput.value = "";
    searchInput.dispatchEvent(new Event("input"));
    status.textContent = "поиск очищен.";
  }
});
ideaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const ideaText = ideaInput.value.trim();
  if (!ideaText) return;
  const li = document.createElement("li");
  li.className = "idea-card";
  li.dataset.title = ideaText;

  const span = document.createElement("span");
  span.textContent = ideaText;

  const button = document.createElement("button");
  button.className = "fav-button";
  button.type = "button";
  button.textContent = "☆";
  button.setAttribute("aria-pressed", "false");

  li.append(span, button);
  list.append(li);

  ideaInput.value = "";
  
  filterIdeas();
});

list.addEventListener("click", (event) => {
  const favButton = event.target.closest(".fav-button");
  if (!favButton) return;

  const isFavorite = favButton.classList.toggle("is-favorite");

  favButton.setAttribute("aria-pressed", isFavorite ? "true" : "false");
  favButton.textContent = isFavorite ? "★" : "☆";

  updateCount();
});
