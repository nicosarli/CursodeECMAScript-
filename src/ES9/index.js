const obj = {
  name: "nicolas",
  age: "23",
  country: "AR",
};

let { country, ...all } = obj;
console.log(all);

/* ------------------------------------------------- */

const obj = {
  name: "nicolas",
  age: "23",
};

const obj1 = {
  ...obj,
  country: "AR",
};

console.log(obj1);

/* ------------------------------------------------- */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));

/* ------------------------------------------------- */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2020-06-24");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
