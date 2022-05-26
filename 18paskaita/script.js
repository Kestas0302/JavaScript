console.log("18 paskaita");
console.log("");

// Is Roko uzduociu

// 1 pratimas

// const removeFirst = (value) => {
//     const withFirstChar = value.slice(1);
//     return withFirstChar[0] + withFirstChar.slice(1).toLowerCase();
// };

// const removed = removeFirst("Kestutis");
// console.log(removed);

// 2 pratimas

// const startA = (array) => array.filter((person) => person.first_name[0] ==="A").length;

// const hasK = (array) => array.filter((person) => person.first_name.includes("K")).length;
// console.log(hasK(data));

// Objektinis programavimas us JavaScript

// 1 pratimas

// Konstruktoriaus funkcija rasoma is didziosios raides
// function Book(name, author, year){
//     this.name = name;
//     this.authorName = author;
//     this.year = year;
//     this.getInfo = () => {
//         return `${this.name} parase ${this.authorName}`;
//     };
//     this.getYears = () => {
//         const today = new Date();
//         console.log(today.getFullYear());
//         return today - this.year;
//     };
// };

// const harryPotterBook = new Book("Harry Potter", "J.K. Rowling", 1997);
// // console.log(harryPotterBook.authorName);
// // console.log(harryPotterBook.getInfo());
// console.log(harryPotterBook.getYears());

// su Klasemis
// class Book {
//   constructor(name, author, year) {
//     this.name = name;
//     this.authorName = author;
//     this.year = year;
//   }
//   getInfo = () => {
//     return `${this.name} parase ${this.authorName}`;
//   };
//   getYears = () => {
//     const today = new Date();
//     console.log(today.getFullYear());
//     return today - this.year;
//   };
// }
// const harryPotterBook = new Book("Harry Potter", "J.K. Rowling", 1997);
// console.log(harryPotterBook.authorName);
// console.log(harryPotterBook.getInfo());
// console.log(harryPotterBook.getYears());


class Employee{
    constructor(position, wage, experience){
        this.position = position;
        this.wage = wage;
        this.experience = experience;
    };
    getBonus = () => {
        if(this.experience < 5){
            return this.wage
        }else if (this.experience < 10){
            return this.wage * 2;
        }else {
            return this.wage * 3;
        }
    }
};

const softwareDeveloper = new Employee("Front-end engineer", 4000, 2);
const salesManeger = new Employee("Sales Maneger", 6000, 7);

console.log(salesManeger.getBonus());
console.log(softwareDeveloper.getBonus());