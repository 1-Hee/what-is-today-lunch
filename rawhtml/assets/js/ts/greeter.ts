interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

// document.body.textContent = greeter(user);
let peopleH1 = document.getElementById("people");
let textContent1 = document.createTextNode(greeter(user));
peopleH1?.appendChild(textContent1);

interface Fruit {
  name: string;
  weight: number;
}

function getFruitInfo(fruit: Fruit) {
  return "Hello, " + fruit.name + ", " + fruit.weight + " g";
}

let fruit = { name: "Apple", weight: 300 };

let fruitH1 = document.getElementById("fruit");
let textContent2 = document.createTextNode(getFruitInfo(fruit));
fruitH1?.appendChild(textContent2);
