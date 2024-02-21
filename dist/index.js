"use strict";
/// basic types
let age = 30;
let firstName = 'Mario';
let isFunctional = true;
// null & undefined
let something;
let undefinedVariable;
/* we cannot assign a string to a varaible number or a boolean to
 a string the only reassign we ca do si string to string number to number etc... */
//age = 'test reassign' // does't work
age = 45; // works
// isFunctional  = undefined; // does't work
isFunctional = false;
console.log(age);
/////// arrays
let names = ['Daniel', 'mario', 'Luigi'];
// we cannot push numbers in a string[] array type or any other type besides string the same applyes to any other array of any type  
let ages = [1, 23, 4, 5];
names.push('true');
console.log(names);
// type interface with array
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push();
const f = fruits[3];
let things = [1, true, 'hello']; // union type;
const t = things[0];
//// object literals
let user = {
    firstName: 'Daniel',
    age: 30,
    id: 1245325
};
user.firstName = "235";
user.id = 2;
console.log(user);
