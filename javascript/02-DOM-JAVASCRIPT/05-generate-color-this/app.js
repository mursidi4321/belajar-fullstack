const headings = document.querySelectorAll('#head');
const buttons = document.querySelectorAll('button');

const generateColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

// for(let button of buttons) {
//     button.addEventListener('click', () => {
//         button.style.backgroundColor = generateColor();
//         button.style.borderColor = generateColor();
//     })
// }

// for(let head of headings){
//     head.addEventListener('click', () => {
//         head.style.backgroundColor = generateColor();
//         head.style.borderColor = generateColor();
//     })
// }

// WITH THIS
for (let button of buttons){
    button.addEventListener('click', colorize);
}

for (let head of headings){
    head.addEventListener('mouseover', colorize);
}

function colorize(){
    this.style.backgroundColor = generateColor();
    this.style.borderColor = generateColor();
}