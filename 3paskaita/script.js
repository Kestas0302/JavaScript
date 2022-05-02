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
// const resultTernary = age < legalAge ? "pilnametis":"nepilnametis";
// const drink = age >= drinkingAge ? "Bear":"Milk";
// const weather = celsiusDegrees <= 0? "Cold": celsiusDegrees <= 25 ? "Warm": "Hot";
// console.log(weather);
// console.log(drink);
// console.log(result);
// console.log(resultTernary);

// const myName = "Kestutis";
// const mySurname = "Margelis";
//  console.log( myName + " " + mySurname);

// Naudoti template string `` tik tada, kai dedame kintamuosius į vidų.

//  Tinkamas variantas rasant
// ____________________________________
//  console.log(`${myName} ${mySurname}`);
// ____________________________________

// const fullNameOld = myName + " " + mySurname;

// const fullNameNew = `${myName} ${mySurname}`;






// CodeAcademy uzduotys

// 1 pratimas su switch

const car = "Toyota";

switch (car) {
  case "VW":
  case "Audi":
  case "Bentley":
  case "Bugatti":
  case "Lamborghini":
  case "Porsche":
    console.log("VW group");
    break;
  case "BMW":
  case "Mini":
  case "Rolls-Royce":
    console.log("BMV Group");
    break;
  default:
    console.log("No group");
    break;
}

// 2 pratimas

const userInput = "Baklažanas";
switch (userInput) {
  case "Obuolys":
  case "Kriaušė":
  case "Slyva":
  case "Abrikosas":
  case "Bananas":
    console.log("Vaisius");
    break;
  case "Morka":
  case "Bulvė":
  case "Pomidoras":
  case "Agurkas":
  case "Paprika":
    console.log("Daržovė");

  default:
    console.log("Nepriskirta prie grupių");
    break;
}


// 3 ptatimas 

const weekDay = 7;

switch (weekDay) {
    case 0:
        console.log("Pirmadienis");
        break;
    case 1:
            console.log("Antradienis");
            break;
    case 2:
        console.log("Trečiadienis");
        break;
    case 3:
        console.log("Ketvirtadienis");
        break;
    case 4:
        console.log("Penktadienis");
        break;
    case 5:
        console.log("Šeštadienis");
        break;
    case 6:
        console.log("Sekmadienis");
        break;
                                                                                    
    default:
        console.log("Bloga reikšmė")
        break;
}


//  1 pratimas su ternary

const nameAll = "Lina";
const nameLenght = nameAll.length;
const resulName = nameLenght < 5 ? "Short name" : "Long name";
console.log(resulName);

// 2 pratimas

// const clientAge = 17;
// const legalAge = 18;
// const checkAge = clientAge >= legalAge ? "Can Drive" : "Can't Drive";
// console.log(checkAge);



// 3 pratimas

const clientAge = 18;
const legalAge = 18;
const rangeAge1 = clientAge - legalAge;
const rangeAge2 = clientAge - legalAge;
const checkAge = rangeAge1 < 0? "Invalid age": rangeAge2 > 81 ? "Invalid age": "Normal age" + " - " + "Can Drive";
console.log(checkAge);

// 4 pratimas

const phone = 'iPhone';
const isIphoneUser = phone === 'iPhone';
console.log(isIphoneUser);



// 1 pratimas su ciklais 

for( let i=1; i<11; i++){
    console.log("Kęstutis");
}


// 2 pratimas

for( let i=1; i<11; i++){
    console.log(i);
}

//  3 pratimas 

for( let i=0; i<11; i++){
    console.log(i+ "." + "Kęstutis");
}

// 4 pratimas

for( let i=10; i>=0; i--){
    console.log(i);
}

