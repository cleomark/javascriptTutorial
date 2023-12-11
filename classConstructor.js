class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  // Class Methods
  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
}

var userOne = new User("cleocalitisin@gmail.com", "clay");
var userTwo = new User("jannafrancince@gmail.com", "ja");

console.log(userOne);
console.log(userTwo);

userOne.login();
userTwo.logout();

// the 'new' keyword
//  - creates a new empty user object
//  - sets the value of 'this' to be the new empty object
//  - calls the constructor method
