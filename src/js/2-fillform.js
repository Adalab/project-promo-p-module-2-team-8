'use strict';
const cardPersonalInfo = document.querySelector('.js-personalName');
const cardJob = document.querySelector('.js-cardJob');
const iconEmail = document.querySelector('.js-iconEmail');
const iconPhone = document.querySelector('.js-iconPhone');
const iconLinkedin = document.querySelector('.js-iconLinkedin');
const iconGithub = document.querySelector('.js-iconGithub');
const fillDiv = document.querySelector('.js-secondFieldset');
const dataObjets = {
  name: '',
  job: '',
  email: '',
  phone: '',
  photo: '',
  linkedin: '',
  github: '',
};

function keyUpInputs(event) {
  const ElementTyping = event.target;
  if (ElementTyping.id === 'completeName') {
    dataObjets.name = ElementTyping.value;
  } else if (ElementTyping.id === 'marketStall') {
    dataObjets.job = ElementTyping.value;
  } else if (ElementTyping.id === 'addemail') {
    dataObjets.email = ElementTyping.value;
  } else if (ElementTyping.id === 'addphone') {
    dataObjets.phone = ElementTyping.value;
  } else if (ElementTyping.id === 'addimage') {
    dataObjets.photo = ElementTyping.value;
  } else if (ElementTyping.id === 'addLinkedin') {
    dataObjets.linkedin = ElementTyping.value;
  } else if (ElementTyping.id === 'addGithub') {
    dataObjets.github = ElementTyping.value;
  }
  renderPreview();
}

function renderPreview() {
  if (dataObjets.name === '') {
    cardPersonalInfo.innerHTML = 'Nombre Apellido';
  } else {
    cardPersonalInfo.innerHTML = dataObjets.name;
  }
  if (dataObjets.job === '') {
    cardJob.innerHTML = 'Frontend developer';
  } else {
    cardJob.innerHTML = dataObjets.job;
  }

  iconEmail.href = `mailto: ${dataObjets.email}`;
  iconLinkedin.href = dataObjets.linkedin;
  iconGithub.href = dataObjets.github;
  iconPhone.href = `tel: ${dataObjets.phone}`;
}

fillDiv.addEventListener('keyup', keyUpInputs);
