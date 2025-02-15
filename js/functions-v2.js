//GLOBAL SCOPE: Can be accessed anywhere
const firstName = "Ayomide";

function greet() {
  //LOCAL SCOPE: Can only be accessed inside this function
  const otherName = "Micheal";
  console.log("Inside", firstName, otherName);
}

greet();

console.log("Outside", firstName);
