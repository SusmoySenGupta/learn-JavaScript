/********************************** 
 * Truthy and Falsy Values and Equality Operators
 */
// falsy values: undefined, null, 0, '', NaN
// truthy values: Not falsy values

var height;
height = 0;
if (height || height === 0) {
    console.log('variable is defined');
} else {
    console.log('variable has not been defined');
}

// Equality operator
// == doesn't need to be in the same data type.
// === strict equality means the data type also needs to be the same.

if (height == '23') {
    console.log('The == operator does type coercion!');
}