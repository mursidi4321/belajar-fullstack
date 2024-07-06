// perulangan dengan for  mengulang ssesuatu
// for ( let i = 1; i <=10; i++){
//     console.log('apa yang ada dalam kururung akan dieksekusi')
//     console.log('menulis sebanyak' + i);
// };

// for (let i = 20; i >= 0; i--){
//     console.log(i);
// }

// for (let i = 0; i <=10; i += 2){
//     console.log('bilangan genap :' + i)
// }

// for (let i = 1; i <=10; i += 2){
//     console.log('bilangan ganjil :' + i)
// }

// for (let i = 1; i < 1000; i *= 10){
//     console.log('bilangan kelipatan 10 :' + i);
// }

// // mendapatkan data dari array dengan perulangan
// const animals = ['gajah', 'kucing', 'sapi'];
// animals.push('kambing');

// for(let i =0; i < animals.length; i++){
//     console.log(animals[i]);
// }

// Nested loop // loop didalam loop
// const pilihan = 'abcde';

// for (let i = 1; i < 10; i++){
//     console.log(`${i} Soal nomor ${i}`);
//     for (let j = 0; j < pilihan.length; j++ ){
//         console.log(`   ${pilihan[j]} Pilihan jawaban`);
//     }
// }

// // Mendapatkan data pada nested Array
// const studentRow = [
//     ['nonik', 'yuli', 'nena'],
//     ['hasan', 'abdul', 'zain', 'rato'],
//     ['ahmad', 'nono', 'huda', 'salim']
// ];

// for (let i = 0; i < studentRow.length; i++){
//     const row = studentRow[i];
//     console.log(`set row #${i +1}`);
//     for ( let j = 0; j < row.length; j++){
//         console.log(`   ${row[j]}`);
//     }
// }

// // // Pengulangan dengan WHILE
// let num = 0;
// while (num < 10 ){
//     console.log(num);
//     console.log(`ini diulang ${num} kali`)
//     num ++;
// }

// const PASSWORD = '1234';

// let guess = prompt('Enter your password :');

// while (PASSWORD !== guess) {
//     guess = prompt('Enter your password :');

// }

// alert('Congrulation yous password is OK');

// // break - untuk menghentikan pengulangan

// let input = prompt('Hei, say something');

// while( true ){
//     input = prompt(input);
//     if( input === 'stop') break;
// }

// alert('pengulangan selesai, OK');




// perulangan dengan syntax For of
// const fruits = ['apple', 'manggo', 'pineapple', 'gabus'];

// for ( i = 0; i < fruits.length; i++ ){
//     console.log(`Buah ${fruits[i]}`);
// }


// for (const fruit of fruits) {
//     console.log(`Buah ${fruit}`)
// }

// const studentRow = [
//     ['nonik', 'yuli', 'nena'],
//     ['hasan', 'abdul', 'zain', 'rato'],
//     ['ahmad', 'nono', 'huda', 'salim']
// ];

// for (const rows of studentRow){
//     for(const student of rows){
//         console.log(student);
//     }
// }

// Mengambil data pada object pengulangan;

const scoreStudents = {
    afifah: 23,
    Zulah: 49,
    dinok: 50,
    dodo: 25,
    agus: 34
}

// for(const score in scoreStudents){
//     console.log(`${score} memiliki nilai : ${scoreStudents[score]}`);
// }

let total = 0;
let scores = Object.values(scoreStudents);

for( let score of scores) {
    total += score;
}
console.log(`Nilai rata2 : ${total / scores.length}`)




