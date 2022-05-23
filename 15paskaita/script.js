console.log("15 paskaita");
console.log("");

// Padeda istrinti arba iterpti masyvo elemento i pasirinkta vieta
// .splice()

const sentence = ["I", "study", "JavaScript", "right", "now"];

// console.log(sentence.splice(0, 2)); // istrina pirmu du elementus ir grazina
// sentence.splice(2, 2); // nuo antros vietos istrina du
// sentence.splice(2, 1, "TypeScript");// pakeicia masyvo elementa kitu
// sentence.splice(1, 4, "studied", "Typescript", "before");
// console.log(sentence);

// const sliced = sentence.slice(0, 3);// pirmus tris elementus
// const sliced = sentence.slice(-3);//paskutiniai trys elementai
// console.log(sliced);

// const numbers = [7, 8, 1, 0.5, 8, 6, 10, 20, 30, 40];
// const total = numbers.reduce((total, number) => {
//     console.log(total);
//     return total + number;
// }, 0);// 0 - pradine reiksme

// const total = numbers.reduce((total, number) => total + number, 0);
// console.log("");
// console.log(total);

// const sortedAscendingOrder = numbers.sort((a, b) => a - b);//surykiuota didejimo tvarka
// const sortedDescendingOrder = numbers.sort((a, b) => b - a);// surykiuoja mazejimo tvarka
// console.log(sortedAscendingOrder);
// console.log(sortedDescendingOrder);

// -----------------------------------------------

// 1 uzduotis

// const styles = ["Jazz", "Blues"];
// console.log(styles);

// styles.push("Rock-n-Roll");
// console.log(styles);

// styles.splice(1, 1, "Classics");
// console.log(styles);

// const first = styles.shift();
// console.log(first);
// console.log(styles);

// styles.unshift("Rap", "Reggae");
// console.log(styles);

//  2 uzduotis

// let arr = [11, -2, 34, 45, 19, 6];
// const total = arr.reduce((total, number) => (number > 0 ? total + number : total) , 0);
// console.log(total);
// function getMaxSubSum(array) {
//     const sum = array.reduce((total, num) => (num > 0 ? total + num : total), 0);
//     return sum;
//     }
//     function getMaxSubSum(array) {
//     const sum = array.reduce((total, num) => {
//     if (num > 0) {
//     return total + num;
//     } else {
//     return total;
//     }
//     }, 0);
//     return sum;
//     }
//     const sum = getMaxSubSum(arr);
//     console.log(sum);

// _______________________________________________________

// CodeAcademy bendrieji pratimai

// _______________________________________________________

// Sort pratimai
console.log("Sort pratimai");
console.log("");

// 1 pratimas

const friends = ["Ramunas", "Justinas", "Virgis", "Mindaugas"];
friends.sort();
console.log("1 pratimas", friends);

// 2 pratimas

friends.sort((a, b) => (b > a ? 1 : -1));
console.log("2 pratimas", friends);

// 3 ir 4 pratimas

const numbers1 = [5, 10, 20, 11, 12, 1, 0, 14, 25];
numbers1.sort((a, b) => b - a);
console.log("3 pratimas", numbers1);
console.log("4 pratimas", numbers1[0]);

console.log("");

// Reduce pratimai

console.log("Reduce pratimai");
console.log("");

// 1 pratimas

const favNumbs = [5, 7, 15, 20, 33];
console.log(
  "1 pratimas",
  favNumbs.reduce((a, v) => a + v)
);

// 2 pratimas

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
console.log(
  "2 pratimas",
  cars.reduce((a, v) => (v.length === 3 ? a + 1 : a), 0)
);

// 3 pratimas

const cars1 = [5, 10, 20, 4, 11, 13];
console.log(
  "3 pratimas",
  cars1.reduce((a, v) => (a > v ? a : v))
);

console.log("");

// Kiti pratimai
console.log("Kiti CodeAcademy pratimai");
console.log("");
const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

// 1 pratimas
console.log("1 pratimas", people.filter(x => x.age >= 18));

// 2 pratimas

console.log("2 pratimas", people.filter(x => x.age >= 18).map(person => person.name));

// 3 pratimas

console.log("3 pratimas", people.filter(x => x.age >= 18).map(person => person.name).sort());

// 4 pratimas

const drinks = [
    { name: "pineapple", price: 50 },
    { name: "lime", price: 10 },
    { name: "orange", price: 20 },
    { name: "apple", price: 5 }
  ]
  
  function fn(items){
    items.sort((a, b) => a.price - b.price)
    return {pigiausias: items[0].name, brangiausias: items[items.length - 1].name}
  }
  
  console.log("4 pratimas", fn(drinks));

