/********************************** 
 * Closures
 */
function retirement(retirementAge) {
    var a = ' years left untile retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGer = retirement(65);
var retirementBD = retirement(67);
retirementUS(1997);
retirementGer(1997);
retirementBD(1997);

//retirement(66)(1990);

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');