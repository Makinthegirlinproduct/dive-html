console.log("Arrays.js is loaded");

const names = ["Daniel", "Adebowale", "Lindiwe", "Goodnews"];

// console.log(names.length);
// console.log(names[1]);

// names[2] = "Mphuti";
// console.log(names);

// console.log(names.sort());

// names.push("Ayomide");
// console.log(names);

// const editedNames = names.map((name, index) => name + ` (Edited, ${index - 1})`);

// const editedNames = names.map(function (name, index) {
//   return name + ` (Edited, ${index})`;
// });

// console.log(editedNames);

const car1 = {
  color: "Blue",
  model: "Toyota Camry",
  type: "Sedan",
  milage: 200000,
  leatherSeat: false,
};

const car2 = {
  color: "White",
  model: "Lexus",
  type: "SUV",
  milage: 100000,
  leatherSeat: false,
};

const car3 = {
  color: "Black",
  model: "Lexus",
  type: "Sedan",
  milage: 50000,
  leatherSeat: true,
};

const cars = [car1, car2, car3];

// const lexusCars = cars.filter(function (car) {
//   return car.model === "Lexus";
// });

function carIsLexus(car) {
  return car.model === "Lexus";
}

// console.log(carIsLexus(car3));

// const lexusCars = cars.filter(carIsLexus)

const lexusCars = cars.filter((item) => item.model === "Lexus");

console.log(lexusCars);

// console.log(2 === "2")