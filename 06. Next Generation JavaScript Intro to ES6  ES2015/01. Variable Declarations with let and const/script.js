/*
>>> let and const
*/

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age = 23;
// name6 = 'Jane Miller'; // Assignment to const variable is not possible


/* 
var is function scoped
let is blocked scoped
*/


// ES5
function driversLicence(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;

        console.log(firstName + ' born in ' + yearOfBirth + ' is now allowed to drive a car.');
    }
}

driversLicence(true);


// ES6
function driversLicence(passedTest) {


    if (passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
        console.log(firstName + ' born in ' + yearOfBirth + ' is now allowed to drive a car.');

    }
}

driversLicence(true);



// ES5

var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);




// ES6

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);