/**********************************
 * Scoping and the Scope Chain
 */
// First scoping example

var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'John';
    console.log(a + b + c);
  }
}


// Example to show the difference between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    third();
  }
}

function third() {
  var d = 'John';
  //console.log(c);
  console.log(a + d);
}