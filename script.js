/*
const student= {
    name : 'kushagra',
    place : 'kanpur',
    age : 21
};
console.log(student.age);
student['dob'] = 'july';
console.log(student.dob);

// Write A program in Java Script to declare a string and add number to it
let string = '1';
let number = 1;
let answer = string + number;
console.log(typeof(answer));
*/ 

/*

// the type of any object may change if and only if i use let, var not const 
var object = {
    a : 1,
    b : 2
};
console.log(typeof(object));
object = 2;
console.log(typeof(object));
*/ 

/*
const dictionary = {
    "ephemeral": "lasting for a very short time",
    "serendipity": "the occurrence of events by chance in a happy or beneficial way",
    "ineffable": "too great or extreme to be expressed in words",
    "ubiquitous": "present, appearing, or found everywhere",
    "lucid": "expressed clearly; easy to understand"
};
console.log(dictionary);
*/

/*
let age = prompt('Enter Your Age');
if(age >= 10 && age <= 20){
    alert("Your Age Lie Between 10 and 20");    
}else{
    alert("Your Age Doesn't Lie Between 10 and 20");
}
*/

/*
let age = prompt('Enter Your Age');
let value = age % 10;
switch(value){
    case 0:
        alert("Your Age is Multiple of 10");
        break;
    default:
        alert("Not A multiple of 10");
        break;
}
*/

/*
for(let i = 0; i < 10; i++){
    console.log(i);
}
*/

/*
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}
*/

/*
let hashMap = {
    a : 1,
    b : 2,
    c : 3,
    d : 4
};
for (key in hashMap){
    console.log(key);
}

for (value of Object.values(hashMap)){
    console.log(value);
}
*/


/*
let correctNumber = 5;
while(prompt('Guess The Number') != correctNumber){
    alert('Please Guess Again');
}
alert('Finally You Are Correct');
*/


/*
function getMean(arr){
    let sum = 0;
    for(i of arr){
        sum += i;
        console.log(sum);
    }
    return sum / 5;
}
let arr = [1,2,3,4,5];
console.log(getMean(arr));
*/

/*
String in JavaScript
let name = "kushagra";
console.log(name);
let age = 21;
console.log(`My Age is ${age}`);

// to get length of string
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let newString = name.slice(1,4);
console.log(newString);

let nameReplace = name.replace("kushagra", "tandon");

console.log(nameReplace);

let string = "PSIT";
for(let i = 0; i < string.length;i++){
    console.log(string[i]);
}

*/

// let arr = [1,2,13,4,5];
// console.log(arr);

/*
for(index in arr){
    console.log(arr[index]);
}
for(value of arr){
    console.log(value);
}
for(let index = 0; index < arr.length; index++){
    console.log(arr[index]);
}
*/

/*
let string = arr.toString();
console.log(string[2]);

arr.pop();
console.log(arr);

arr.push(10);
console.log(arr);

// to pop the first element
arr.shift();
console.log(arr);

arr.unshift(2);
console.log(arr);

// delete arr[2];
// console.log(arr);
*/

// javascript sort the taking values array so to convert them to
// number we use comparator

// arr.sort((a,b) => a-b);
// console.log(arr);

// let name = Array.from("Harry");
// console.log(name);

// to get new Array from given array
// let newArray = arr.slice(1,3);
// console.log(newArray);

// let new_arr = arr.splice(0,2,1,2,4,4);
// console.log(new_arr);
// console.log(arr);

// (index, number of element to be removed, item 1... item n to be added)

/*
function fun1(){
    console.log("This is Function1");
    function  fun2(){
        console.log("This is Function2");
    }
    fun2();
}
fun1(); 
*/

/*
LEXICAL SCOPE IN JAVASCRIPT

function fun1(){
    var a = 1;
    console.log("This is Function :" + a);
    function  fun2(){
        var a = 2;
        console.log("This is Function :" + a);
    }
    fun2();
}
fun1();
*/