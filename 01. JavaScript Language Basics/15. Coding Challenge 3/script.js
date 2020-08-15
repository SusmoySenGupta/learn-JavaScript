/********************************** 
 * Coding Challenge 3
 */
// My Solution

function calculateTip(bill) {
    if (bill < 50) {
        return bill * 0.20;
    } else if (bill >= 50 && bill <= 200) {
        return bill * 0.15;
    } else {
        return bill * 0.10;
    }
}

var bills = [124, 48, 268];
var tips = [];
var paidAmounts = [];


tips.push(calculateTip(bills[0]));
tips.push(calculateTip(bills[1]));
tips.push(calculateTip(bills[2]));

paidAmounts.push(bills[0] + calculateTip(bills[0]));
paidAmounts.push(bills[1] + calculateTip(bills[1]));
paidAmounts.push(bills[2] + calculateTip(bills[2]));

console.log('Tips are ');
console.log(tips);
console.log('Final paid amounts are ');
console.log(paidAmounts);



// Solution

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];
var finalValues = [bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];
console.log(tips, finalValues);