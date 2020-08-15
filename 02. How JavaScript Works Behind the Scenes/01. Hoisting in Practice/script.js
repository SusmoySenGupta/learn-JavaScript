/**********************************
 * Hoising in practice
 */

// Functions

// Funciton Declaration
calculateAge(1990);

function calculateAge(year) {
  console.log(2016 - year);
}

calculateAge(1998);

// Function Expression

// retirement(1956)
var retirement = function (year) {
  console.log(65 - (2020 - year));
};

retirement(1997);

// Variables

console.log(23);
var age = 23;
console.log(23);

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
