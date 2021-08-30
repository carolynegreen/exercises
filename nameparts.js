const fullName = "carolyne marie green";
console.log(`full name: ${fullName}`);

const firstName = fullName.split(" ", 1);
const middleName = fullName.split(" ", 2).slice(-1);
const lastName = fullName.split(" ", 3).slice(-1);

console.log(`first name: ${firstName}`);
console.log(`middle name: ${middleName}`);
console.log(`last name: ${lastName}`);
