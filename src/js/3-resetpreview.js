'use strict';

const reset = document.querySelector('.js-reset');
function handleClickReset() {
  document.getElementById('myform').reset();
  resetCard();
}

function resetCard() {
  cardPersonalInfo.innerHTML = 'Nombre Apellidos';
  cardJob.innerHTML = 'Front-End developer';
  iconEmail.href = '';
  iconPhone.href = '';
  iconGithub.href = '';
  iconLinkedin.href = '';
}

reset.addEventListener('click', handleClickReset);
