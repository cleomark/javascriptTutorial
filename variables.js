// Variable Declaration and Initialization
let userName;
userName = prompt("Enter your name:"); // Taking user input

// String Concatenation
let greeting = "Hello, " + userName + "!";
console.log(greeting);

// Variable Types
let age = prompt("How old are you?");
age = parseInt(age); // Convert the input to an integer

let isAdult = age >= 18; // Boolean variable

if (isAdult) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Variable Scope
function myFunction() {
  let localVar = "I'm a local variable";
  console.log(localVar);
}

myFunction();
// console.log(localVar); // This would result in an error, localVar is not defined here

// Constants
const pi = 3.14;
console.log("The value of pi is: " + pi);
// pi = 3; // This would result in an error, you can't reassign a constant

// Dynamic Typing
let dynamicVariable = 5;
console.log("Dynamic variable: " + dynamicVariable);

dynamicVariable = "Now I'm a string";
console.log("Dynamic variable: " + dynamicVariable);
