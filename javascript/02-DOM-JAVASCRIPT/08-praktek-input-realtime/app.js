const form = document.querySelector('#form');
const input = document.querySelector('input');
const notes = document.querySelector('#notes');

// ADDEVENLISTERNER CHANGE = BERUBAH KETIKA NILAI INPUT BERUBAH
input.addEventListener('change', (e) => {
    console.log('NILAI INPUT BERUBAH')
})

// ADDEVENTLISTENER INPUT = ADA INPUT KETIKA CODE KEYBOARD BISA MASUK KE INPUT
input.addEventListener('input', () => {
    const h1 = document.querySelector('h1');
    h1.innerHTML = input.value;
    console.log('Masukkan input');
})



form.addEventListener('submit', (e) => {
   e.preventDefault();
   const newNotes = document.createElement('li');
   newNotes.innerText = input.value;
   notes.append(newNotes);
  
   input.value = '';
})