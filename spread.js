// Spread in Array Literals
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Spread in Array Literals:", arr2);

// Spread in Function Arguments
const numbers = [1, 2, 3, 4, 5];

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

const result = sum(...numbers);
console.log("Spread in Function Arguments:", result);

// Spread for Object Literals (Shallow Copy)
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log("Spread for Object Literals (Shallow Copy):", obj2);

// Combining Arrays with Spread
const arr3 = [6, 7, 8];
const combined = [...arr1, ...arr2, ...arr3];
console.log("Combining Arrays with Spread:", combined);

// Copying Arrays
const originalArray = [9, 10, 11];
const copiedArray = [...originalArray];
console.log("Copying Arrays:", copiedArray);

// Spread in Function Arguments for Object Merge
const defaultConfig = { timeout: 5000, retry: 3 };
const userConfig = { retry: 5, logging: true };
const mergedConfig = { ...defaultConfig, ...userConfig };
console.log("Spread in Function Arguments for Object Merge:", mergedConfig);
