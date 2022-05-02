console.log("Trečia paskaita: switch, ternary operatoriai, for ciklas");

// KEY

// const key = 8;

// argumentas "key" turi atitikti case reiksme

// switch (key) {
//   case 1:
//     console.log("pirmadienis");
//     break;

//   case 2:
//     console.log("antradienis");
//     break;
//   case 3:
//     console.log("treciadienis");

//     break;
//   case 4:
//     console.log("ketvirtadienis");
//     break;
//   case 5:
//     console.log("penktadienis");
//     case 6:
//     case 7:
//         console.log("savaitgalis");
//     break;
//     default:
//         console.log("Blogai įrašyta savaitės diena");
//         break;
// }

// TERNARY

// const age =21;
// const legalAge =18;
// const drinkingAge = 20;
// const celsiusDegrees = 25;
// let result = "pilnametis";
// if (age < legalAge){
//     result = "nepilnametis";
// }


// Ternary simboliai ?:
// ? if
// 
//                    if salyga           patenkina        else
// const resultTernary = age < legalAge ? "nepilnametis":"nepilnametis";
// const drink = age >= drinkingAge ? "Bear":"Milk";
// const weather = celsiusDegrees <= 0? "Cold": celsiusDegrees <= 25 ? "Warm": "Hot";
// console.log(weather);
// console.log(drink);
// console.log(result);
// console.log(resultTernary);

const myName = "Kestutis";
const mySurname = "Margelis";
 console.log( myName + " " + mySurname);

// Naudoti template string `` tik tada, kai dedame kintamuosius į vidų.

//  Tinkamas variantas rasant
// ____________________________________
 console.log(`${myName} ${mySurname}`);
// ____________________________________


const fullNameOld = myName + " " + mySurname;

const fullNameNew = `${myName} ${mySurname}`;