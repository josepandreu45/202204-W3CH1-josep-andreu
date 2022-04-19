import personajes from "./personajes.js";
import CardComponent from "./js-html/CardComponent.js";

for (let i = 0; i < personajes.length; i++) {
  const personaje = new CardComponent(personajes[i]);
}
