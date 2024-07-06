// // setTimeout dan setInterval
// // untuk jeda waktu dan pengulangan setelah beberapa waktu

// console.log('Hallo');

// setTimeout(() => { // setelah menunggu 5s 
//     console.log('Masih disana tidak....');
// }, 5000);

// console.log(' Saya pergi ya.');

// const interval = setInterval(() => { // setiap 2s akan proses
//     console.log(Math.random());
// }, 2000);

// clearInterval(interval); // menghentikan pengulangan

// // FILTER  mengembalikan nilai array yang sudah dimanipulasi
// const angka = [1,2,3,4,5,6,7,8,9];
// const angkaGanjil = angka.filter((e) => {
//     return e % 2 === 1;
// })

// console.log(angka);
// console.log(angkaGanjil);

// const movies = [
//     {
//         judul : 'Zomb',
//         rating : 56,
//         release: 1994
//     },
//     {
//         judul : 'Tosa',
//         rating : 56,
//         release: 1992
//     },
//     {
//         judul : 'Bos',
//         rating : 46,
//         release: 1980
//     },
// ];

// const movieBest = movies.filter(movie => {
//     return movie.rating > 50;
// })

// console.log(movieBest);
// const judulMovieBagus = movieBest.map(movie => {
//     return movie.judul;
// })


// console.log(judulMovieBagus);

// // SOME  DAN EVERY
// // EVERY ;
// // mengembalikan nilai bolean ketika kembalian punya nilai sama

// // some
// // mirip dengan every bedanya ketika ada salah satu saja kembalian 
// // bernilai sama 

// const kataKata = ['amin', 'yudi', 'rudi', 'sami'];

// const result = kataKata.every(kata => {
//     return kata.length === 4;
// })

// console.log(result); // true

// const kataKata2 = ['slamet', 'vina', 'yudistira', 'avi'];

// const result2 = kataKata2.some(kata => {
//     return kata.length === 3;
// })

// console.log(result2); // true

// const movieLastRelease = movies.some((movie) => {
//     return movie.release >= 1990;
// })

// console.log(movieLastRelease);// true

// // REDUCE mengembalikan satu nilai sesuai kondisi array
// const examScore = [70,86, 88, 76, 90];
// // cara menjumlahkan isi array diatas bisa ;
// let total = 0;
// for(let score of examScore){
//     total += score;
// }
// console.log(total);

// // bisa juga pakai method reduce
// const totalScore = examScore.reduce((startNumber, nextNumber) => {
//     return startNumber + nextNumber;
// })

// console.log(totalScore);

const movies = [
    {
        judul : 'Zomb',
        rating : 56,
        release: 1994
    },
    {
        judul : 'Tosa',
        rating : 80,
        release: 1992
    },
    {
        judul : 'Bos',
        rating : 83,
        release: 1980
    },
];

// mencari movie yang ratingnya terbesar

const bestMovie = movies.reduce((bestMovie, currentMovie) => {
    if( currentMovie.rating > bestMovie.rating) {
        return currentMovie;
    }
    return bestMovie;
});

console.log(bestMovie);

// object this dalam aerofunction mengarah pada object global

const person = {
    nama : "Mursidi",
    umur : 35,
    kenalan : function(){
        console.log(`Hei, namaku ${this.nama} umur saya : ${this.umur}`);
    },

    pekerjaan: () => {
        console.log(this.nama + 'Pekerjaan saya Freelancer');
        console.log(this);
    }  // this. dalam aerofunction ini tidak dikenali, karena mengarah
        // ke object global window;
        // 
}

console.log(person.kenalan());
console.log(person.pekerjaan());
