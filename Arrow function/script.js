// This is the normal way to declare a function
let hello = function(a){
    console.log(a);
    return "Hello, World";
}
console.log(hello(1));


// This is an arrow function 
let arrow = () => "hello, world";
console.log(arrow());


// This Arrow function returns a value 
let helper = (length, breadth) =>{
    let answer = length * breadth;
    return answer;
}
let area = helper(5, 10);
console.log(area);


// If Only One Parameter is to be passed we could easily skip the paranthesis()
let square = value => value * value;
console.log(square(2));

// arrow function used in map
let answer = [1,2,3,4,5].map((n) => n * n);
console.log(answer);





