const input = document.querySelector("input");
const cards = document.querySelector(".cards");

const btn = document.querySelector(".btn");
const popup = document.querySelector(".container-popup");

const back = document.querySelector(".back");
let count = 0;


btn.onclick = () => {

  /**gera numero aleatório */  
  const numberRandom = Math.floor(Math.random() * 100);

  if (input.value.length === 0) {
    alert("digite uma palavra para poder jogar");
  } else {
    /**cria card */
    const textCard = document.createTextNode(`${(count += 1)}`);

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    card.appendChild(textCard);

    cards.appendChild(card);

    /**cria popup */
    const textPopup = document.createTextNode(`${input.value}`);

    const numberPopup = document.createTextNode(numberRandom);

    let messagePopup = "";

    const h2 = document.createElement("h2");
    h2.appendChild(textPopup);

    const number = document.createElement("p");
    number.setAttribute("class", "number");
    number.appendChild(numberPopup);

    const description = document.createElement("p");
    description.setAttribute("class", "description");

    /**verifica qual mensagem usar */
    if (numberRandom % 2 === 0) {
      messagePopup = document.createTextNode(
        "Conte uma história verdadeira relacionada a palavra se seus amigos acertarem você bebe se eles errarem eles bebem"
      );
      description.appendChild(messagePopup);
    } else {
      messagePopup = document.createTextNode(
        "Conte uma história mentirosa relacionada a palavra se seus amigos acertarem você bebe se eles errarem eles bebem"
      );
      description.appendChild(messagePopup);
    }

    /**renderiza */
    card.onclick = () => {
      toggle();
      popup.appendChild(h2);
      popup.appendChild(number);
      popup.appendChild(description);


      /**remove o card após um minuto para os jogadores não usarem a mesma palavra sem querer*/
      setTimeout(() =>{
        cards.removeChild(card)
    }, 120000)
    };

    /** destroi popup*/
    back.onclick = () => {
      popup.innerHTML = "";
      toggle();
    };

    input.value = "";
  }
};

/** toggle para o popup */
function toggle() {
  const blur = document.getElementById("blur");
  blur.classList.toggle("active");

  const popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
