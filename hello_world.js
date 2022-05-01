const firstName = "stephen";
const lastName = "harness";
const modifiedFirstName = firstName[0].toUpperCase() + firstName.substring(1);
const modifiedLastName = lastName[0].toUpperCase() + lastName.substring(1);

console.log(`hello world! ${firstName} ${lastName} is a badass!`)

console.log(`hello world! ${modifiedFirstName} ${modifiedLastName} is a badass!`)