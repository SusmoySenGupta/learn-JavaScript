/********************************** 
 * Coding Challenge 4
 */
// My solution
var mark = {
    name: 'Mark Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
};
var john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / (this.height * this.height);
    }
};

mark.bmi = mark.calcBMI();
john.bmi = john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(mark.name + ' has the higher BMI which is ' + mark.bmi);
} else if (john.bmi > mark.bmi) {
    console.log(john.name + ' has the higher BMI which is ' + john.bmi);
} else {
    console.log('They both have the same bmi');
}



// Solution
var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}