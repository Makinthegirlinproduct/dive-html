console.log("Object.js is loaded");

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

const user = {
  firstName: "Samuel",
  otherName: "Johnson",
  gender: "Male",
  occupation: "Software Engineer",
  location: "Nigeria",
  cars: [car1, car2, car3],

  introduce: function () {
    const noOfCars = this.cars.length;
    const message = `My name is ${this.firstName} ${this.otherName}. I currently reside somewhere in ${this.location}. And i have ${noOfCars} cars`;
    // console.log(message);
  },

  getLeatherSeatForCars: function () {
    const newCars = this.cars.map(function (car) {
      car.leatherSeat = true;
      return car;
    });
    this.cars = newCars;
    console.log("changed all cars to have leather seat");
  },
};

// user.introduce();
user.getLeatherSeatForCars();

console.log(user.cars);

console.log(
  user.cars.filter(function (car) {
    return car.model === "Lexus";
  })
);

// car.color = "White";
// car.hasAlloyRim = true;

// console.log(car.color);
// console.log(car.hasAlloyRim)

// console.log(car.type);
// console.log(user.firstName);

const dog = {
  name: "Sharon",
  breed: "Bingo",
  color: "Brown",
  speak: () => {
    console.log("Gbo gbo gbo");
  },
  walk: (destination) => {
    console.log(`I am walking to ${destination}`);
  },
};

// dog.walk("home");
// console.log(dog.name);
