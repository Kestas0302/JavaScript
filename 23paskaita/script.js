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
    console.log(responce);
  })
  .catch((error) => {
    console.error(error, ": Failed to load comments");
  });

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(resp => resp.json())
  .then(responce => {
      console.log("users:", responce);
  })
  .catch((error) => {
      console.error( error, ": Failed to load users")
  });
  
  fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(resp => resp.json())
  .then(responce => {
      console.log("user:", responce);
  })
  .catch((error) => {
      console.error( error, ": Failed to load user")
  });
