/*
Variables

1-grammarAndTypes
 02-declarations.js
*/

//what is a variable?
var a = 1;
var b = 2;


//notes on naming variables;
// 1) a variables must begin with a letter, underscore, or dollar sign
// 2) numbers may follow the abover characters, but cannot come first
// 3) JavaScript is case sensitive--'hello' and 'Hello' are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value. This can be after initialization.

*/

var x;
console.log('Declaration 1:', x); //undefined
x=10;
console.log('Initialization 1:', x); //10
x=33
console.log('Assignment 1:', x); // 33

