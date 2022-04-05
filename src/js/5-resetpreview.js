'use strict';
const input = document.querySelectorAll('.js-input');



const reset = document.querySelector('.js-reset');
function handleClickReset() {
  document.getElementById('myform').reset();
  resetCard();
}

function resetCard() {
  handleClickRadioUnique(event);
  cardPersonalInfo.innerHTML = 'Nombre Apellidos';
  cardJob.innerHTML = 'Front-End developer';
  iconEmail.href = '';
  iconPhone.href = '';
  iconGithub.href = '';
  iconLinkedin.href = '';
  profileImage.style = '';
  profilePreview.style = '';
  dataObjets = {
    name: '',
    job: '',
    email: '',
    phone: '',
    photo: '',
    linkedin: '',
    github: '',
  };
  for (let index = 0; index < input.length; index++) {
    input[index].value = '';

  }
}


reset.addEventListener('click', handleClickReset);
