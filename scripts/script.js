// JavaScript Document
console.log("hi");

var openButton = document.querySelector("header > button");
var sluitButton = document.querySelector("nav button");


// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.addEventListener("click", openMenu);

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}



// stap 2 - laat die button luisteren naar kliks
sluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}