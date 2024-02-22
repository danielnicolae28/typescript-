/// basic types

let age: number  = 30;
let firstName: string = 'Mario';
let isFunctional : boolean = true;
 
// null & undefined

let something :null;
let undefinedVariable : undefined;

/* we cannot assign a string to a varaible number or a boolean to
 a string the only reassign we ca do si string to string number to number etc... */

 //age = 'test reassign' // does't work
age = 45; // works

// isFunctional  = undefined; // does't work

isFunctional = false;

console.log(age);


/////// arrays


let names :string[] = ['Daniel','mario','Luigi'];

// we cannot push numbers in a string[] array type or any other type besides string the same applyes to any other array of any type  

let ages: number[] = [1,23,4,5];
names.push('true');
console.log(names);

// type interface with array


let fruits = ['apples','pears','bananas','mangos'];

fruits.push();

const f = fruits[3];
let things = [1,true,'hello']; // union type;


const t = things[0] ;


//// object literals

let user: {
    firstName:string,
    age:number,
    id:number
} ={
    firstName: 'Daniel',
    age:30,
    id:1245325
}

user.firstName = "235";
user.id = 2;




console.log(user);


//// funcitons 


function add(a: number,b : number):number{
    return a+b;
}

console.log(add(0,2));

const subtract = (a:number,b:number):number=>{
return a-b;
}

console.log(subtract(5,10));


function addAllNumber(items:number[]):void{
const total =  items.reduce((a,c)=>a+c,0);
console.log(total);
}
addAllNumber([1,23,4,567,2])


/// any type 


let age1:any; // can have any type

// can be used on array, objects, etc...

//ex 

let arrNums: any[] = [true,12,'a'];
let obj:{
    name:any,
    age:any
} = {

name:12,
age:'Daniel'
}


function anyFunction(value:any):any{
return value + value
}

//tuples 
// array of valeus of different types in a specific  order

let person :[string,number,boolean] = ['Daniel',12,true];

let hsla:[number,string,string,number]; // color codes example for tuple
hsla = [200,'100%','100%',1];
// can be used in functions

let xy :[number,number];

function useCoords():[number,number]{
    const lat = 100;
    const lang  = 50;


    return [lat,lang];
}
///  named tuples

let user1:[name:string,age:number];

user1 = ['peach',40];


// interfaces

interface Author{
    name:string,
    avatar:string,

}

const authorOne:Author={
    name:'Daniel',
    avatar:'/img'
};

interface Post{
  title:string,
  body:string,
  tags:string[],
  create_at:Date,
  author:Author

}

const newPost:Post={
    title:'My first post ',
    body:'something interesting',
    tags:['gaming','tech'],
    create_at:new Date(),
    author: authorOne
}

/// function interface 

function createPost (post:Post):void{
    console.log('Create post' + post.title+post.author.name)
}

console.log(createPost(newPost));
//// interface with array

let posts:Post[] = [];

posts.push(newPost);


//// type aliases
/// type help to create a specific type and used to avoid code duplicity

type Rgb = [number,number,number];

function getRandom ():Rgb{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return [r,g,b];

}

type User = {
    name:string,
    score:number
}

const userOne:User={
    name:'Daniel',score:75
}


function formatUser(user:User):void{
    console.log(`${user.name} has a score of ${user.score}`);
}


formatUser(userOne);

////// union type
// can combine types

let someId:string | number; // union type operator |

someId = 1;
someId = '2';

type Id = number | string;
let anotherId: Id;
anotherId = '3rfadfadsf23';

anotherId = 5;


//// type guards 
type  Id2 = number | string;


function swapId(id:Id){
    if(typeof id === 'string' ){
         /// type guard
         /// can use string methods
return parseInt(id)
    }else{
 //can use number methods       
return  id.toString();

    }

}



console.log(swapId(323));
console.log(swapId('62'));


///// union interfaces 


interface UserOne {
    type:'user'
    userName:string,
    email:string,
    id:Id
}

interface Person {
    type:'person'
    firstName:string,
    age:number,
    id:Id
}


/// tagged type

function logDetails(value: UserOne | Person): void{
if(value.type === 'user'){
    console.log(value.email);
}
if(value.type === 'person'){
    console.log(value.firstName);
}
}


//// generics 

function insertAtBeginning<T>(array:T[],value:T){
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [1,2,3];


const updateArray = insertAtBeginning(demoArray,-1);

const stringArray = insertAtBeginning(['a','b','c'],'d');


