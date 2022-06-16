// let userName

// userName = "Dogas";

// let goodbye

// goodbye = "Viso gero" + " " + `${userName}` + ", lauksime sugriztant";

// console.log(goodbye);

// const userName = "Mopas";

// const goodBye = `Viso gero ${userName}, lauksime sugriztant`;
// console.log(goodBye);

// const salary = 2000;

// const salary1 = `$${salary}`;

// console.log(salary1);

// const price = 10;

// if (price > 10) {
//     console.log("Perku");
// } else{
//     console.log("Neperku")
// };

// const hours = 25;

// if (hours > 0 && hours <= 6) {
//     console.log("Naktis");
// } else if (hours > 6 && hours <= 12 ) {
//     console.log("Rytas");
// } else if (hours > 12 && hours <= 18) {
//     console.log("Diena");
// } else if (hours > 18 && hours <= 24) {
//     console.log("Vakaras");
// }else {
//     console.log("Blogas laikas");

// };

const price = 10;

const buyOrNot = price > 10 ? "Perku" : "Neperku";
console.log(buyOrNot);


const hours = 25;

const dayTime =
    hours > 18 && hours <= 24
    ? "Vakaras"
    : hours > 12 && hours <= 18
    ? "Diena"
    : hours >  6 && hours <= 12
    ? "Rytas"
    : hours > 0 && hours <= 6
    ? "Naktis"
    : "Blogas laikas";

    console.log(dayTime);


    const myName = "Kęstutis";
const firstChar = myName[0];
console.log(firstChar);
const lastChar = myName[myName.length - 1];
console.log(lastChar);


const count = myName.length;
console.log(count);

for (let i=0; i<myName.length; i++){
    const char = myName[i];
    console.log(`${char}`);
}


for (let i=0; i<myName.length; i++){
    const char = myName[i];
    console.log(`${i+1}. ${char}`);
}
