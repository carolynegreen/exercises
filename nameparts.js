const fullName = "carolyne marie huynh green";
console.log(`full name: ${fullName}`);
getNameParts(fullName);

function getNameParts(fullName) {
  let firstName = fullName.substring(0, fullName.indexOf(" "));
  let middleName = fullName.substring(
    fullName.indexOf(" ") + 1,
    fullName.lastIndexOf(" ")
  );
  let lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

  const first = capitalize(firstName);
  const middle = capitalize(middleName);
  const last = capitalize(lastName);

  console.log(first, middle, last);
}

function capitalize(str) {
  let noSpace = str.trim();
  let capital =
    noSpace.substring(0, 1).toUpperCase() + noSpace.substring(1).toLowerCase();
  return capital;
}
