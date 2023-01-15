function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
// document.body.textContent = greeter(user);
var peopleH1 = document.getElementById("people");
var textContent1 = document.createTextNode(greeter(user));
peopleH1 === null || peopleH1 === void 0 ? void 0 : peopleH1.appendChild(textContent1);
function getFruitInfo(fruit) {
    return "Hello, " + fruit.name + ", " + fruit.weight + " g";
}
var fruit = { name: "Apple", weight: 300 };
var fruitH1 = document.getElementById("fruit");
var textContent2 = document.createTextNode(getFruitInfo(fruit));
fruitH1 === null || fruitH1 === void 0 ? void 0 : fruitH1.appendChild(textContent2);
