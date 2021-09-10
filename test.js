const person1 = {
  firstName: "harry",
  lastName: "potter",
  hired: true,
};

const person2 = {
  firstName: "ron",
  lastName: "weasley",
  hired: false,
};

console.log("in the beginning");
console.log(person1);
console.log(person2);

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

function hireOrFire(action, person) {
  action(person);
}

hireOrFire(hire, person1);
hireOrFire(hire, person2);
