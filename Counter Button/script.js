let counter = document.querySelector('h2');
counter.innerHTML = 0;

let button = document.getElementById('clickme');
let rst = document.getElementById('reset');

button.addEventListener('click', increase);
rst.addEventListener('click', reset);

function reset(){
    counter.innerHTML = 0;
}
function increase(){
    let value = parseInt(counter.innerHTML) + 1;
    counter.innerHTML = value;
}