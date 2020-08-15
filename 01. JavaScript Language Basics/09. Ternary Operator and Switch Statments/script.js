/********************************** 
 * Ternary Operator and Switch Statments
 */
// Ternary Operator
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') :
    console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch Statment
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber.');
        break;
    case 'designer':
        console.log(firstName + ' designs webpage.');
        break;
    default:
        console.log(firstName + ' does something else,');
}

age = 10;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}