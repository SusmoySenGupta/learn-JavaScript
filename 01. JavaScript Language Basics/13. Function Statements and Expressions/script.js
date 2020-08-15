/********************************** 
 * Functions
 */
// Function declaretion
// function whatDoYouDo(job, firstName) {}



// Function expression
// Anything that produces a result is an expression. So it does return a vaule but a statment never returns a value.
// for example If else is a statement and typeof() is an expression.
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives an uber.';
        case 'designer':
            return firstName + ' designs websites.';
        default:
            return firstName + ' does someting else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));