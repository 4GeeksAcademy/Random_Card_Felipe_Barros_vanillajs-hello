/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Declaramos las variables fuera de la funcion como variable global
const numbers = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const cardType = ["spade", "club", "heart", "diamond"];

//llamando a los elementos del html
const upperSymbol = document.getElementById("upperSymbol");
const centralNumber = document.getElementById("centralNumber");
const lowerSymbol = document.getElementById("lowerSymbol");
const cardElement = document.getElementById("card");
const generateButton = document.getElementById("generate-button");

function cardGenerator() {
  //Obtenemos un numero aleatorio entre 0 y la longitud del array que coloquemos
  const randomNumber = Math.floor(Math.random() * numbers.length)
  const randomCardType = Math.floor(Math.random() * cardType.length)
  let suit = "";

  switch (cardType[randomCardType]) {
    case "spade":
      suit = "♠";
      break;

    case "club":
      suit = "♣";
      break;

    case "heart":
      suit = "♥";
      break;

    case "diamond":
      suit = "♦";
      break;
  }

  // Metemos el contenido aleatorio en cada div
  upperSymbol.innerHTML = suit;
  centralNumber.innerHTML = numbers[randomNumber];
  lowerSymbol.innerHTML = suit;

  // Limpiar las clases
  cardElement.className = "card";

  // añadimos la clase de card
  cardElement.classList.add(cardType[randomCardType]);
}

window.onload = function() {
  cardGenerator();
};

generateButton.addEventListener("click", cardGenerator);

const temporizador = setInterval(cardGenerator, 3000);
