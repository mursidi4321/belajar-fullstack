// BIASANYA KALAU SUBMIT DITEKAN
// HALAMAN AKAN REFRESH KE HALAMAN LAIN/ TARGET

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // tetapi process jalan
    console.log(e);
})

// Misal link ditekan biasanya ke link yang dituju

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('link tidak kemana-mana...!')
})