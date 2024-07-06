// MENEJALANKAN EVENT MELALUI DOM

const button = document.querySelector('#clickMe');

button.onclick = function(){ // functin biasa
    console.log('Clik Me')
}

button.onmouseover = () => { // function expression
    console.log('dont touch me')
}

const scream = () => {
    console.log('Double clicks')
}

button.ondblclick = scream;


// ADD EVEN LISTENER
const eventBtn = document.querySelector('#eventBtn');

// eventBtn.addEventListener('click', function(){
//     alert('clicked');
// })

// eventBtn.addEventListener('mouseover', (event) => {
//     console.log('Don touch me event')
// })

function step1(){
    console.log('step satu');
}

function step2(){
    console.log('step dua');
}

eventBtn.addEventListener('click', step1);
eventBtn.addEventListener('click', step2);