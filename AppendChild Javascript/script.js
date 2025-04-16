let container = document.querySelector('.container');
let input = document.querySelector('input');
let button = document.querySelector('.button');
button.addEventListener("click", addParagraph);
function addParagraph(){
    let inp = input.value.trim();
    let p = document.createElement('p');
    p.textContent = inp;
    container.appendChild(p);
    input.value = "";
}