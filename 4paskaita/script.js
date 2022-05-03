console.log("Ketvirta paskaita ciklams");


// kintamieji ciklams: i, j ,k
// i++ yra i=i+1 i-- yra i=i-1
// += x+=yx=x+y
// -= x-=y x=x-y
// [inicializavimas]; [sąlyga]; [išraiška]
// for (let i = 0; i < 10; i++){
//     console.log("John");
//     console.log(`${i}.John`);
// }
// const vardas = "Kestutis";
// const count = 10;
// for (let i = 0; i<count; i++){
//     console.log(`${i+1}.${vardas}`);
// }

// let i = 10;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// for (let i=0; i<10; i+=2){
//     console.log(i);
// }
// const dogName = "Topas";
// const repeat = 3;
// let result = "";

// for (let i = 0; i < repeat; i++){
//     result += `${dogName},`;
//     if (i === repeat - 1){
//         // paskutinis ciklas
//         result += `${dogName}.`;
        
//     }else {
//         result += `${dogName},`;
//     }
// }

// // i=0; i<3;  
// console.log(result);


// const start = 1;
// const count = 9;
// let result = 0;
// for(let i = start; i< count +1; i++){
//     result += i;
// }
// console.log(result);


// let i = 0;
// while (i < 20) {
//     console.log(i);
//     i+=3;
// }


// do...while ciklas pirmiausia įvykdys kūną, tada patikrins būklę ir, kol tai tiesa, vėl ir vėl ją vykdys.
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i < 3);

// _____________________________________________________________________________
// Roko uzduotys

// 1 uzduotis

// for (let i = 0; i < 20; i++){
//     if ( i % 2 === 0 ){
//         console.log(i);
//     }
// }

// 2 uzduotis

// for (let i = 9; i >= 1; i-=1){
//     console.log("Hello " + i);
// }

// 3 uzduotis

// function getLaugh(num) {
//     let message = '';
//     for(let i = 0; i < num; i++) 
//     message += 'ha';
//   return message;
// }
 
// console.log(getLaugh(4));
// ____________________________________________________________________________________



// ______________________________________________________________________________________

// Codeacademy uzduotys

// Ciklai - While ir Do...While

// 1 pratimas

// let i = 0;
// while (i < 3) {
//     console.log("Kestutis");
//     i++;
// }


// 2 pratimas

// let combo = "";
// let times = 0;
// while (times < 5){
//     times++;
//     combo += "Kestutis";
//     console.log(combo);
// }


// JavaScript Math objektai

// 1 pratimas

// let cos = Math.cos(1);
// console.log(cos);

// 2 pratimas

// let rnd = Math.random();
// let rnd5 = Math.floor((rnd * 5) + 1);
// console.log(rnd5);


// 3 pratimas

// let rnd = Math.random();
// let rnd512 = Math.floor((rnd * 8)+ 5);
// console.log(rnd512);


// 4 pratimas 

// const randomNumber = Math.floor(Math.random() * 5) + 1;
// if (randomNumber === 1) {
//     console.log(`${randomNumber} You won`);
// } else {
//     console.log(`${randomNumber} Try again next time`);
// }
