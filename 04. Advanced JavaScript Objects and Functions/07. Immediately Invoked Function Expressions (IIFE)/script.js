/********************************** 
 *07. Immediately Invoked Function Expressions (IIFE)
 */

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(
    function () {
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)(); // score is not accesible outside the scope

(
    function (goodluck) {
        var score = Math.random() * 10;
        console.log(score >= 5 - goodluck);
    }
)(5);