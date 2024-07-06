// membuat object
const person = {
    name : "Mursidi",
    age: 45,
    email: 'mursidi@gamail.com',

}

console.log(person);

const sepatu = {
    merk: ['bata', 'adidas'],
    size: {
        medium: 'M',
        large: 'L'
    }
}


// cara memanggil data di object
console.log(sepatu.merk[1]); // ouput adidas
console.log(sepatu.size.medium) // output M


// Membuat dan menambah property dalam Object
person.age = 58;
person.email = 'ahmad@gmail.com';
console.log(person);

let name = 'name';
console.log(person.name = 'Muhammad mashudi');
console.log(person);

// tambah property
sepatu.harga = 'cash';
console.log(sepatu);


// memanggil data object pada array
const shoppingCart = [
    {
        product: 'CSS',
        price : 2.3,
        quatity : 3
    },
    {
        product: 'HTML',
        price : 4,
        quatity : 1
    },
];

console.log(shoppingCart);

console.log(shoppingCart[1]);
console.log(shoppingCart[1].price) // 4
console.log(shoppingCart[0].product)  // CSS