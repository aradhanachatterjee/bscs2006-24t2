/***
 * Basic object literals and methods
 */

// Objects
// let xx = {'a': 5, 'b': 'hello'};
// console.log(xx);
// xx.add = function(x, y) {
//     return x + y;
// }
// console.log(`xx is of type ${typeof(xx)}`);
// console.log(`xx.add is of type ${typeof(xx.add)}`);
// console.log(`Evaluate the function xx.add(3,4) gives ${xx.add(3,4)}`);

// Special variable `this`
// Add a function that uses the value;
// xx.f = function(x) {
//     return this.a + x;
// }
// console.log(xx.f(10));

/***
 * Copyinh
 */

let x = {'a': 1, 'b': 2};
let y = x;
// console.log(x);
// console.log(y);
x.a = 3;
// console.log(x);
// console.log(y);

let z = {...x};
x.a = 5;
console.log(x);
console.log(y);
console.log(z);