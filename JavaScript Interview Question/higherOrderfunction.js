// Map function takes the function to be executed on every Element of the array and return new array 
const square = (number) => number * number;
let arr = [1,2,3,4];
let squared_array = arr.map(square);
console.log(squared_array);


// Filter function in Javascript
// this return all the values that return true to particular predicate in the  function and also return new arr <= arr 

function isEven(number){
    if(number % 2 == 1) return false;
    return true;
}

let nums = [1,2,3,5,4,2];
let even_arr = nums.filter(isEven);
console.log(even_arr);

// check true for all values 
let isEvenArray = nums.every(isEven);
console.log(isEvenArray);


// forEach run for each Element in the Array
let sum = 0;
let number = [1,2,3,4];
function getSum(numbers){
    sum += numbers;
}
number.forEach(getSum);
console.log(sum);


// reduce take resultant + value and reduce to single element 
list = [1,2,3,4,5,6];
let answer = list.reduce((a,b) => {
    console.log(a,b);
    return a + b;
});

console.log(answer);
