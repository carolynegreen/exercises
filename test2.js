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
