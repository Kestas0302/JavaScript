console.log("19 paskaita");
console.log(" ");

// class Animal {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// };

// class Rabbit extends Animal {
//   constructor(name, color) {
//     super(name, color);
//     // this.name = name;
//     this.created = Date.now();
//   }
// };

// let rabbit = new Rabbit("White Rabbit", "white"); // Error: this is not defined
// console.log(rabbit);

class item {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  addToList = () => {
    const list = document.getElementById("list");
    const newItem = document.createElement("li");
    newItem.textContent = `${this.name} x ${this.count} = ${
      this.count * this.price
    }`;
    list.append(newItem);
  };
}

const itemForm = document.getElementById("form-item");

function submitItemForm(event) {
  event.preventDefault();
  const item = document.querySelector("input[name='item']");
  const price = document.querySelector("input[name='price']");
  const count = document.querySelector("input[name='count']");

  itemForm.addEventListener("submit", submitItemForm);

  const Item = new Item(
    itemName.value,
    Number(price.value),
    Number(count.value)
  );
  item.addToList();
};
console.log(item);
