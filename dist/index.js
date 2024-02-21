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
//// funcitons 
function add(a, b) {
    return a + b;
}
console.log(add(0, 2));
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(5, 10));
function addAllNumber(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumber([1, 23, 4, 567, 2]);
/// any type 
let age1; // can have any type
// can be used on array, objects, etc...
//ex 
let arrNums = [true, 12, 'a'];
let obj = {
    name: 12,
    age: 'Daniel'
};
function anyFunction(value) {
    return value + value;
}
//tuples 
// array of valeus of different types in a specific  order
let person = ['Daniel', 12, true];
let hsla; // color codes example for tuple
hsla = [200, '100%', '100%', 1];
// can be used in functions
let xy;
function useCoords() {
    const lat = 100;
    const lang = 50;
    return [lat, lang];
}
///  named tuples
let user1;
user1 = ['peach', 40];
const authorOne = {
    name: 'Daniel',
    avatar: '/img'
};
const newPost = {
    title: 'My first post ',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
};
/// function interface 
function createPost(post) {
    console.log('Create post' + post.title + post.author.name);
}
console.log(createPost(newPost));
//// interface with array
let posts = [];
posts.push(newPost);
function getRandom() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const userOne = {
    name: 'Daniel', score: 75
};
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userOne);
////// union type
// can combine types
let someId; // union type operator |
someId = 1;
someId = '2';
let anotherId;
anotherId = '3rfadfadsf23';
anotherId = 5;
function swapId(id) {
    if (typeof id === 'string') {
        /// type guard
        /// can use string methods
        return parseInt(id);
    }
    else {
        //can use number methods       
        return id.toString();
    }
}
console.log(swapId(323));
console.log(swapId('62'));
/// tagged type
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email);
    }
    if (value.type === 'person') {
        console.log(value.firstName);
    }
}
//// generics 
