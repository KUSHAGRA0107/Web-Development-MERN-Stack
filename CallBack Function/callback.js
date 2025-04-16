/*
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished

function displayHello(){
    console.log("Hello, World");
}
 
function one(){
    displayHello();
}
function two(){
    displayHello();
}

one();
two();

A callback is a function passed as an argument to another function.
*/
function displayResult(sum){
    console.log(`The sum is ${sum}`);
}

function calculateSum(a, b, displayResult){
    let sum = a + b;
    displayResult(sum);  
}

calculateSum(1,3, displayResult);


/*
Where callbacks really shine are in asynchronous functions,
where one function has to wait for another function (like waiting for a file to load).
 */