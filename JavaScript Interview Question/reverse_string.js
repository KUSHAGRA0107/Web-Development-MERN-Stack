function reverseString(string){
    let newString = "";
    for(let i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }
    return newString;
} 
let string = "harry";
let answer = reverseString(string);
console.log(answer);