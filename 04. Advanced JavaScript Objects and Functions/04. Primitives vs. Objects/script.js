/********************************** 
 * Primitives vs.Objects
 */

// Premitives

var a = 23;
var b = a;
a = 46;


// Objects

var obj1 = {
    name: 'John',
    age: 26,
};

var obj2 = obj1;
obj1.age = 30;


// Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'Sans'
};

change(age, obj);