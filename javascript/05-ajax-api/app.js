// // MENGUBAH DATA OBJEK MENJADI DATA JSON
// const data = {
//     nama: 'yusuf',
//     email: 'yusuf@mail.com'
// }

// const req = JSON.stringify(data);
// console.log(req);

// const person = req;
// console.log(person);

// // mengubah data json ke object
// const res = JSON.parse(person);
// console.log(res);

// // REQUEST MENGGUNAKAN XHTMLRequest
// const req = new XMLHttpRequest();

// let data ;
// req.onload = function(){
//     data = JSON.parse(this.responseText);
//     console.log(data.name)
// }

// req.onerror = function(){
//     console.log('error',this);
// };

// req.open('GET', 'http://swapi.dev/api/people/1', true);
// req.setRequestHeader('accept', 'application/json');

// req.send();


// REQUEST MENGGUNAKAN  FETCH
// fetch('http://swapi.dev/api/people/1')
//     .then((res) => {
//         if(!res.ok){
//             throw Error('Could not fetch the data for resource')
//         }
//         return res.json();
//     })
//     .then((data) => {
//         console.log('json', data);
//     })
//     .catch((err) => {
//         console.log('Error', err);
//     })

// // REQUEST MENGGUNAKAN ASYNCH -AWAIT
// const loadPerson = async () => {
//     const res = await fetch('http://swapi.dev/api/people/1');
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch('http://swapi.dev/api/people/2');
//     const data2 = await res2.json();
//     console.log(data2);
// }

// loadPerson();

// // UNTUK MENANGANI ERROR HANDLE
// const loadPeople = async () => {
//     try {
//         const res = await fetch('http://swapi.dev/api/people/10');
//         const data = await res.json();
//         console.log(data);
//         const res1 = await fetch('http://swapi.dev/api/people/5');
//         const data1 = await res1.json();
//         console.log(data1);
    
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }

// loadPeople();


// // REQUEST HTTP MELALUI AXIOS - LIBRARY PIHAK KE-3
// axios.get('http://swapi.dev/api/people/5').then((res) => {
//     console.log(res.data);
// }).catch((err) => {
//     console.log('error : ', err);
//     alert(err.message);
// });

// AXIOS REQUEST DENGAN ASYNCH -AWAIT
const getPeople = async (id) => {
    try {
        const res = await axios.get(`http://swapi.dev/api/people/${id}`);
        console.log(res.data);
    } catch (error) {
        console.log('Error: ', error);
        console.log(error.response.status);
        console.log(error.response.data);
    }
}

getPeople(12);