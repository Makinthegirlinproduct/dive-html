console.log("Assignment is loaded");

const name = "Micheal";
const age = 20;

console.log("Name: ", name);
console.log("Age: ", age);

function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Samuel"));

function checkAge() {
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
}

checkAge();

for (let index = 1; index <= 10; index++) {
  console.log(index);
}