/********************************** 
 * Variables and data-types
 */
/*var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
*/


/********************************** 
 * Variables mutation and type coercion
    dynamic typing
 */

// Type coercion
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(job + ' ' + isMarried);


// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + 'is a ' + age + ' years old. He is a ' + job + 'is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);