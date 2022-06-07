console.log("23 paskaita");
console.log(" ");

// GET - gauna esamus irasus
// POST - sukuria nauja irasa
// PUT - modifikuoja esanti irasa
// DELETE - istrina esama irasa

// const url = 'https://jsonplaceholder.typicode.com/comments';
// fetch(url)
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((resp) => resp.json())
  .then((responce) => {
    const firstItem = responce[0];
    const paragraph = document.createElement("p");
    paragraph.textContent = `${firstItem.email}, ${firstItem.name}, ${firstItem.body}`;
    document.body.prepend(paragraph);
    console.log(responce);
  })
  .catch((error) => {
    console.error(error, ": Failed to load comments");
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then((responce) => {
    console.log("users:", responce);
  })
  .catch((error) => {
    console.error(error, ": Failed to load users");
  });

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((resp) => resp.json())
  .then((responce) => {
    console.log("user:", responce);
  })
  .catch((error) => {
    console.error(error, ": Failed to load user");
  });

const renderComment = (comment) => {
  const paragraph = document.createElement("p");

  paragraph.textContent = `[${comment.email}] {${comment.name}} ${comment.body}`;

  document.body.prepend(paragraph);
};

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((resp) => resp.json())

  .then((response) => {
    const firstItem = response[0];

    renderComment(firstItem);
  })

  .catch((error) => {
    console.error(error, ": Failed to load comments");
  });
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())

  .then((response) => {
    // atvaizduoti pirmo objekto address, company ir email. Juos sudeti i atskirus kintamuosius

    const firstItem = response[0];

    renderUser(firstItem);
    // const addressCity = firstItem.address.city;

    // const companyName = firstItem.company.name;

    // const email = firstItem.email;

    // console.log(addressCity);

    // console.log(companyName);

    // console.log(email);

    // optional: atvaizduoti html

    // console.log("users: ", response);
  })

  .catch((error) => {
    console.error(error, ": Failed to load users");
  });


  const renderUser = (user) =>{
    const addressCity = user.address.city;

    const companyName = user.company.name;

    const email = user.email;

  };