// Objekto savybe property yra reiksmes (string,number, array, objeck ir t.t.) melyna spalva
// Objekto metodai (method) yra funkcijos atitikmuo. Reikia iskviesti ir paduoti parametrus

// console.log(document);
// document.getElementById;

// function hello(name){
//     return `Hello ${name}`;

// }
//     hello("Kestutis");

//     const use ={
//         name:"Kestutis",
//         password: "bulve123",
//         email:"bulve@gmail.com",
//         login: hello,
//     };

//     const dokument={
//         childNodes:[],
//         nodeName:"",
//         getElementById: (elementId)=>{},
//     };

// console.log(user.login("Kestutis"));
// console.log(user);
// console.log(document);

const nameId = document.getElementById("name");
console.log(nameId.textContent);
console.log(nameId.innerText);
console.log(nameId.innerHTML);
// nameId.innerHTML=<ul><li>HHH</li></ul>

nameId.addEventListener("click", handleClickOnName);
function handleClickOnName() {
  // console.log(this.textContent);
  nameId.style.color = "red";
  nameId.style.background = "green";
  nameId.style.textAlign = "right";
  nameId.style.fontSize = "72px";
}

const jumpButton = document.getElementById("jump");
jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px";

let inTop = true;
jumpButton.addEventListener("click", handleJump);
function handleJump() {
  if (inTop) {
    jumpButton.style.cssText = "position: absolute; bottom: 30px; left: 30px";
    jumpButton.textContent = "Jump to top";
    inTop = false;
  } else {
    jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px";
    jumpButton.textContent = "Jump to bottom";

    inTop = true;
  }
  // inTop=!inTop;
}
const backwardsButton = document.getElementById("backwards");
backwardsButton.addEventListener("click", handleGoBackwards);
let position = 0;
const topLeft = "position: absolute; top: 10px; left: 10px;"; //pradine reiksme - 0
const topRight = "position: absolute; top: 10px; right: 10px;"; //1
const bottomRight = "position: absolute; bottom: 10px; right: 10px;"; //2
const bottomLeft = "position: absolute; bottom: 10px; left: 10px;"; //3

function handleGoBackwards() {
  if (position === 0) {
    backwardsButton.style.cssText = bottomLeft;
  } else if (position === 1) {
    backwardsButton.style.cssText = bottomRight;
  } else if (position === 2) {
    backwardsButton.style.cssText = topRight;
  } else {
    backwardsButton.style.cssText = topLeft;
    position=-1;
  }
  position++;
  console.log(position);
}
