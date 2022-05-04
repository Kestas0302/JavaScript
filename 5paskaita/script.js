// let rnd = Math.random();
// let rnd512 = Math.floor((rnd * 8) + 5 );
// console.log(rnd512);

// console.log("5 paskaita. DOM manipuliavimas");

const nameNode = document.getElementById("name");
// console.log(nameNode. textContent);
nameNode.textContent = "Jonas";
const descriptionNode = document.getElementById("description");
document.getElementById("description").textContent = "Man patinka programuoti";

document.body.style.backgroundColor = "#f1f1f1";
nameNode.style.color = "green";
descriptionNode.style.backgroundColor = "cyan";

// const discountNode = document.querySelector("li");
// const liById = document.querySelector("discount");
// console.log(liById);
const discountedItems = document.querySelectorAll("#discount");
console.log(discountedItems[0]);
console.log(discountedItems.length);

// Roko pratimas

const imageSrc = 'https://crocoder.dev/icon.png';

  const divElement = document.querySelector('div');

  const imgElement = document.createElement('img');

  imgElement.src = imageSrc;

  divElement.appendChild(imgElement);
