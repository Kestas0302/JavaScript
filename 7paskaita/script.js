// console.log("7 paskaita. Formos");
const exampleForm = document.getElementById("example-form");
console.log(exampleForm);

exampleForm.addEventListener("submit", handleSubmitExampleForm);
function handleSubmitExampleForm(event) {
  event.preventDefault();

  const nameInput = document.querySelector("input[name=name]");
  const surnameInput = document.querySelector("input[name=surname]");
  const resultH2 = document.getElementById("example-result");
  const fullName = `${nameInput.value} ${surnameInput.value}`;
  resultH2.textContent = `Sveikiname ${fullName}, Jūs priimtas!`;

  // console.log(nameInput.value);
  // console.log(surnameInput.value);
  console.log("Example form submitted");

  nameInput.value = "";
  surnameInput.value = "";
}

const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", handleSubmitRegisterForm);
function handleSubmitRegisterForm(event) {
  event.preventDefault();

  const username = document.querySelector("input[name=username]");
  const password = document.querySelector("input[name=password]");
  const email = document.querySelector("input[name=email]");
  const result = document.querySelector("#register-result");

  result.textContent = `${username.value}, ${email.value} registered.`;
  username.value = "";
  password.value = "";
  email.value = "";
}
const additionalForm = document.getElementById("additional-form");
additionalForm.addEventListener("submit", handleSubmitAdditionalForm);
function handleSubmitAdditionalForm(event) {
  event.preventDefault();
  const gender = document.querySelector(`input[name="gender"]:checked`);
  console.log(gender.value);

  const fruits = document.querySelectorAll("input[name='fruit']:checked");
  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];

    console.log(fruit.value);
  }
}
