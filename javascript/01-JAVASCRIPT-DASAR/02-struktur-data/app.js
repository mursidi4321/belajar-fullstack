// mengubah isi array []
let warna = ['hijua', 'kuning', 'kela', 'bu']
console.log(warna)

warna[2] = 'kelabu';
console.log(warna);

warna[3] = 'merah muda';
console.log(warna);

warna[0] = 1970;
console.log(warna);

warna[4] = 'bebas';
warna[9] = 'biru';
console.log(warna);

let barble = [];

barble.push(20);
console.log(barble);

barble.push(15);
console.log(barble);

barble.push(10, 5, 2.5);
console.log(barble);

barble.pop()
console.log(barble);

barble.pop();
console.log(barble);

// shift dan unshift

let student = ['sandika', 'galih', 'doddy'];
console.log(student);

student.unshift('abdur');
console.log(student);

student.unshift(0);
console.log(student);

student.shift();
console.log(student)

student.shift();
console.log(student);

student.shift();
console.log(student);

// concat menggabungkan dua array
const buku = ['besar', 'kas', 'kecil'];
const rakbuku = ['lemari', 'sorokan', 'bawah meja'];

const gabungArray = buku.concat(rakbuku);
console.log(gabungArray);

// mencari index isi array
const indexSorokan = rakbuku.indexOf('sorokan');
console.log(indexSorokan);

console.log(gabungArray.indexOf('sorokan'));

// mencari data yang tidak ada pada array hasilnya -1
console.log(buku.indexOf('berat'));


// mencari element item pada array // nilainya true - false
const lemari = rakbuku.includes('lemari');
console.log(lemari); 

console.log(gabungArray.includes('sambal'));

// sort diurutkan hanya nilai huruf awalnya saja
const array1 = ['december', 'april', 'januari'];
array1.sort();
console.log(array1);

const angka1 = [20, 10, 1000, 45];
angka1.sort();
console.log(angka1);

// slice - menghilangkan isi array
const binatang = ['sapi', 'kerbau', 'banteng', 'kucing'];

console.log(binatang.slice(2)); // memotong 2 element daridepan
console.log(binatang.slice(2, 3));
console.log(binatang.slice(-2));

// join - menambahkan karakter string antara element array to string
const minuman = ['air', 'tawar', 'suling'];

console.log(minuman);
console.log(minuman.join('-'));
console.log(minuman.join(' - '));


// nested array/ array multidimensi

const board = [
    ['nul', 'x', 'O'],
    ['x', null, 'x'],
    ['o', 'x', 'o']
];

console.log(board);
console.log(board[2][2]); // melihat isi board index ke2 dan ke-2
