// // mengisi parameter default dalam function

// const sapa = function sapa(nama = 'user', msg = 'selamat bekerja'){
//     console.log(`Hai, ${nama} mengucapkan ${msg}`);
// }

// console.log(sapa('mursidi', 'selamat pagi'));
// console.log(sapa());

// // spreed operator 
// const angka = [3,4,5,6,5,3,6];

// console.log(Math.max(angka));// NAN
// console.log(Math.max(...angka)); 6

//  merge array dengan spreed operator
// const angka1 = [1,3,4,5];
// const nama = ['siti', 'titi', 'noni'];

// const tambahan = [...angka1, 'joan'];
// const campuran = [...angka1, ...nama];

// console.log(tambahan);
// console.log(campuran);

// // didalam object
// const user = {
//     name: 'Jhon',
//     email: 'john@due.com'
// }

// const admin = {
//     password: '1234',
//     status: 'bujang',
//     hoby: 'coding'
// }

// // const userBaru = {...user, id: 234, password: 'johnxx'};
// // console.log(user);
// // console.log(userBaru);

// const userAdmin = {...user, ...admin};
// console.log(userAdmin);


// parameter banyak pakak rest param

const sumAll = (...nums) => {
    return nums.reduce((total, el) => total += el);
}

console.log(sumAll(1,2,3,4,5,6,7));

// const nama = ['siti', 'titi', 'noni', 'hasim', 'juned', 'sohib', 'abdul', 234];

// const pemenang = (emas,perunggu,perak, ...sisa) => {
//     console.log(`pemenang emas diberikan oleh ${emas}`);
//     console.log(`pemenang perunggu diberikan oleh ${perunggu}`);
//     console.log(`pemenang perak diberikan oleh ${perak}`);
//     console.log(`lainnya dianggap juara terkahir ${sisa}`);
// }

// console.log(pemenang(...nama));

// destructing / membongkar array

// const nama = ['siti', 'titi', 'noni', 'hasim', 'juned', 'sohib', 'abdul', 234];

// const [gold, silver, bronze, ...peserta] = nama;

// console.log(`juara 1 adalah ${gold}  `);
// console.log(`juara 2 adalah ${silver}  `);
// console.log(`juara 3 adalah ${bronze}  `);
// console.log(`peserta yang lain adalah ${peserta}  `);

// // Destructing - membongkar object
// const user = {
//     name : 'Hasan',
//     email : 'jhon@email.com'
// }

// const {name, email} = user;

// console.log(name); // Hasan
// console.log(email) // jhon@email.com

// const {name: namaku, email: emailku, passwrod = '1234' } = user;

// console.log(namaku)
// console.log(emailku);
// console.log(passwrod);

// bisa bongkar object dalam function
const user = {
    name : 'Hasan',
    email : 'jhon@email.com',
    role : 'admin'
};

const userAndRole = ({name, role}) => {
    return `${name} and ${role}`;
}

console.log(userAndRole(user));

const movies = [
    {
        title: "Barbara",
        rating : 45,
        release : 1995
    },
    {
        title: "Horeo",
        rating : 45,
        release : 2913
    },
    {
        title: "Jumbose",
        rating : 80,
        release : 2011
    },
];

const arrayMovies = movies.map(({title, rating}) => {
    return `${title} and ${rating}`;
})

console.log(arrayMovies);

const bestMovies = movies.map(({rating, title}) => {
    if(rating > 45){
        return `${title} the best movie`;
    }
    return 'Not movies';
})

console.log(bestMovies);

