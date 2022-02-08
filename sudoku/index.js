let hard = document.querySelector('.hard');
let board = document.querySelector('.board');
let checkBox = document.querySelector('.easyHard');
let scoresEasy = document.querySelector('.desk');
let scoresHard = document.querySelector('.deskHard');
let div = document.querySelectorAll('.board>div');
let easyGrid = document.querySelector('.board');
let names = document.querySelector('.name');
let nameHard = document.querySelector('.nameHard');
let score = document.querySelector('.score');
let scoreHard = document.querySelector('.scoreHard');
if (checkBox.checked == true) {
  hard.style.display = 'none';
  scoresHard.style.display = 'none';
  board.style.display = 'grid';
  scoresEasy.style.display = 'flex';
}
checkBox.addEventListener('click', () => {
  if (checkBox.checked == true) {
    hard.style.display = 'none';
    scoresHard.style.display = 'none';
    board.style.display = 'grid';
    scoresEasy.style.display = 'flex';
  } else {
    hard.style.display = 'grid';
    scoresHard.style.display = 'flex';
    board.style.display = 'none';
    scoresEasy.style.display = 'none';
  }
});

for (let i = 0; i < 9; i++) {
  let div1 = document.createElement('div');
  div1.classList.add('grid');
  hard.appendChild(div1);
}
// creating 81 divs
let inner = document.querySelectorAll('.hard>div');
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let div2 = document.createElement('div');
    inner[j].appendChild(div2);
  }
}

for (let i = 0; i < 9; i++) {
  let div1 = document.createElement('div');
  easyGrid.insertAdjacentElement('afterbegin', div1);
}
for (let i = 0; i < div.length; i++) {
  div[i].classList.add(i + 1);
}

for (let i = 0; i < 5; i++) {
  let li1 = document.createElement('li');
  names.insertAdjacentElement('beforeend', li1);
  //   nameHard.insertAdjacentElement('beforeend', li1);
  //   score.insertAdjacentElement('beforeend', li1);
  //   scoreHard.insertAdjacentElement('beforeend', li1);
}
console.log(score);
