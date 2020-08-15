/********************************** 
 * Objects and Methods
 */
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function (birthYear) {
        return 2020 - birthYear;
    },
    calcAges: function () {
        return 2020 - this.birthYear;
    }
};

console.log(john.calcAge(1997));
console.log(john.calcAges());

john.age = john.calcAges();