const form = document.querySelector('#form');
const notes = document.querySelector('#notes');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = input.value;
    notes.appendChild(li);
    input.value = '';
});

notes.addEventListener('click', (e) => {
//    e.target.remove();
//    console.log(e.target.nodeName)
    e.target.nodeName === 'LI' && e.target.remove();
})
