// // callback function
// // 1. Foreach
// const dataNumbers = [0,1,2,3,4,5,6,7,8,9,10];

// dataNumbers.forEach(function(number) {
//     console.log(number * 5);
// });


// const films = [
//     {
//         judul: "Stage",
//         rating: 45
//     },
//     {
//         judul: "stone",
//         rating: 70
//     },
//     {
//         judul: "Bage",
//         rating: 90
//     },
//     {
//         judul: "Horn",
//         rating: 12
//     },
// ];

// films.forEach(function(film) {
//     console.log(`judul Film : ${film.judul} ratting : ${film.rating}`);
// })

// MAPPING - output array
// nilai baliknya array baru yang sudah dimodif lewat callback
const dataNumbers = [0,1,2,3,4,5,6,7,8,9,10];

const result = dataNumbers.map(function(number){
    return number * 2;
})

console.log(dataNumbers);
console.log(result);

const films = [
    {
        judul: "Stage",
        rating: 45
    },
    {
        judul: "stone",
        rating: 70
    },
    {
        judul: "Bage",
        rating: 90
    },
    {
        judul: "Horn",
        rating: 12
    },
];

const judulFilms = films.map(function(film) {
    return film.judul.toUpperCase();
})

console.log(films);
console.log(judulFilms);

// AEROFUCNTION
function perpangkatan(num){ // function biasa
    return num * num
}

const hasil = perpangkatan(5);
console.log(hasil); // 25

const hasil2 = function perpangakatan2(a){ // function expression
    return a * a ;
}
console.log(hasil2(4)); //16

// const hasil4 = () => { // bisa ditulis begini
//     return Math.random() * 1000;
// };

const hasil4 = () => (Math.floor(Math.random() * 1000)); // bisa begini

 
console.log(hasil4())

const hasil3 = (c) => c * c ; // aero function
console.log(hasil3(9)); // 81

