
const container = document.querySelector('#container');
const button = document.querySelector('#changeColor');

container.addEventListener('click', function(){
    container.classList.toggle('hide');
})

button.addEventListener('click', (e) => {
    button.style.backgroundColor = colorize();
    e.stopPropagation(); // menghentikan efek bubling
})

const colorize = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}