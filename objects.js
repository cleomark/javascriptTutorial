// Object Declaration and Initialization
let person = {
  name: "John",
  age: 25,
  isStudent: false,
};

// Accessing Object Properties
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// Adding Methods to an Object
person.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

person.sayHello(); // Output: "Hello, my name is John"

// Adding and Modifying Properties
person.gender = "Male";
person.age = 26;

// Object Iteration
console.log("Person Information:");
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Object Destructuring
let { name, age, isStudent } = person;
console.log("Destructured values:", name, age, isStudent);

// Nested Objects
person.address = {
  city: "New York",
  zipCode: "10001",
};

console.log("City:", person.address.city);

// Objects with Arrays
let student = {
  name: "Alice",
  grades: [90, 85, 95],
  calculateAverage: function () {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  },
};

console.log("Average Grade:", student.calculateAverage());

// Object Constructors (ES5)
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

let myCar = new Car("Toyota", "Camry", 2022);
console.log("My Car:", myCar);

// ES6 Class Syntax (Syntactic Sugar for Constructors)
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

let cat = new Animal("Fluffy", "Cat");
console.log("Cat:", cat);
cat.makeSound(); // Output: "Generic animal sound"
