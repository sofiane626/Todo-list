// référence à l'élément input
let input = document.getElementsByClassName("input1")[0];

// référence à l'élément bouton
let button = document.getElementsByClassName("btn-ajouter")[0];

let div = document.getElementsByClassName("div3")[0];

// écouteur d'événement pour le bouton
button.addEventListener("click", function () {
  // créer une nouvelle div
  let newDiv = document.createElement("div");

  // Ajouter la classe "todo-div" à la nouvelle div
  newDiv.className = "todo-div";

  // créer la div "div-gauche"
  let leftDiv = document.createElement("div");
  leftDiv.className = "div-gauche";

  // créer la div "div-droite"
  let rightDiv = document.createElement("div");
  rightDiv.className = "div-droite";

  // Ajout des icones fontawesome
  rightDiv.innerHTML = `
   <i class="fa-solid fa-circle-check"></i>
    <i class="fa-solid fa-pen"></i>
<i class="fa-solid fa-trash-can"></i>
`;

  // créer un nouveau élément <p>
  let newP = document.createElement("p");

  // ajouter le contenu de l'input à l'élément <p>
  newP.innerHTML = input.value;

  // ajouter l'élément <p> à la div "div-gauche"
  leftDiv.appendChild(newP);

  // ajouter les divs "div-gauche" et "div-droite" à la div "todo-div"
  newDiv.appendChild(leftDiv);
  newDiv.appendChild(rightDiv);

  // ajouter la nouvelle div à la page
  div.appendChild(newDiv);

  input.value = "";

  rightDiv.querySelector(".fa-pen").addEventListener("click", function () {
    let input = document.createElement("input");
    input.className = "class-test";
    input.value = newP.innerHTML;
    let pElement = newP;
    newP.parentNode.replaceChild(input, newP);

    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        let p = document.createElement("p");
        p.innerHTML = input.value;
        input.parentNode.replaceChild(p, input);
        newP = p;
      }
    });
  });

  // ajout écouteur d'événement pour l'icône de suppression
  rightDiv
    .querySelector(".fa-trash-can")
    .addEventListener("click", function () {
      newDiv.remove();
    });

  let defaultBackgroundColor;

  // ajout écouteur d'événement pour l'icône de vérification
  rightDiv
    .querySelector(".fa-circle-check")
    .addEventListener("click", function () {
      // récupérer la couleur de fond par défaut de la div "todo-div"
      if (!defaultBackgroundColor) {
        defaultBackgroundColor = window
          .getComputedStyle(newDiv)
          .getPropertyValue("background-color");
      }

      // récupérer la couleur de fond actuelle de la div "todo-div"
      let currentBackgroundColor = window
        .getComputedStyle(newDiv)
        .getPropertyValue("background-color");

      // vérifier si la couleur de fond actuelle est différente de la couleur de fond par défaut
      if (currentBackgroundColor !== defaultBackgroundColor) {
        // si elle est différente, la changer en la couleur de fond par défaut
        newDiv.style.backgroundColor = defaultBackgroundColor;
      } else {
        // si elle est la même, la changer en vert
        newDiv.style.backgroundColor = "green";
      }
    });

  let doneButton = document.querySelector("#terminer");
  doneButton.addEventListener("click", function () {
    let todoDivs = document.querySelectorAll(".todo-div");
    for (let i = 0; i < todoDivs.length; i++) {
      let computedStyle = window.getComputedStyle(todoDivs[i]);
      let backgroundColor = computedStyle.getPropertyValue("background-color");
      if (backgroundColor !== "rgb(0, 128, 0)") {
        todoDivs[i].style.display = "none";
      } else {
        todoDivs[i].style.display = "flex";
      }
    }
  });

  let todoButton = document.querySelector("#faire");
  todoButton.addEventListener("click", function () {
    let todoDivs = document.querySelectorAll(".todo-div");
    for (let i = 0; i < todoDivs.length; i++) {
      let computedStyle = window.getComputedStyle(todoDivs[i]);
      let backgroundColor = computedStyle.getPropertyValue("background-color");
      if (backgroundColor === "rgb(0, 128, 0)") {
        todoDivs[i].style.display = "none";
      } else {
        todoDivs[i].style.display = "flex";
      }
    }
  });

  let allButton = document.querySelector("#tous");
  allButton.addEventListener("click", function () {
    let todoDivs = document.querySelectorAll(".todo-div");
    for (let i = 0; i < todoDivs.length; i++) {
      todoDivs[i].style.display = "flex";
    }
  });
});
