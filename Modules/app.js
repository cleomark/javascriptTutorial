// app.js - Main application module

// Importing from math module
import { add, subtract, multiply, divide } from "./math";

// Importing from display module
import { displayResult } from "./display";

// Performing math operations
const resultAdd = add(5, 3);
const resultSubtract = subtract(8, 2);
const resultMultiply = multiply(4, 6);
const resultDivide = divide(10, 2);

// Displaying results
displayResult("Addition", resultAdd);
displayResult("Subtraction", resultSubtract);
displayResult("Multiplication", resultMultiply);
displayResult("Division", resultDivide);
