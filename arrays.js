// Array Declaration and Initialization
let fruits = ["Apple", "Banana", "Orange"];

// Accessing Elements
console.log("First fruit:", fruits[0]); // Output: "Apple"

// Array Length
console.log("Number of fruits:", fruits.length); // Output: 3

// Adding Elements
fruits.push("Grapes");
console.log("After adding Grapes:", fruits); // Output: ["Apple", "Banana", "Orange", "Grapes"]

// Removing Elements
fruits.pop();
console.log("After removing last fruit:", fruits); // Output: ["Apple", "Banana", "Orange"]

// Iterating through Arrays
console.log("Fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using forEach
console.log("Fruits (using forEach):");
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// Array Methods
let numbers = [1, 2, 3, 4, 5];
numbers.unshift(0); // Adds 0 to the beginning
console.log("Numbers after unshift:", numbers); // Output: [0, 1, 2, 3, 4, 5]

numbers.shift(); // Removes the first element
console.log("Numbers after shift:", numbers); // Output: [1, 2, 3, 4, 5]

// Multidimensional Array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Element at row 1, column 2:", matrix[1][2]); // Output: 6

// Array Destructuring
let [first, second, third] = fruits;
console.log("Destructured values:", first, second, third); // Output: "Apple" "Banana" "Orange"
