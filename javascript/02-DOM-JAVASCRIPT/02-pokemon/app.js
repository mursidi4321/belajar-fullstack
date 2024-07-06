// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 500; i++){ // digenerate s/d 500
   const pokeBall = document.createElement('div'); // buat el div
   pokeBall.classList.add('pokemon'); // tambahkan class pokemon

   const imgPokemon = document.createElement('img'); // buatg el img
   imgPokemon.src = `${baseImgUrl}${i}.png`; // ditambah src

   const label = document.createElement('span'); // buat el span
   label.innerHTML = `No. ${i}`; //tambahkan html i

   pokeBall.appendChild(imgPokemon); 
   pokeBall.appendChild(label);
   container.appendChild(pokeBall);
}