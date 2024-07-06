// // Function
// function lemparDadu() {
//     const lemparDadu = Math.floor(Math.random() * 6) + 1;
//     console.log(lemparDadu);
// }

// // Argument dan paramater
// // ada didalam function

// function nameFunction(nameParamter){
//     console.log('process  ' + nameParamter);
// }

// nameFunction('nameArguments');

// function selamatPagi(name) {
//     console.log(`Hai, ${name} selamat pagi`);
// }

// selamatPagi('Mursidi');
// selamatPagi(1234);
// selamatPagi('apasaja');

// // multiple argument dan parameters
// function jumlahkan(a,b){
//     const total = a + b;
//     console.log(total);
// }

// jumlahkan(3,5);

// // Return
// // : mengahiri fungsi dan mengembalikan nilai

// function kalikan(a,b){
//     // return a * b;
//     return total = a * b;
// }

// jumlah = kalikan(5,6);
// console.log(jumlah);

// // visibilitas variable sesuai scope
// let programming = 'javascript';

// function typeProgramming() {
//     let programming = 'typescript';
//     console.log(programming);
// }

// console.log(programming); // javascript
// console.log(typeProgramming()); // typescript

// // Lexical sdope - variable didalam function

// function lamaranKerja(){
//     const jabatan = 'Programmer';

//     function orangDalam(){
//         let kenalan = 'Orang dalam bisa memasukkan jabatan ' + jabatan; // variable jabatan bisa diakses
//         console.log(kenalan);
//     }
    
//     orangDalam();
// }

// console.log(lamaranKerja());

// // Function expression
// // function nilaiPerpangkatan(nilai){
// //     return nilai * nilai;
// // }

// // const hasil = nilaiPerpangkatan(10);
// // console.log(hasil);

// const hasilPerpangkatan = function(nilai, nilai2){
//     return nilai * nilai2;
// }

// console.log(hasilPerpangkatan(10,20));

// // Function sebagai arguments

// function duaKali(funct){
//     funct();
//     funct();
// }

// function lemparDadu() {
//     const hasil = Math.floor(Math.random() * 10);
//     console.log(hasil);
// }


// console.log(duaKali(lemparDadu));


// // function benilai balik function
// function hasilNilaiFunction (){
//     const rand = Math.random();
//     console.log(rand);
//     if(rand > 0.3){
//         const result = () => 'OK';
//         return result;
       
//     } else {
       
//         const result = () => 'NOT OK';
//         return result;
      
//     }
// }

// const hasil = hasilNilaiFunction();
// console.log(hasil);


// // method didalam object
// const myMath = {
//     perkalian: function(a,b){
//         hasil = a * b;
//         console.log(hasil)
//     }
// }

// console.log(myMath.perkalian(4,5));


// // this
// const polisiOknum = {
//     nama: 'Suhardi',
//     tugas: 'Mancing keributan',
//     kenalan : function(){
//         console.log(`Hai, ${this.nama} tugas saya : ${this.tugas}`)
//     }
// }

// console.log(polisiOknum.kenalan());


// try and catch  untuk menyelamatkan jika gagal
try {
    //process 


} catch {
    //jika gagal /error

}

function teriak(msg){
    try {
        console.log(msg.toUpperCase());
        console.log('ini yang benar');
    } catch (msg) {
        
        console.log('ini yang salah');
    }
}

const hasil = teriak('taksi');
console.log(hasil);





