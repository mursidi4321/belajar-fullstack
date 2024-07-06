// const h1 = document.querySelector('h1');

// console.log(h1);

// h1.innerHTML = 'Kucing';

// const para = document.querySelectorAll('p')

// for( let p of para) {
// 	p.innerHTML = '<b>ini paragraf</b> \n ubah';
// }

// // mengambil dan mengubah attribute


// // melakukan styling dengan DOM
// h1.style.color = 'red';

// const links = document.querySelectorAll('a');

// for( let link of links) {
// 	// link.style.color = 'red';
// 	link.style.textDecorationColor = 'blue';
// 	link.style.textDecorationStyle = 'wavy'
// }

// const banner = document.querySelector('#banner');
// banner.setAttribute('alt', 'Kucing');
// banner.setAttribute('src', 'http://kucing');

// // MEMANFAAT CLASSLIST
// const h1 = document.querySelector('h1'); // select element h1

// h1.setAttribute('class', 'bg-info'); // menambah attribue class bg-info
// h1.setAttribute('class', 'border-danger') // menumpuki/replace class dengan border-danger

// h1.classList.remove('border-danger')// menghapus isi class border-dangaer
// h1.classList.add('bg-info') // menambahi isi class bg-info
// h1.classList.add('border-danger') // menambahi isi class border-danger

// h1.classList.contains('bg-info') // cek apa h1 classnya punya bg-info
// if(h1.classList.contains('border-danger')){
// 	h1.classList.remove('bg-info');	
// } else {
// 	h1.classList.add('border-danger')
// }

// ELEMENT PARENT, CHILD, SIBLING
// const b = document.querySelector('b'); // seleksi elemen b - bold

// const parenElementB = b.parentElement // orangtua element b yaitgu p
// console.log(parenElementB); 
// const mbaheElementB = b.parentElement.parentElement // mbahe element b adalah body
// console.log(mbaheElementB);

// const toc = document.querySelector('#toc'); // select dengan div dengan id toc
// console.log(toc);

// const content = document.querySelector('#mw-toc-heading')
// console.log(content);
// content.innerHTML = 'KONTENT';
// const bapakeContent = content.parentElement;
// console.log(bapakeContent);

// const anakContent = content.children;
// console.log(anakContent);


// const paragraf = document.querySelector('p').children;
// console.log(paragraf[6]);

// // NEXTSIBLING DAN NEXT  ELEMENT SIBLING
// // PREVIOUS SIBLING DAN PREVIOUS ELEMENT SIBLING
// const square = document.querySelector('.square'); // select image clas square
// console.log(square);

// const preElement = square.previousElementSibling; // element sebelumnya yaitu p -paragraf
// console.log(preElement);

// const squareImg = square.getAttribute('src');
// console.log(squareImg);

//APPEND - APPENDCHILD
// const img = document.querySelector('img'); // select img
// const src = img.getAttribute('src'); // ambil srcnya

// const newImage = document.createElement('img') // buat element baru img
// const body = document.body; // select element parent
// newImage.classList.add('square'); // tambah class di img baru
// newImage.setAttribute('src', src) // tambah atribut src
// body.append(newImage); // tambahkan di element parent

// // BEDANGYA APPEND DAN APPENCHILD
// // KALAU APPEND YANG DITAMBAHKAN DOC HTML
// const paragraf = document.querySelector('p');
// paragraf.append(' </b> Ini Bold </b>');

// const h1 = document.querySelector('h1');

// const h2 = document.createElement('h2');
// h2.innerHTML = 'Buaya';
// h2.style.color ='red';
// h1.appendChild(h2);

// const h2 = document.createElement('h2');
// h2.innerHTML = 'This is about cats';

// const h1 = document.querySelector('h1');
// h1.insertAdjacentElement('afterend', h2)
// h

// // MEMAHAMI REMOVE DAN REMOVECHILD
// const firstLi = document.querySelector('li'); // select li ke1

// const parentLi = firstLi.parentElement; // mencari parentnya li
// parentLi.removeChild(firstLi); // menghapus li ke 1 // untuk browser versi lama

// const img = document.querySelector('img'); // salect img
// img.remove(); // menghilangkan img
























