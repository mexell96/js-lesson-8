// #1
const header = document.getElementById('header');
header.addEventListener('click', function (ev) {
   if (ev.target.nodeName === "LI") {
   ev.target.classList.add('beader');
   }
});

const pop = document.getElementsByTagName('li');

const veader = document.getElementById('veader');
veader.addEventListener('click', function (header) {
   if (header.target.nodeName !== "LI") {
      for (let i = 0; i < pop.length; i++) {
         pop[i].classList.remove('beader');
      }
   }
});


// #2
const lishki = document.getElementById('classs1');
lishki.addEventListener('click', function (ev) {
   if (ev.target.nodeName === 'LI') {
   ev.target.classList.add('beader');
   }
});

const pop2 = document.getElementsByTagName('li');

const veader2 = document.getElementById('veader');
veader2.addEventListener('click', function (header) {
   if (header.target.nodeName !== "LI") {
      for (let i = 0; i < pop2.length; i++) {
         pop2[i].classList.remove('beader');
      }
   }
});

lishki.addEventListener('click', function (ev) {
   if (ev.target.nodeName === 'LI') {
      let wer = ev.target; 
      let fyt = wer.firstChild;
      let rev = fyt.textContent;
      alert(rev);
   }
});
