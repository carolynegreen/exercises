const people = ["harry", "ron", "hermione", "hagrid"];

function sayHello(person) {
  console.log(`Hello ${person}`);
}

people.forEach(sayHello);

function testParams(a, b, c, d) {
  console.log(`a: ${a}, b: ${b}, c: ${c}, d:${d}`);
}

people.forEach(testParams);

function testParamsMakingErrors(a, b, c, d) {
  console.log(`a: ${a}, b: ${b}, c: ${c}, d:${d}`);

  console.log(`${a} and ${c[b + 1]} are enemies`);
}
people.forEach(testParamsMakingErrors);

const animals = [
  { name: "mandu", type: "cat" },
  { name: "mia", type: "cat" },
  { name: "doug", type: "dog" },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}
console.log("all animals");
console.log(animals);

console.log("starts with p");
//const cat = animals.filter(isCat);
console.log(startsWithP);

console.log("dogs");
console.log();

const startsWithP = animals.filter(function (animals) {
  if (animals.name.charAt(0) === "P") {
    return true;
  }
  return false;
});
