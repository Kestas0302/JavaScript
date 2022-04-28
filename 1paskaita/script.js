// Vienos linijos komentaras
/* 
    Sveiki cia yra 
    Multi line komentaras

*/

// "let" Sukuriam kintamuosius
let myName;
let age;
let mySurname;
let fullName;
let result;
let average;
let percent;

console.log(myName); // undefined - vienas iš tipų, naudojamas kai kintamasis yra sukurtas, bet nturi priskirtos reikšmės



//  Priskiriam kintamiesiems reiksmes
myName = "Kęstutis"; //string - reikšmė aprašoma tarp kabučių "" arba ''
age = 30; //number - reikšmė aprašoma iš skaičių. Sveikas skaičius - pvz:10 arba su kableliu 3.14
mySurname = "Margelis";

fullName = myName + " " + mySurname; //sudėtis  - tarp dviejų tokių pačių tipų (string+string)
result = age + age; // 30+30 = 60
result = result + result;
average = (8 + 8 + 9 + 10 + 7)/5;// vidurkis
percent = (100*20)/60;// 33,3(3) %
percentOutput = percent + "%";



// console.log(age);
console.log(myName);
// console.log(fullName);

//console.log("Kęstutis");
//console.log(result);
//console.log(average);
// console.log(percent + "%");
// console.log(percentOutput);
// console.log(9+9); //18
// console.log("9"+"9"); //99
// console.log(40+"760"); //40760

// sukuriame kintamuosius su "const" (konstanta)
const myDogName = "Topas";
const myDogAge = 3;
const greetings = "Sveikas" + " " + myDogName + "!";



// 1.Kada naudoti "let" ir kada "const"
// 2.naudoti "let" kai reikalinga kintanti reikšmė, o "const" kai reikalinga nekintanti reikšmė
// 3. Visada nnaudojame triguba lygybę "===", nes tikrina tipą ir reikšmę


// sukūrus kintamąjį visada turime priskirti reišmę

let questions = "How are you?";


// myDogName = "Dipas"; // šiuo atveju bus error, nes jau yra konstanta
console.log(myDogName);
console.log(myDogAge);
console.log(greetings);
console.log(questions);

questions = "Kaip laikaisi ?"

console.log(questions);

// string, number, boolean

const yes = true; //teigiama reikšmė
const no = false; // neigiama reikšmė
let isAdult = true;

// console.log(yes);
// console.log(no);
console.log("Kęstutis" == "kestutis"); //nelygus = false 
console.log(10 == 10); //10 yra lygu 10 = true
console.log(10 !== 10); // 10 yra nelygu 10 = false
console.log(5 !== 4); // 5 yra nelygu 4 = true


// dviguba lygybė "==" tikrina ar reikšmė yra lygi
console.log("5" == 5); // true

// triguba lygybė "===" tikrina ar reikšmė ir tipas toks pats
console.log("5" === 5); //false


// Visos neigiamos reikšmės yra undefined, null, 0 , "", false

console.log("4" !=4);
console.log("4" !== 4);

