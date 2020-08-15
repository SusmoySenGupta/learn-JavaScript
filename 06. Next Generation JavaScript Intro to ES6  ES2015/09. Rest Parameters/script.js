/*
>>> 09. Rest Parameters
*/
// ES5

// function isFullAge5() {
//     //console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function (cur) {
//         console.log((2020 - cur) >= 18)
//     });
// }
// isFullAge5(2003, 1999, 2005);

// // ES6

// function isFullAge6(...years) {
//     console.log(years);
//     years.forEach(cur => console.log((2020 - cur) >= 18));
// }

// isFullAge6(2003, 1999, 2005);

function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function (cur) {
        console.log((2020 - cur) >= limit)
    });
}
isFullAge5(21, 2003, 1999, 2005);

// ES6

function isFullAge6(limit, ...years) {
    console.log(years);
    years.forEach(cur => console.log((2020 - cur) >= limit));
}

isFullAge6(21, 2003, 1999, 2005);