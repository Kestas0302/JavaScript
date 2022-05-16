// console.log("11 paskaita");

// // tuscias objektas
// const emptyObjects={};


// const user={
//     name: "Kipsas",
//     password: "kipsas123", // -> sha256 ->ahs854hadhgj
//     mail: "kipsas@gmail.com",
//     age: 23,
//     gender: "male",
// };

// // console.log(user);
// // console.log(user["name"]);

// function getItem(key){
//     // user["gender"]
//     return user[key];
// }
// // console.log(getItem("gender");)

// const candle = {
//     color: "green",
//     taste: "apple",
//     height: 8,
//     radius: 8,
//     turnLight: ()=>{
//         console.log(`${candle.color} candle spreading tasteful ${candle.taste} smell `);
//     },


// calculateLightTime: () => {
//     const metric = candle.height*candle.radius;
//     if(metric > 60){
//         return 180;
//     }else if (metric > 30){
//         return 90;
//     }else{
//         return 45;
//     }
// }

// }
// // function turnLight ({

// // })
// const minutes = candle.calculateLightTime();
// console.log(minutes);
// candle.turnLight();


// const cat = {
//     name: "Kleopatras",
//     age: 15,
//     color: "black",
//     weight: 7,
//     eat: ()=> {
//         console.log(`${cat.name} is eating ...`)
//     },
//     sleep:() => {
//         console.log("Cat is sleeping ...")
//     },

// };
// // console.log(`${cat.name} is a ${cat.color} cat and age ${cat.age}` );
// cat.sleep();


// const codeClass={
//     type:"remote",
//     subject:"Front-end+ Node.js",
//     lecturer: {
//         name: "Rokas",
//         surname: "Andreikenas",
//         age:23,
//         experience:3,

//     },
//     students:[
//         "Edvinas", "Liudmila", "Rima","Karolis"
//     ],
// };
// // console.log(codeClass.lecturer.name);
// // const lecturerFullName = `${codeClass.lecturer.name} ${codeClass.lecturer.surname}`;
// // // console.log(lecturerFullName);
// // console.log(codeClass.students[1]);
// // const studentsCount = codeClass.students.length;
// // console.log(studentsCount);


// // codeClass.type="onsite";
// // console.log(codeClass.type);

// // const student ={}
// // student.name = "Kestutis";
// // student.surname= "Margelis";
// // console.log(student);
// // const names= ["Edvinas", "Liudmila", "Rima","Karolis"];
// // names[0]="Kestutis";
// // console.log(names);

const treeForm=document.getElementById("tree-form");
// console.log(treeForm);
treeForm.addEventListener("submit", handleSubmitTreeForm)
function handleSubmitTreeForm(event){
event.preventDefault();

const treeName = document.querySelector("input[name='tree-name']");
const treeAge = document.querySelector("input[name='tree-age']");
// console.log(treeName.value);
// console.log(treeAge.value);

const name= treeName.value;
const age = Number(treeAge.value);

const tree= {
    name: treeName.value,
    age: Number(treeAge.value),
    isOld: age > 100 ? true : false,
};
console.log(tree);
}


