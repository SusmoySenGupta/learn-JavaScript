/********************************** 
 * Coding Challenge 1
 */

//
console.log('MY SOLUTION');
//

// My solutoion
var massJohn = 92,
    massMark = 78,
    heightJohn = 1.95,
    heightMark = 1.69,
    bmiJohn, bmiMark, isMarkHeavy;

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);
console.log("John's BMI " + bmiJohn, "Mark's BMI " + bmiMark);

isMarkHeavy = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's? " + isMarkHeavy);


//
console.log('SOLUTION');
//
// Solution
var massMark = 78; // kg
var heightMark = 1.69; // meter

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);