// !!!!! Rasybos klaidos!!!!
// 1. Tikriname ar esu Repository aplanke
// 2. Patikrinti ar issaugojau failus
// 3. Patikrinti ar irasiau console.log()
// 4. Patikrinti ar tinkamai paleidau node script.js
// 5. Patikrinti terminal ismetama zinute
// 6. Vaikciojimas tarp folderiu: ("cd .." - grizta per viena folderi), ("cd "folderName") - eina 1 folderi i prieki
// 7. Jeigu naudoju 2 ar daugiau variables reikia iskelti i isore

console.log("Sveiki, cia antra paskaita");

// 1 uzduotis
// atsakymas C

// let money = 106.5;

// let price = 108.5;

// currency = "$";

// if (money > price) {
//     const change = money - price;
//     // const currency = "$";
//   console.log("Tu nusipirkai daikta. Tavo graza:" + currency + change); // A
// } else if (money === price) {
//   console.log("Tu nusipirkai daikta ir sumokejai lygiai"); // B
// } else {
//     const missingMoney = price - money;
//     // const currency = "$";
//   console.log("Tau neuztenka pinigu daiktui nusipirkti. Tau truksta:" + currency + missingMoney ); // C
// }

// 2 uzduotis
// atsakymas silver, medal keist i const,

const runner = "Kendyll";

const position = 2;

let medal = "pat on the back";

if (position === 1) {
  medal = "gold";
} else if (position === 2) {
  medal = "silver";
} else if (position === 3) {
  medal = "bronze";
}

// console.log(runner + " received a " + medal + " medal.");

// 3 uzduotis

const number = 13;
const result = number % 2;
// program to check if the number is even or odd
// take input from the user const number = prompt("Enter a number: ");
//check if the number is even
if (number % 2 == 0) {
  //   console.log(number + " " + "The number is even.");
  //  skaicius lyginis
}
// if the number is odd
else {
  //   console.log(number + " " + "The number is odd.");
  // skaicius nelyginis
}

// 4 uzduotis

const musicians = "Rock";
const band = 3;

if (band <= 0) {
  console.log(musicians + " solo");
} else if (band <= 1) {
  console.log(musicians + " duo");
} else if (band <= 3) {
  console.log(musicians + " trio");
} else if (band <= 4) {
  console.log(musicians + " quatro");
} else if (band >> 4) {
  console.log("Big band");
}

// Codeacademy uzduotys

// 1 uzduotis

const legalAge = 20;
const clientAge = 20;

if (clientAge >= legalAge) {
  console.log("Client are legal age");
} else if (clientAge << legalAge) {
  console.log("Client are not legal age");
}

// 2 uzduotis

// const str = 'Life, the universe and everything. Answer:';
// console.log(`${str} ${str.length}`);

const myName = "Kestutis";
const str = myName.length;
if (str >= 6) {
  console.log("Ilgas vardas");
} else console.log(str);

// 3 uzduotis

const myAge = 0.1;

if (myAge < 1) {
  console.log("Invalid age");
} else if (18 >= myAge >= 1) {
  console.log("Child");
} else if (myAge >= 100) {
  console.log("Invalide age");
} else console.log("Adult");

// 4 uzduotis

const car = "VW";
if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
  console.log('VW Group');
} else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
  console.log('BMW Group');
} else {
  console.log('Nei vienam');
}