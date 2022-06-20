console.log("Pasikartojimas");
console.log("");

const abc = 1;

function showTime() {
  const def = 2;
  console.log(abc);
}
// console.log(def); negalima naudoti isoreje, jeigu tai yra funkcijos viduje

showTime();

// Turi return

function square(number) {
  return number * number;
}

const squered = square(5);
console.log(squered);

// Roko užduotys
// 1 uzduotis
function cube(num1) {
  return num1 * num1 * num1;
}
console.log(cube(5));

// 2 uzduotis
function mathMultiplication(num1, num2) {
  return num1 * num2;
}
console.log(mathMultiplication(4, 2));

// 3 uzduotis
function mathAddiction(num1, num2) {
  return num1 + num2;
}
console.log(mathAddiction(4, 2));

// 4 uzduotis
function mathSubstraction(num1, num2) {
  return num1 - num2;
}
console.log(mathSubstraction(4, 2));

// 5 uzduotis
function mathDivision(num1, num2) {
  return num1 / num2;
}
console.log(mathDivision(4, 2));

// 6 uzduotis
function simbolsLength(simb) {
  return simb.length;
}
console.log(simbolsLength("Kęstutis"));

// 7 uzduotis
function trueFalse(num1, num2) {
  return num1 > num2;
}
console.log(trueFalse(5, 4));

// 8 uzduotis
function firstLast(someBodyName) {
  return someBodyName[0] + someBodyName[someBodyName.length - 1];
}
console.log(firstLast("Kęstutis"));

// Neturi return
function showMessage(message) {
    console.log(message);
}

// Neturi argumentu

