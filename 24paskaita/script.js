console.log("24 paskaita");
console.log(" ");
const fetchRandomUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");

    if (response.ok) {
      const data = await response.json();

    //   renderUserCard(data.results[0]);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchRandomUser();

// async function random() {}

const getRandomUser = async () => {
  try {
    const resp = await fetch("https://randomuser.me/api/");
    const responce = resp.json();
    console.log(responce);
  } catch (error) {
    console.error(error);
  }
};

// const renderTable = () => {
//   const thId = document.createElement("th");
//   const thName = document.createElement("th");
//   const thCity = document.createElement("th");
//   const thColor = document.createElement("th");

//   thId.textContent = "id";
//   thName.textContent = "name";
//   thCity.textContent = "city";
//   thColor.textContent = "fav_color";


//   const trRow = document.createElement("tr");
//   const thead = document.createElement("thead");
//   const table = document.createElement("table");
//   // document.body.append()
//   trRow.append(thId,thName, thCity, thColor);
//   thead.append(trRow);
//   table.append(thead);

//   document.body.append(table);
// };



fetch("https://randomuser.me/api/")
  .then((resp) => resp.json())
  .then((responce) => {
    console.log(responce);
  })
  .catch((error) => {
    console.error(error);
  });
