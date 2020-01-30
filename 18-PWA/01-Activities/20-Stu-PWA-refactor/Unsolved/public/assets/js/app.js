import {createCard, createCards} from "./cardCreation";
import {createRatingForm, updateRating} from "./rating";

loadImages();

createCards();

function createEl(htmlString = "", className) {
  const el = document.createElement(htmlString);
  if (className) {
    el.setAttribute("class", className);
  }
  return el;
}

function loadImages() {
  fetch("http://localhost:3000/api/images").then((res) => res.json())
    .then((data) => createCards(data));
}


