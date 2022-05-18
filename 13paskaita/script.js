console.log("13 paskaita");
// Zinoti primityvius duomenu tipus ir ju apibrezima, kuo skiriasi nuo referens
// boolean object
// Number object
// String object

/*
Primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.

There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
*/

// const name = "Kestutis";
// const age = 7;
// const isHot = true;
// const notFound = undefined;
// const noValue = null;

// const obj = {
// show:() => {}
// }

// const isHotString = Boolean(isHot).toString();

// console.log(isHot);
// console.log(isHotString);


// const numberConstructor = Number(age);

// console.log(age);
// console.log(numberConstructor);

// const count = "15";
// const countNumber = Number(count);

// console.log(count + count);
// console.log(countNumber + countNumber);


// Integer - sveikasis skaicius
// console.log(Number.isInteger(5));


// Skaiciu paverciame i string
// const myNumber = 5.572;
// console.log(Number(5.572).toString());
// console.log(myNumber.toString());
// // uzapvalina skaiciu
// console.log(myNumber.toFixed(3));

// const sentence = "My name is Kestutis and i am very happy";

// Suranda stringe kita stringo dali. case-sensitive (didziosios, mazosios raides).
// sentence.includes("happy");
// console.log(sentence.includes("happy"));


// slice nukerpa simbolius
// console.log(sentence);
// console.log(sentence.slice(11,20));


// console.log(sentence);
// bad text const badText = "   bad text  "
// console.log(sentence.trim()); nuima perteklinius tarpus nuo priekio ir galo.


// Isdidina visas raides (LABAS)
// const upperCased = sentence.toUpperCase();
// console.log(upperCased);
// // Sumazina visas raides (labas)
// const lowerCased = sentence.toLowerCase();
// console.log(lowerCased);

// //  dvieju ar keliu  stringu tikrinimas ar yra vienodi
// function areSameString(firstString, secondString){
//     return firstString.toUpperCase === secondString.toUpperCase;
// }
// console.log(areSameString("Kestutis", "kestutis"));

// Pakartoja string tiek kiek paduodam i argumenta
// const resultCount = 5;
// const dog = "Topas ";

// const result = dog.repeat(resultCount);
// console.log(result);


// atskirimas string viduje
// const tagInput = "Prekyba Marketingas Programavimas Vadyba";
// const tags = tagInput.split(" ");

// const countryInput = "Anglija, Sveicarija, Amerika, Latvija, Gruzija";
// const countries = countryInput.split(", ");
// console.log(countries);
// console.log(tags);



// _________________________________________________________
// CodeAcademy pratimai

// Boolean metodas
// const isLegalAge = true;
// console.log(isLegalAge);
// console.log(isLegalAge.toString());

// Number metodai

// 1.
// const milkPrice = 3;
//  if (Number.isInteger(milkPrice)){
//      alert("Centų nereikia")
//  }else{
//      alert("Centų prireiks...")
//  }

// 2.
// const milkPrice = 3.677;
//  if (Number.isInteger(milkPrice)){
//      alert("Centų nereikia");
//  }else{
//      alert("Centų prireiks...");
//  }
//  alert(milkPrice.toFixed(2));

// 3.

document.querySelector("form").addEventListener("submit", (e) =>{
    e.preventDefault();

    const price = Number(document.getElementById("price").value);
    const quant = Number(document.getElementById("quant").value);
    const total = price * quant;
    const priceDisplay = document.createElement("h1");
    priceDisplay.textContent = total.toFixed(2);
    document.body.append(priceDisplay);
});


// String metodai

// 1.
document.querySelectorAll("form"[1]);
addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const quant1 = Number(document.getElementById("quant1").value);

    if(Number.isInteger(quant1)){
        const h1 = document.createElement("h1");
        h1.textContent = name.repeat(quant1);
        document.body.append(h1);
    }else{
        alert("Number is not an integer!")
    }
});

// 2.

document.querySelectorAll("form"[2]);
addEventListener("submit", (e) =>{
    e.preventDefault();
    const name1 = document.getElementById("name1").value.trim();
    alert("Length: " + name1.length);

});

// 3.
document.querySelectorAll("form"[3]);
addEventListener("submit", (e) =>{
    e.preventDefault();
    const fullName = document.getElementById("fullname").value.trim().split(" ");
    const name2 = document.createElement("h1");
    name2.textContent = fullName[0];
    const surname = document.createElement("h1");
    surname.textContent = fullName[1];
    document.body.append(name2, surname);
});

// 4.
document.querySelectorAll("form"[4]);
addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName1 = document.getElementById("fullname1").value.trim();

    const name3 = document.createElement("h1");
    name3.textContent = fullName1.split(" ")[0];

    const surname1 = document.createElement("h1");
    surname1.textContent = fullName1.replace(name3, "").slice(1);

    document.body.append(name3, surname1);
  });