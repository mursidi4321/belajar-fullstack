// const password = prompt('Isikan password ! : ');

// if(password.length > 3 ){
//     if(password.indexOf(' ') === -1 ) {
// 
//         console.log(`${password} adalah valid`);

//     } else {
//         console.log(`${password} tidak boleh ada spasi`);
//     }
// } else {
//     console.log(`${password} minimal 3 karakter`)
// }


// operator && / AND semua harus true

// if(password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Password valid');
// } else {
//     console.log('Password tidak memenuhi syarat');
// }

// operator OR  || salah satu true lolos
// const role = prompt('Masukkan username :');

// if(role === 'admin' || role === 'spv') {
//     console.log('Beoleh mengaksess data');
// } else {
//     console.log('Akses ditolak');
// }


// NOT  negasi !
// const role = prompt('Masukkan username :');

// if(role !== 'admin'){
//     console.log('akses ditolak')
// } else {
//     console.log("akses diterima");
// }


// ALTERANTIF IF DENGAN CASE  switch

const balonku = prompt('Input warna balon : ')

switch (balonku) {
    case 'merah':
        console.log('balonku warna merah')
        break;
    case "hijau" :
        console.log('Balonku door ..')
        break;
    default:
        console.log('bukan balonku')
        break;
}
