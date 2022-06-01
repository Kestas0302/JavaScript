// console.log("21 paskaita");
// console.log(" ");

// const testString = "Rokas !@#$%^ Tomas 123";
// // atsakymas "Rokas !!@@##$$%%^^ Tomas 112233"
// const isLetter = (char) => char.toLowerCase() !== char.toUpperCase();

// const newTest = testString

//     .split("")
//     .map((char) => (isLetter(char) || char === " " ? char : char + char))
//     .join("");
// console.log(newTest);

const cookie = {
  timeSpent: "2h",
  loggedIn: "2022/06/01T18:00:00",
  theme: "dark",
};

document.cookie = "timeSpend=2h";
document.cookie = "loggedIn=2022/06/01T18:00:00";
document.cookie = "theme=dark";

// localStorage.setItem("name", "Kestutis");
// localStorage.setItem("surname", "Margelis");

const button = document.getElementById("save");
button.addEventListener("click", () =>{
    const name = document.querySelector("input[name='name']");
    const surname = document.querySelector("input[name='surname']");

    const fullName = `${name.value} ${surname.value}`;
    const result = document.getElementById("full-name");
    result.textContent = fullName;
    localStorage.setItem("fullName", fullName);
});
