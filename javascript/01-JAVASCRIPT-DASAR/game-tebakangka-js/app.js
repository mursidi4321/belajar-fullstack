
// let angkaMaximal = parseInt(prompt('Angka maksimal yang ditebak....'));

// while( !angkaMaximal) {
//     angkaMaximal = parseInt(prompt('Angka maksimal yang ditebak....'));
// }
// console.log(angkaMaximal);

// const angkaTebakan = Math.floor(Math.random() * angkaMaximal) + 1;
// console.log(angkaTebakan);

// let guest = prompt('Masukkan angka tebakan pertama....!');

// while( parseInt(guest) !== angkaTebakan) {
//     if(guest < angkaTebakan) {
//         guest = prompt('Angka kurang besar  Ulangi lagi...');
//     } else {
//         guest = prompt('Angka kurang kecil, Silahkan ulang');
//     }
// }

// alert('Tebakan BERHASIL');

function gameStart(){
    let angkaMaximal = parseInt(prompt('Angka maksimal yang ditebak....'));
    document.getElementById('angkaMax').innerHTML = angkaMaximal;
    return angkaMaximal;
    // if(angkaMaximal){
    //    const tebakAngka = Math.floor(Math.random() * angkaMaximal) + 1;
    //    console.log(tebakAngka);
    // }
}

document.getElementById('angkaMax').classList('hilang')




// function tebak(){
//     let guest = parseInt(prompt("Masukan tebakan angka pertamakali..."));
//     console.log(guest);

// }


