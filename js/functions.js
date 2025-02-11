console.log("functions.js loaded");

const text1 = "Hello";
const text2 = "World";

// CONCANTINATIONS
// const greetings = text1 + " Beautiful " + text2;
// console.log(greetings);

// function printUserProfile() {
//   const name = "Ayomide";
//   const age = 104;
//   const gender = "male";
//   const nationality = "South African";

// //   const bio =
// //     "User " +
// //     name +
// //     " of age " +
// //     age +
// //     ' is a ' +
// //     gender +
// //     " and also a " +
// //     nationality;

//     const bio = `User ${name} of age ${age} is a ${gender} and also a ${nationality}`;

//   console.log(bio);
// }

// printUserProfile();

function doSomeCalculations(number1, number2) {
  //   const number1 = 20;
  //   const number2 = 100;

  const result = number1 * number2;

  console.log(result);

  return;
}

console.log(doSomeCalculations(14, 20));
// console.log(calculationResult);
