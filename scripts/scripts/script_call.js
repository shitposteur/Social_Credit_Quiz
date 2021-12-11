const nextButton = document.querySelector('#next');
const landingPage = document.querySelector('.landing-page');
const callContainer = document.querySelector('.call')
const ringtone = document.querySelector('#ringtone');
const result = document.querySelector('.result');
const buttonContainer = document.querySelector('.buttons');
const acceptButton = document.querySelector('.accept');
const rejectButton = document.querySelector('.reject');
const siren = document.querySelector('#siren');

const totScore = Number(localStorage.getItem('finalScore'));

nextButton.addEventListener('click', () => {
  landingPage.style.display = 'none';
  callContainer.style.display = 'flex';
  document.querySelector('title').innerHTML = 'Incoming Call';

  ringtone.play();

  setTimeout(() => {
    const callMiss = document.createElement('div');
    callMiss.innerHTML = 'Call Missed';
    callMiss.style.color = '#ddd';
    callMiss.style.fontSize = '1.6rem';
    callMiss.style.textAlign = 'center';
    callContainer.replaceChild(callMiss, buttonContainer);
    
    ringtone.pause();
    siren.play();
    setTimeout(() => {
      result.style.display = 'flex';

      setTimeout (() => {
        window.location.href="./../pages/fail.html";
      }, 3000);
    }, 3000);
  }, 30000);
});

acceptButton.addEventListener('click', () => {
  ringtone.pause();
  if (totScore > 100) {
    window.location.href = 'success.html';
  } else {
    window.location.href = 'second_chance.html';
  }
});

rejectButton.addEventListener('click', () => {
  ringtone.pause();
  siren.play();
  result.style.display = 'flex';
  setTimeout( () => {
    window.location.href = 'fail.html';
  },5000);
});
