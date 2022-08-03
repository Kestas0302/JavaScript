/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};
const vw = {
  make: "vw",
  model: "polo",
  year: 2008,
  color: "black",
};

const showObjectKeys = Object.entries(audi);
console.log(showObjectKeys);
