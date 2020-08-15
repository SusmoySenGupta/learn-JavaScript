/*
>>> 02. Blocks and IIFEs
*/

// IIFEs

// ES6
{
    const a = 1;
    let b = 2;
}

// console.log(a + b); // can't be accessed, imedietly invoked

// ES5

(
    function () {
        var c = 3;
    }
)();