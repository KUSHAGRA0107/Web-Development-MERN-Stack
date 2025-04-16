let ul = document.querySelector('ul');
let button = document.querySelector('button');

button.addEventListener("click", deleteChild);

function deleteChild() {
    let index = parseInt(document.querySelector('input').value.trim()) - 1;
    let child = ul.querySelectorAll('li');
    if (index >= 0 && index < child.length) {
        console.log(child);
        ul.removeChild(child[index]);
    } else {
        alert("Invalid Index");
    }
}