const handleSubmitCar = (event) => {
  event.preventDefault();

  const brand = document.querySelector("input[name='brand']");
  const model = document.querySelector("input[name='model']");

  const car = { brand: brand.value, model: model.value };

  const params = {
    method: "POST",
    body: JSON.stringify(car),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch("https://olive-bead-glazer.glitch.me/", params)
    .then((resp) => resp.json())
    .then((responce) => {
      console.log(responce);
    })
    .catch((error) => {
      console.error(error);
    });

  // console.log(brand.value);
  // console.log(model.value);
};

const carForm = document.getElementById("car-form");

carForm.addEventListener("submit", handleSubmitCar);
