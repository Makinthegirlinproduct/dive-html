// console.log("callback.js is loaded");

function displaySomething(message) {
  console.log(message);
}

function myFirst() {
  displaySomething("Hello from first function");
}

function mySecond(message, callback) {
  console.log(message);
  callback();
}

function logThatWeAreRunning() {
  displaySomething("We are done running");
}

mySecond("Message as argument", logThatWeAreRunning);
