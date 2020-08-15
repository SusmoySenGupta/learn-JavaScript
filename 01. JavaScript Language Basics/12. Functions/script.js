/********************************** 
 * Functions
 * //Dry: Don't Reapeat Yourself
 */

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1997);
var ageMike = calculateAge(1997);
var ageJane = calculateAge(1997);
console.log(ageJohn, ageMike, ageJane);

function yearsUntileRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntileRetirement(1997, 'Susmoy');
yearsUntileRetirement(1950, 'John');
yearsUntileRetirement(1988, 'Mike');