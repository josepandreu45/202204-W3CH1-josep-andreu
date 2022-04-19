import Rey from "../Rey.js";
import Luchador from "../Luchador.js";
import Asesor from "../Asesor.js";
import Escudero from "../Escudero.js";
import Component from "./Component.js";

class CardComponent extends Component {
  constructor(personaje) {
    super();
    this.render(personaje);
  }

  render(personaje) {
    this.element.innerHTML = `
    <div class="card character__card">
            <img
              src="${personaje.nombre === "Joffrey" ? "./img/joffrey.jpg" : ""}
              ${personaje.nombre === "Jaime" ? "./img/jaime.jpg" : ""}
              ${personaje.nombre === "Daenerys" ? "./img/daenerys.jpg" : ""}
              ${personaje.nombre === "Tyrion" ? "./img/tyrion.jpg" : ""}
              ${personaje.nombre === "Bronn" ? "./img/bronn.jpg" : ""}"
              alt="${personaje.nombre} ${personaje.familia}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${personaje.nombre} ${
      personaje.familia
    }</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${personaje.edad} años</li>
                  <li>
                    Estado:
                    
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                ${
                  personaje instanceof Rey
                    ? `<li>Años de reinado: ${personaje.anyosReinado} </li>`
                    : ""
                }
                ${
                  personaje instanceof Luchador
                    ? `<li>Arma: ${personaje.arma} </li>
                    <li>Destreza: ${personaje.destreza}</li>`
                    : ""
                }
                ${
                  personaje instanceof Asesor
                    ? `<li>Asesora a: ${personaje.asesorado.nombre} </li>`
                    : ""
                }
                ${
                  personaje instanceof Escudero
                    ? `<li>Peloteo: ${personaje.pelotismo.nombre} </li>
                    <li>Sirve a: ${personaje.sirveA.nombre}</li>`
                    : ""
                }
                 
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji" >${personaje instanceof Rey ? "👑" : ""}
            ${personaje instanceof Luchador ? "⚔️" : ""}
            ${personaje instanceof Escudero ? "🛡️" : ""}
            ${personaje instanceof Asesor ? "🎓" : ""}
            </i>
          </div>
    `;
  }
}

export default CardComponent;
