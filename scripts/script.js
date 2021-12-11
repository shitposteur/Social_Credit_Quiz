const correct = document.querySelectorAll('.vrai');
const wrong = document.querySelectorAll('.faux');
const halfCorrect = document.querySelectorAll('.moyen-v');
const halfWrong = document.querySelectorAll('.moyen-f');
const superWrong = document.querySelectorAll('.s-faux');
const superCorrect = document.querySelectorAll('.s-vrai');
const score = document.querySelector('#score');
const resultDisplay = document.querySelector('.result');
const resultImg = document.querySelector('.result-image');
const poohImg = document.querySelector('#pooh');
const poohSelect = document.querySelector('.pooh-radio-select');

let scoreCount = 0;
const totQuestions = 8;
let answered = 0;

let tmpClass;
let x;
let imgPath = "assets/img/rewards/"


poohSelect.addEventListener('click', () => {
  poohImg.style.visibility = 'hidden';
})

function updateContents() {
  score.innerHTML = scoreCount;
  answered += 1;
  if (answered == totQuestions) {
    localStorage.setItem('finalScore', scoreCount);
    setTimeout (() => {
      window.location.href = "pages/call.html";
    },2400);
  }
  x = document.getElementsByClassName(tmpClass);
  for (let j=0; j<x.length; j++) {
    x[j].classList.add('hide');
  } 
  resultDisplay.style.display = 'flex';
  setTimeout (() => {
    resultDisplay.style.display = 'none';
  }, 1600);
}

for (let i=0; i<correct.length; i++) {
  correct[i].addEventListener('click', () => {
      //answered += 1;
      //if (answered === totQuestions) {
      //  alert(answered);
      //}
      scoreCount += 50;
      //score.innerHTML = scoreCount;
      tmpClass = correct[i].classList[0];
      //x = document.getElementsByClassName(tmpClass);
      //for (let j=0; j<x.length; j++) {
      //  x[j].classList.add('hide');
      //}
      correct[i].nextElementSibling.style.color = 'green';
      //resultDisplay.style.display = 'flex';
      //setTimeout (() => {
      //  resultDisplay.style.display = 'none';
      //}, 1800);
      resultImg.src = imgPath + "minAdd.png";
      resultImg.alt = "+50 Social Credit";
      updateContents();
    }
  );
}

for (let i=0; i<wrong.length; i++) {
  wrong[i].addEventListener('click', () => {
      scoreCount -= 60;
      
      tmpClass = wrong[i].classList[0];
      wrong[i].nextElementSibling.style.color = 'red';
      
      resultImg.src = imgPath + "minDeduct.png";
      resultImg.alt = "-60 Social Credit";
      updateContents();
    }
  );
}

for (let i=0; i<halfCorrect.length; i++) {
  halfCorrect[i].addEventListener('click', () => {
      scoreCount += 20;

      tmpClass = halfCorrect[i].classList[0];
      halfCorrect[i].nextElementSibling.style.color = 'green';

      resultImg.src = imgPath + "midAdd.png";
      resultImg.alt = "+20 Social Credit";
      updateContents();
    }
  );
}

for (let i=0; i<halfWrong.length; i++) {
  halfWrong[i].addEventListener('click', () => {
      scoreCount -= 30;

      tmpClass = halfWrong[i].classList[0];
      halfWrong[i].nextElementSibling.style.color = 'red';

      resultImg.src = imgPath + "midDeduct.png";
      resultImg.alt = "-30 Social Credit";
      updateContents();
    }
  );
}

for (let i=0; i<superCorrect.length; i++) {
  superCorrect[i].addEventListener('click', () => {
      scoreCount += 100;

      tmpClass = superCorrect[i].classList[0];
      superCorrect[i].nextElementSibling.style.color = 'green';

      resultImg.src = imgPath + "maxAdd2.png";
      resultImg.alt = "+100 Social Credit";
      updateContents();
    }
  );
}

for (let i=0; i<superWrong.length; i++) {
  superWrong[i].addEventListener('click', () => {
      scoreCount -= 200;

      tmpClass = superWrong[i].classList[0];
      superWrong[i].nextElementSibling.style.color = 'red';

      resultImg.src = imgPath + "maxDeduct.png";
      resultImg.alt = "-200 Social Credit";
      updateContents();
    }
  );
}

