console.log("16 paskaita");
console.log("");

// const person = {
//   name: "Kestutis",
//   surname: "Margelis",
//   age: 30,
// };

// const ageProperty = "age";

// console.log(person.age);
// console.log(person.name);
// console.log(person["age"]);

// person["age"];
// person[ageProperty];

// const people = [
//   { id: 1, name: "Kestutis", surname: "Margelis", age: 30 },
//   { id: 2, name: "Petras", surname: "Tomaitis", age: 18 },
//   { id: 3, name: "tomas", surname: "Jonaitis", age: 17 },
//   { id: 4, name: "Jonas", surname: "petraitis", age: 32 },
// ];
// console.log(people);
// const firstItem = people[0];
// console.log(firstItem);
// const lastItem = people[people.length - 1];
// console.log(lastItem);

// people.push({id:5, name: "Ponas", surname: "Ponaitis", age: 22});
// // console.log(people);
// people.shift();
// // console.log(people);

// people.forEach((person) => {
//     // console.log(person.surname);
//     const fullName = `${person.name} ${person.surname}`;
//     console.log(fullName);
// });


// const peopleWithFullName = people.map((person) => {
//     const fullName = `${person.name} ${person.surname}`;
//     // Object.assign();// senas budas
//     return {...person, name: person.name.toUpperCase(), surname: capitalize(person.surname),  fullName: fullName, canDrive: person.age >= 18 ? true:false,};
// });

// function capitalize (value){
//     return value.charAt(0).toUpperCase()+ value.slice(1).toLowerCase();// pirma raide didzioji, likusios - mazosios
// }
// console.log(peopleWithFullName);

const veggies = [
    {name: "Apple", category: "tree", price: 1},
    {name: "Pear", category: "tree", price: 2},
    {name: "Blackberries", category: "bush", price: 5},
    {name: "Blueberries", category: "bush", price: 7},
    {name: "Carrot", category: "dirt", price: 0.25},
    {name: "Potato", category: "dirt", price: 0.5},
];

// const cheapVeggies = veggies.filter((veggie) => veggie.price <= 1);
// const expensiveVeggies = veggies.filter((veggie) => veggie.price >= 6);
// const expensiveVeggiesNames = expensiveVeggies.map(veggie => veggie.name);
// const expensiveVeggiesNames = veggies.filter((veggie) => veggie.price >= 6).map((v) =>v.name);

// console.log(cheapVeggies);
// console.log(expensiveVeggies);
// console.log(expensiveVeggiesNames);

veggies.sort((a,b) => (b.name > a.name ? -1: 1));// nuo A - Z rykiavimas
console.log(veggies);

function prices(array){
    const sorted = array.sort((a,b) => a.price - b.price);
    const cheapest = sorted[0];
    const expensive = sorted[sorted.length - 1];
    return {cheapest: cheapest.name, expensive: expensive.name};
    // console.log(sorted);
};

const veggiesPrice = prices(veggies);
console.log(veggiesPrice.expensive);
console.log(veggiesPrice.cheapest);

