"use strict";
const str = "carOlynE";
const capName =
  str.substring(0, 2).toLowerCase() +
  str.substring(2, 3).toUpperCase() +
  str.substring(3).toLowerCase();

console.log(capName);

const firstLetter =
  str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
console.log(firstLetter);

function myFunc() {
  let value = firstLetter;
  // code sets the value to something
  return value;
}
let result = myFunc();
console.log(result);
