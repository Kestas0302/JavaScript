/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showUsers = document.getElementById("btn");

const renderUser = (users) => {
  const user = document.createElement("div");
  const login = document.createElement("h2");
  const avatar_url = document.createElement("h3");

  login.textContent = users.login;
  avatar_url.textContent = users.avatar_url;

  user.append(login, avatar_url);

  document.getElementById("output").append(user);
};

showUsers.addEventListener("click", () => {
  document.getElementById("output").textContent = "";

  fetch(ENDPOINT)
    .then((resp) => resp.json())

    .then((response) => {
      console.log(response);

      response.forEach((users) => renderUser(users));
    })

    .catch((error) => {
      console.error(error);
    });
});
