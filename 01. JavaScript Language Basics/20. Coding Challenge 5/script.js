/********************************** 
 * Coding Challenge 5
 */

// My solution

var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalBills: [],
    calcTip: function () {
        var percentage;
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                percentage = 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.10;
            }
            this.tips.push(this.bills[i] * percentage);
            this.finalBills.push(this.bills[i] + this.tips[i]);
        }
    }
};
john.calcTip();
console.log(john);

var mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalBills: [],
    calcTip: function () {
        var percentage;
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                percentage = 0.2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }
            this.tips.push(this.bills[i] * percentage);
            this.finalBills.push(this.bills[i] + this.tips[i]);
        }
    }
};
mark.calcTip();
console.log(mark);

function calculateAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

john.averageTip = calculateAverage(john.tips);
mark.averageTip = calculateAverage(mark.tips);

if (john.averageTip > mark.averageTip) {
    console.log('John paid the highest tip on average.');
} else {
    console.log('Mark paid the highest tip on average.');
}



// Solution

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.10;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
};

john.calcTips();
console.log(john);



// Part 2
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
};

mark.calcTips();
console.log(mark);

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}