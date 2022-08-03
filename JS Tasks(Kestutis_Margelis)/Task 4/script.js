/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const renderCar = (brand) => {
  const carBrand = document.createElement("h2");
  carBrand.textContent = brand.brand;
  const listModels = document.createElement("ul");
  listModels.textContent = brand.models;
  const car = document.createElement("div");
  car.append(carBrand, listModels);
  document.getElementById("output").append(car);
};

fetch(ENDPOINT)
  .then((resp) => resp.json())

  .then((response) => {
    console.log(response);

    response.forEach((brand) => renderCar(brand));
  })

  .catch((error) => {
    console.error(error);
  });
