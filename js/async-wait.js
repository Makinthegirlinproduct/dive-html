function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

// BREAKKKKKKKKKKK
// BREAKKKKKKKKKKK
// BREAKKKKKKKKKKK
// BREAKKKKKKKKKKK

async function myFunction() {
  const url = "https://api.spoonacular.com/recipes/complexSearch";
  console.log("Making API Request");
  const response = await fetch(url);
  console.log("API Request finished");

  throw "Something went wrong";

  //   console.log(response);
  return "Hello Daniel";
}

// myFunction()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => console.log(err));

async function anotherFunction() {
  try {
    const greeting = await myFunction();
    console.log("Result value is", greeting);
  } catch (error) {
    console.log("Couldn't make your API request because", error);
  }
}

anotherFunction();
