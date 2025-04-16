// // get element by tagname
// let a = document.getElementsByTagName('li');
// console.log(a);

// // get element by className

// let b = document.getElementsByClassName('hero');
// console.log(b);

// // get Element by id

// let c = document.getElementById('ul');
// console.log(c);

// // get by querySelector 
// let d = document.querySelector('li');
// console.log(d);

// let e = document.querySelectorAll('li');
// console.log(e);

// to get parent element of any tag 
// let child = document.querySelector('li');
// let parent = child.parentElement;
// console.log(parent);


// to get children of any tag
let parent = document.querySelector('ul');
let children = parent.children;
console.log(children[0]);

// console.log(parent.childNodes);
// Very important --> to append      any child or an item  

// to get sibling 
let element = document.querySelector('li');
console.log(element.nextElementSibling.innerHTML);

// append a child 

