function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

function newFunctionES6(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunctionES6(+"en ES6");
newFunctionES6("nicolas", "23", "AR" + "en ES6");

/* ------------------------------------------------- */

let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhraseES6 = `${hello} ${world}`;
console.log(epicPhraseES6 + "en ES6");

/* ------------------------------------------------- */

let lorem =
  "Quiero escribir una frase epica que podas separar \n" +
  "otra frase epica que necesito.";
console.log(lorem);

let loremES6 = `Otra frase epica que necesitamos 
ahora es otra fras epica.`;
console.log(loremES6 + "en ES6");

/* ------------------------------------------------- */

let person = {
  name: "oscar",
  age: 32,
  country: "MX",
};
console.log(person.name, person.age, person.country);

let { name, age, country } = person;
console.log(name, age, country);

/* ------------------------------------------------- */

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = [
  "David",
  "Oscar",
  "Julian",
  "Ricardo",
  "Valeria",
  "Yesica",
  "Camila",
];
console.log(education);

let educationES6 = ["David", ...team1, ...team2];
console.log(educationES6 + "en ES6");

/* ------------------------------------------------- */

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet);

const a = "b";
console.log(a);
// a = 'a' \No se puede re-asignar porque es una constante\;

/* ------------------------------------------------- */

let name = "nicolas";
let age = "23";

obj = {
  name: name,
  age: age,
};
console.log(obj);

objES6 = {
  name,
  age,
};
console.log(objES6 + "en ES6");

/* ------------------------------------------------- */

const names = [
  {
    name: "Nicolas",
    age: "23",
  },
  {
    name: "Yesica",
    age: "27",
  },
];

let listOfNames = names.map(function (item) {
  console.log(item.name + " es listOfName");
});

let listOfNamesES6 = names.map((item) =>
  console.log(item.name + " es listOfNamesES6v1")
);

const listOfNamesES6v2 = (name, age) => {
  console.log(listOfNamesES6v2 + " es listOfNamesES6v2");
};

const listOfNamesES6v3 = (name) => {
  console.log(listOfNamesES6v3 + " es listOfNamesES6v3");
};

const square = (num) => num * num;

/* ------------------------------------------------- */

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

/* ------------------------------------------------- */

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

/* ------------------------------------------------- */

import { hello } from "./module.js";
console.log(hello());

/* ------------------------------------------------- */
