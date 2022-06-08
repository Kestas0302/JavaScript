// fetch("https://magnetic-melon-yam.glitch.me")
//   .then((resp) => resp.json())
//   .then((response) => {
//       renderTable(response);
//     response.forEach((user) => randomUser(user));
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error, ": Failed to load data");
//   });

  const randomUser = (user) => {
    // const uId = "id";
    const userId = user.id;
    const userName = user.name;
    const userCity = user.city;
    const userFavColor = user.fav_color;

    // const tdUId = document.createElement("td");
    const tdId = document.createElement("td");
    const tdName = document.createElement("td");
    const tdCity = document.createElement("td");
    const tdFavColor = document.createElement("td");

    // tdUId.textContent = uId;
    tdId.textContent = userId;
    tdName.textContent = userName;
    tdCity.textContent = userCity;
    tdFavColor.textContent = userFavColor;
    const trUser = document.createElement("tr");
  trUser.append(tdId, tdName, tdCity, tdFavColor);

  return trUser;
};

const renderTable = (user) => {
    const thId = document.createElement("th");
    const thName = document.createElement("th");
    const thCity = document.createElement("th");
    const thColor = document.createElement("th");
  
    thId.textContent = "id";
    thName.textContent = "name";
    thCity.textContent = "city";
    thColor.textContent = "fav_color";
  
  
    const trRow = document.createElement("tr");
    const thead = document.createElement("thead");
    const table = document.createElement("table");
    trRow.append(thId,thName, thCity, thColor);
    thead.append(trRow);
    table.append(thead);

    const tableBody = document.createElement("tbody");
    user.forEach((user) => tableBody.append(randomUser(user)));

    table.append(tableBody);
  
    document.body.append(table);
  };


  fetch("https://magnetic-melon-yam.glitch.me")
  .then((resp) => resp.json())
  .then((response) => {
      renderTable(response);
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });