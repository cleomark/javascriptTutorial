/*

Operators in Javascript

+ - Addition
- - Subtraction
/ - Division
* - Multiplication
% - Modulus (remainder)
^ - Exponentiation
= - Assignment operator
== - Equality comparison operator
=== - Strict Equality operator (checks both value and data type)
!= - Non-equality comparison operator
!== - Strict inequality operator
< - Less than comparison operator
> - Greater than comparison operator
<= - Less than or equal to comparison operator
>= - Greater than or equal to comparison operator
&& - Logical AND operator
|| - Logical OR operator
! - Logical NOT operator
& - Bitwise AND operator
| - Bitwise OR operator
~ - Bitwise complement operator
<< - Left shift operator
>> - Right shift operator

*/

// Examples
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10);

var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining === 1 || energy == 0);

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);