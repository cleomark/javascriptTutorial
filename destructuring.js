// Object Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    city: "New York",
    zipCode: "10001",
  },
};

const {
  firstName,
  lastName,
  age,
  address: { city, zipCode },
} = person;
console.log(firstName, lastName, age, city, zipCode);

// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third, ...rest] = numbers;
console.log(first, second, third, rest);

// Function Parameter Destructuring
function printPersonDetails({ firstName, lastName, age }) {
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

printPersonDetails(person);

// Nested Destructuring
const nestedData = {
  outer: {
    inner: {
      value: "Nested Value",
    },
  },
};

const {
  outer: {
    inner: { value },
  },
} = nestedData;
console.log(value);
