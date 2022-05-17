// Pasikartoti masyvo struktura
// ismokti sukurti elementa javascript faile
// susipazinti su append/prepend metodus
console.log("12 paskaita");

const array = ["Kestutis","Tomas", "Lina"];
const numbers = [1,2,3,4];
const users = [
    {name: "Kestutis", age:12},
    {name:"Tomas", age:13},
];

const list = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

// const divs = [<div>Kestutis</div>, <div>Tomas</div>];
const fruits = document.getElementsByTagName("li");
const fruits2 = document.querySelectorAll("#fruit");
console.log(fruits);
console.log(numbers);
console.log(fruits2);


// naujo HTML elemento sukurimas
const pineApple = document.createElement("li");
const fruitsList = document.getElementById("fruits");

// <li></li>
pineApple.textContent = "Pineapple";
// <li>Pineapple</li>
const pear = document.createElement("li");
pear.textContent = "Pear";
pear.style.color = "green";



fruitsList.append(pineApple);
fruitsList.prepend(pear);

const extraList = document.createElement("ol");
// <ol></ol>
extraList.append(pineApple);
extraList.prepend(pear);
// extraList.append(pineApple, pear);
document.body.append(extraList);



// Automobilio aprasymas

const card = document.createElement("div");
card.style.background = "#f3f3f3";
card.style.display = "flex";



const image = document.createElement("img");
image.src = "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?fit=crop&format=jpg&crop=4560,2565,x790,y784,safe";
image.alt = "red Ferrari";
image.style.width = "50%";
image.style.paddingRight ="5px";
const info = document.createElement("div");
const title = document.createElement("h1");
title.textContent = "Ferrari F8";

const description = document.createElement("p");
description.textContent = "Very nice car";
const benefits = document.createElement("ul");
const benefits1 = document.createElement("li");
benefits1.textContent = "Color";
const benefits2 = document.createElement("li");
benefits2.textContent = "Price";
const benefits3 = document.createElement("li");
benefits3.textContent = "Speed";


// const benefitList = ["Color", "Price", "Speed", "Emotion"];
// for (let i = 0; i < benefitList.length; i++) {
// const benefitDescription = benefitList[i];
// const benefit = document.createElement("li");
// benefit.textContent = benefitDescription;
// benefits.append(benefit);
// }


benefits.append(benefits1, benefits2, benefits3);

info.append(title, description,benefits);

card.append(image, info);
document.body. append(card)