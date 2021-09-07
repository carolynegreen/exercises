"use strict";
const str = "peter";
const capName =
  str.substring(0, 2).toLowerCase() +
  str.substring(2, 3).toUpperCase() +
  str.substring(3).toLowerCase();

console.log(capName);

const firstLetter =
  str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
console.log(firstLetter);
