// //Document Object Model
// //Manipulation
// //Mengembalikan elemen pada sebuah id yang dituju
// const beriSaran = document.getElementById('beriSaran')
// //mengubah warnanya
// beriSaran.style.color = 'lightblue';
// //mengubah isi nya
// beriSaran.innerHTML = 'Beri Saran Anda !';

// //mengembalikan banyak elemen pada sebuah tag yang dituju
// const headgraf2 = document.getElementsByTagName('h2')[0];
// //menambahkan sebuah atribut pada sebuah elemen 
// headgraf2.setAttribute('name','selamatDatang');
// //membuat elemen
// const pe = document.createElement('p');
// const pTitik = document.createTextNode('');
// //menyimpan ke paragraf
// pe.appendChild(pTitik);
// //menyimpan elemen ke class id tech
// const sectiontech = document.getElementById('tech');
// sectiontech.appendChild(pTitik);

// //Events
// const form = document.getElementById('form');

// form.addEventListener('focusin', (event) => {
//   event.target.style.background = '#990033';
// });

// form.addEventListener('focusout', (event) => {
//   event.target.style.background = '';
// });

