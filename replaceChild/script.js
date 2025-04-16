let ul = document.querySelector('ul');
let tobeReplaced = ul.children[1];
let button = document.querySelector('button');
button.addEventListener("click", replaceChild);
function replaceChild() {
    let newElement = document.createElement('li');
    newElement.textContent = "Sir Viv Richards";
    ul.replaceChild(newElement, tobeReplaced);
}