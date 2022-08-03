/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
a = 24;
b = 6;
function composition(a, b) {
  return a + b;
}
function division(a, b) {
  return a / b;
}
function multiplication(a, b) {
  return a * b;
}
function substraction(a, b) {
  return a - b;
}

class Calculator {
  constructor(_composition, _division, _multiplication, _substraction) {
    this.composition = a + b;
    this.division = (a / b).toFixed(2);
    this.multiplication = a * b;
    this.substraction = a - b;
  }
}
const newCalculator = new Calculator(
  composition,
  division,
  multiplication,
  substraction
);
console.log(newCalculator);
