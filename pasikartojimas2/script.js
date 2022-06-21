console.log("Pasikartojis su DOM");
console.log("");

// document.getElementById("pirmas"); // p
// document.getElementsByClassName("item"); // [p, p] masyvas
// document.getElementById("id"); // vienaskaita grazina {}

// document.getElementsByClassName("klase"); // daugiskaita grazina []

// document.getElementsByName("name"); // daugiskaita grazina []

// document.getElementsByTagName("div"); // daugiskaita grazina []

// document.getElementById("pirmas"); // p

// const items = document.getElementsByClassName("item"); // [p , p]

// // items[0];

// // items[items.length - 1];

// document.getElementsByName("mano-input"); // []

// document.getElementsByTagName("p");

// document.querySelector("div"); // vienaskaita grazina pagal elementa {}

// document.querySelector(".card"); // vienaskaita grazina pagal klase {}

// document.querySelector("#price"); // vienaskaita grazina pagal id {}

// document.querySelector(".card div"); // vienaskaita

// const allParagraphs = document.querySelectorAll("p"); // daugiskaita []

// const first = allParagraphs[0];

// const last = allParagraphs[allParagraphs.length - 1];

// first.style.background = "red";

// const help = document.getElementById("help");

// help.textContent = "Rokas yra geras zmogus";

// help.style.background = "red";

document.getElementById("h2Name").textContent = "Kęstutis";
document.getElementById("h2Name").style.color = "green";

document.body.style.backgroundColor = "#4267b2";

document.getElementById("h2Somebody").textContent = "Labadiena, geros dienos";
document.getElementById("h2Somebody").style.textAlign = "center";
// greetingEl.style.display = "flex";

// greetingEl.style.justifyContent = "center";

// greetingEl.style.alignItems = "center";

// greetingEl.style.height = "80vh";

const blackCube = document.createElement("div");
blackCube.style.height = "100px";
blackCube.style.width = "100px";
blackCube.style.border = "1px solid black";
blackCube.style.backgroundColor = "black";
document.body.append(blackCube);

const yellowCube = document.createElement("div");
yellowCube.style.height = "50px";
yellowCube.style.width = "50px";
yellowCube.style.backgroundColor = "yellow";
document.body.append(yellowCube);
const greenCube = document.createElement("div");
greenCube.style.height = "100px";
greenCube.style.width = "100px";
greenCube.style.backgroundColor = "green";
document.body.append(greenCube);
const redCube = document.createElement("div");
redCube.style.height = "150px";
redCube.style.width = "150px";
redCube.style.backgroundColor = "red";
document.body.append(redCube);

const fruits = ["banana", "apple", "pear"];

const list = document.createElement("ul");

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  const listItem = document.createElement("li");
  listItem.textContent = fruit;
  list.append(listItem);
}

document.body.append(list);
