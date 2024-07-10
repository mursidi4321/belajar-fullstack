class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    makan () {
        return `Hai ${name}, umur: ${age},  Selamat makan`
    }

}

class Mahasiswa extends Person {
    nim(no = null){
        const {name} = this;
        return `nama: ${name} no induk mahasiswa: ${no}`;
    }
}


const person1 = new Person('Mashudi', 12);
console.log(person1);

const mahasiswa1 = new Mahasiswa('mursidi', 34);
console.log(mahasiswa1.nim(234245));
