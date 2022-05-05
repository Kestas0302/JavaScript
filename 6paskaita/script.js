console.log("6 paskaita. Masyvai, funkcijos ir eventai");

const myName = "Kęstutis";
// console.log(myName.length);
// console.log(myName[1]);
// const firstChar = myName[1];
// console.log(firstChar);
// const lastChar = myName[myName.length - 1];
// console.log(lastChar);
// Math.floor apvalinimas
// const middleChar = myName[myName.length/2];
// console.log(middleChar);

// for (let i=0; i<myName.length; i++){
//     const char = myName[i];
    // console.log(`${i+1}. ${char}`);
// }

// const firstChar = myName.charAt(0);
// const lastChar = myName.charAt(myName.length-1);
// console.log(lastChar);


// const chars = ["K","ę","s","t","u","t","i","s"];
// const fruits = ["apple","banana","pear"];
// console.log(fruits.length);
// console.log(fruits[1]);

// for ( i=0; i<fruits.length; i++){
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// const students = ["Edvinas","Liudmila", "Julija", "Rokas","Asta"];
// for (i=0; i<students.length; i++){
//     const student=students[i];
//     // console.log(student);
//     if(student.length > 5){
//         console.log(`Vardas ${student} turi daugiau nei 5 raides`);
//     }else if(student.length < 5){
//         console.log(`Vardas ${student} turi mažiau nei 5 raides`);
//     }else{
//         console.log(`Vardas ${student} turi lygiai 5 raides`);
//     }
// }


// const basket = [7, 10, 0.5, 23, 41];
// let total = 0;

// for (let i=0; i<basket.length; i++){
//     const number = basket[i];
//     total += number;
// console.log(total);
// }


// 1. void funkcija
// 2. return funkcija
function square(number){
    return number*number;
}
const squereNumber = square(5);
console.log(squereNumber);

function logger(value){
    console.log(value);
}

function printAllArrayItems(array){
    for( let i=0; i<array.length; i++);
    const item = array[i];
    const squareItem = square(item);
    console.log(squareItem);
}
function repeatString(string, count){
    let finalStrig= "";
    for(let i = 0; i< count; i++){
        finalStrig+=string;
    }
    return finalStrig;
}
const repeatedString = repeatString("Kęstutis", 5);
console.log(repeatedString);
function addition(a,b){
    return a+b;
}
function substraction(a,b){
    return a-b;
}
console.log(addition(5,4));
console.log(substraction(10, 7));
