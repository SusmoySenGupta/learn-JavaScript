/********************************** 
 * 03. Creating Objects Object.create
 */
// Object.create
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {
        value: 'Jane'
    },
    year: {
        value: 1969
    },
    job: {
        value: 'designer'
    }
})