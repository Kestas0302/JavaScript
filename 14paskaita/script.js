console.log("14paskaita");

// const fruits = ["Apple", "Orange", "Pear"];

// .pop() - pasalinapaskutini masyvo elementa ir ji grazina

// const lastElement = fruits.pop();
// fruits.pop() - veikia taip pat
// console.log(lastElement);
// console.log(fruits);

// .shift() - pasalina pirmaji masyvo elementa ir ji grazina

// const firstElement = fruits.shift();
// console.log(firstElement);
// fruits.shift();


// .push() - prideda nauja elementa i masyvo gala
// fruits.push("Pineapple");



// .unshift - prideda nauja elementa i masyvo pradzia

// fruits.unshift("Banana");

// const upperCasedFruits = [];

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     // console.log(`${i}.${fruit}`);
//     // console.log(fruit.toUpperCase());
//     upperCasedFruits.push(fruit.toUpperCase());
// }

// console.log(upperCasedFruits);
// console.log(fruits);


// Callback funkcija
function log(name){
    console.log(name);

}
function showAlert(callback){
    // alert("Kestutis");
    callback("Kestutis");
}
// log("Kestutis");
showAlert(log);

const names = ["bob","hellen","jAck"];

// Ciklas kuris praeina per visus masyvo elementus
// .forEach() - 

// Pirmas budas
// names.forEach(shgowName);
// function shgowName(name){
//     console.log(name);
// }
// Antras budas
// names.forEach((name, index) =>{
//     console.log(index + name)
// });

// Ciklas kuris praeina per visus masyvo elementus ir grazina nauja masyva
// .map()

// const modifiedNames = names.map((name) =>{
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// } );
// console.log(names);
// console.log(modifiedNames);

const ages = [12, 15, 23, 27, 25, 30, 35, 38];

// Ciklas kuris praeina per visus masyvo elementus ir grazina nauja masyva jeigu reiksme yra true(positive)
// .filter()

const moreThanTwenty = ages.filter((age) => {
    return age > 20;
});

const lessThanTwenty = ages.filter((age) => age < 20);
// console.log(moreThanTwenty);
// console.log(lessThanTwenty);

const cars = ["Bmw", "Lamborghini", "Audi", "Lada", "Mercedes", "WV"];

// Suranda pirma elementa is masyvo kuris atitinka kriteriju (true) ir ji grazina
// .find()
// const foundCar = cars.find(car => car.charAt(0) === "L");
// console.log(foundCar);


// Patikrina ar nors vienas elementas atitinka kriteriju ir grazina true arba falce
// .some()

// const hasShortName = cars.some(car => car.length < 3);
// console.log(hasShortName);


// Patikrina ar kiekvinas elementas atitinka kriteriju ir grazina true arba false
// .every()

const isEveryUpperCased = cars.every(
  (car) => car.charAt(0) === car.charAt(0).toUpperCase()
);
console.log(isEveryUpperCased);
