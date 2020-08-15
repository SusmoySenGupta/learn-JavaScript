/********************************** 
 * Coding Challenge 2
 */
// My solution
// Question: 1, 2, 3
var firstScoreJohn = 89;
var secondScoreJohn = 120;
var thirdScoreJohn = 103;
var avgJohn = (firstScoreJohn + secondScoreJohn + thirdScoreJohn) / 3;

var firstScoreMike = 116;
var secondScoreMike = 94;
var thirdScoreMike = 123;
var avgMike = (firstScoreMike + secondScoreMike + thirdScoreMike) / 3;


switch (true) {
    case avgJohn > avgMike:
        console.log('Team John wins with the score ' + avgJohn);
        break;
    case avgJohn < avgMike:
        console.log('Team Mike wins with the score ' + avgMike);
        break;
    default:
        console.log('Draw');
}

// Question: 4
var firstScoreMary = 97;
var secondScoreMary = 134;
var thirdScoreMary = 105;
var avgMary = (firstScoreMary + secondScoreMary + thirdScoreMary) / 3;

switch (true) {
    case avgJohn > avgMike && avgJohn > avgMary:
        console.log('Team John wins with the score ' + avgJohn);
        break;
    case avgMike > avgJohn && avgMike > avgMary:
        console.log('Team Mike wins with the score ' + avgMike);
        break;
    case avgMary > avgJohn && avgMary > avgMike:
        console.log('Team Mary wins with the score ' + avgMike);
        break;
    default:
        console.log('Draw');
}

// Solution
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points.');
} else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log('Mike\'s team wins with ' + scoreJohn + ' points.');
} else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log('Mary\'s team wins with ' + scoreJohn + ' points.');
} else {
    console.log('There is a draw');
}

/*
if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points.');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points.');
} else {
    console.log('There is a draw');
} 
*/