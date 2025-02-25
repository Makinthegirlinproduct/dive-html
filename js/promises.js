// function promiseHandler(success, failure) {
//   // Long running task

//   // 1000 milliseconds make 1 seconds. Hence 3000 makes 3 seconds.
//   setTimeout(() => {
//     success("Promise is successful");
//   }, 3000);

//   //   failure("Something wrong");
// }

// let myPromise = new Promise(promiseHandler);

// myPromise
//   .then((result) => console.log(result))
//   .catch((reason) => console.log("Log failed: ", reason));

const promise = new Promise((resolve, reject) => {
  const finalResult = 123;
  resolve(finalResult);

  //   reject("Something went wrong");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
