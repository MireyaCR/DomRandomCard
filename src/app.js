/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function baraja() {
    let numeros = [
      "A",
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
    let figuras = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const cartas = [];
    for (let i = 0; i < figuras.length; i++) {
      for (let j = 0; j < numeros.length; j++) {
        cartas.push(numeros[i], figuras[j]);
      }
    }
    return cartas;
  }
  function randomcard(cartas) {
    const random = Math.floor(Math.random() * 51);
    const numerorandom = cartas[random].numeros;
    const figurasrandom = cartas[random].figuras;
    let entity;
    cardSuit === "Diamonds"
      ? (entity = "&diams;")
      : (entity = "&" + cardSuit.toLowerCase() + ";");
    const card = document.createElement("div");
    card.classList.add("card", cardSuit.toLowerCase());
    card.innerHTML =
      '<span class="card-value-suit top">' +
      cardValue +
      entity +
      "</span>" +
      '<span class="card-suit">' +
      entity +
      "</span>" +
      '<span class="card-value-suit bot">' +
      cardValue +
      entity +
      "</span>";
    document.body.appendChild(card);
  }
};
