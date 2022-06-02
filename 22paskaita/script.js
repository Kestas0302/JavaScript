console.log("22 paskaita");
console.log(" ");

// const resolvedPromise = new Promise((resolve, reject) => {
//     resolve("17 celsius, Vilnius");
// });

// resolvedPromise.then(response => {
//     console.log(`Dabar yra ${response}`);
// });

// const rejectedPromise = new Promise((resolve, reject) => {
//     reject("Tinklas yra perkrautas. Pabandykit veliau")
// });

// rejectedPromise.then((response) => {
//     console.log(`Dabar yra ${response}`);

// }).catch((error) => {
//     console.error(error);
// }).finally(() => {
//     console.log("Kreipimasis i oro tarnyba");
// });
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("17 celsius, Vilnius");
  }, 4000);
});

const renderWeather = (response) => {
  const weather = document.getElementById(`weather`);
  weather.textContent = `Dabar yra ${response}`;
};
const showError = (err) => {
  const error = document.getElementById("error");
  error.textContent = err;
  error.style.color = "red";
};
const showThanksMessage = () => {
  const header = document.getElementById("header");
  header.textContent = "Jus pasinaudojote oru paslauga. Jums tai kainavo 5ct";
};

// const promise = new Promise((resolve, reject) => {
//         resolve("17 celsius, Vilnius");
//     });

promise
  .then((response) => {
    renderWeather(response);
    console.log(`Dabar yra ${response}`);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Kreipimasis i oro tarnyba");
  });
