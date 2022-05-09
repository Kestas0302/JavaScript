// console.log("Praktika iš Codeacademy");
const nameForm = document.getElementById("nameForm");
console.log(nameForm);
const nameInput = document.querySelector("input[name=name]");
const fullName = `${nameInput.value}`;

nameForm.addEventListener("submit", handleSubmitNameForm);
function handleSubmitNameForm(event) {
  event.preventDefault();

  alert(`${nameInput.value}`);

  console.log(nameInput.value);

  nameInput.value = "";
}

const ageForm = document.getElementById("ageForm");
console.log(ageForm);
const ageInput1 = document.querySelector("input[name=age]");
ageForm.addEventListener("submit", handleSubmitAgeForm);
function handleSubmitAgeForm(event) {
  event.preventDefault();
const result= document.querySelector("input[name=age]").value;
document.querySelector("h1").textContent=result;
  console.log(`${ageInput1.value}`);

  ageInput1.value = "";
}


// const doubleForm = document.getElementById("doubleForm");
// console.log(doubleForm);
// const nameInput2 = document.querySelector("input[name=name]");
// const ageInput2 = document.querySelector("input[name=age]");


const ageInput = document.getElementById("age");
const form = document.getElementById("1dt");
console.log(form);
const priceDisplay = document.getElementById("price");

function handleFormSubmit(event) {
  event.preventDefault()
  const price = 6;
  const age = Number(ageInput.value);

  if (age >= 60) {
    priceDisplay.textContent = ((1/3) * price).toFixed(2);
  } else if (age <= 16) {
    priceDisplay.textContent = (0.5 * price).toFixed(2);
  } else {
    priceDisplay.textContent = price.toFixed(2);
  }
}

form.addEventListener("submit", handleFormSubmit);


const ageInput3 = document.getElementById("age1");
const tInput = document.querySelector("input[type=checkbox]");
const form3 = document.getElementById("2dt");
console.log(form3);
const result = document.getElementById("result");

form3.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const age = Number(ageInput3.value);
  const isConvicted = tInput.checked;

  if (age >= 18 && age <= 30 && !isConvicted) {
    result.textContent = "Army's calling you";
  } else {
    result.textContent = "No army for you";
  }
}