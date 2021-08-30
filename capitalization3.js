const str = "peter";
const capName =
  str.substring(0, 2).toLowerCase() +
  str.substring(2, 3).toUpperCase() +
  str.substring(3).toLowerCase();

console.log(capName);
