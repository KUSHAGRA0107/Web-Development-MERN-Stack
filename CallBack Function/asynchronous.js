/*
"I will finish later!"
Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout()
*/


setTimeout(printFunction, 5000);
function printFunction(){
    console.log('This is an Async Function');
}

