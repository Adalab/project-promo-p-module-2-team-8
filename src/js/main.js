'use strict';

const titleFill = document.querySelector('.js-titleFill');
const titleShare = document.querySelector('.js-titleShare');
const titleCard = document.querySelector('.js-titleCard');
const titleDesign1 = document.querySelector('.js-titleDesign1');
const firstFieldset = document.querySelector('.js-firstFieldset');
const secondFieldset = document.querySelector('.js-secondFieldset');
const thirdFieldset = document.querySelector('.js-thirdFieldset');
const fourFieldset = document.querySelector('.js-fourFieldset');
const angle = document.querySelector('.js-angle');
const angleShare = document.querySelector('.js-angleShare');
const angleDesign = document.querySelector('.js-angleDesign');
const cardPersonalInfo = document.querySelector('.js-personalName');
const borde = document.querySelector('.js-borde');
const icon1 = document.querySelector('.js-icon1');
const icon2 = document.querySelector('.js-icon2');
const icon3 = document.querySelector('.js-icon3');
const icon4 = document.querySelector('.js-icon4');
const border1 = document.querySelector('.js-border1');
const border2 = document.querySelector('.js-border2');
const border3 = document.querySelector('.js-border3');
const border4 = document.querySelector('.js-border4');
const addImageButton = document.querySelector('.js-secondFieldset__button');
const createCard = document.querySelector('.js-thirdFieldset__button');
const shareTwitter = document.querySelector('.js-fourFieldset__button');
const reset = document.querySelector('.js-reset');
const name = document.querySelector('.js-name');
const job = document.querySelector('.js-job');
const cardJob = document.querySelector('.js-cardJob');
const addEmail = document.querySelector('.js-addemail');
const iconEmail = document.querySelector('.js-iconEmail');
const addPhone = document.querySelector('.js-addPhone');
const iconPhone = document.querySelector('.js-iconPhone');
const iconLinkedin = document.querySelector('.js-iconLinkedin');
const addLinkedin = document.querySelector('.js-addLinkedin');
const iconGithub = document.querySelector('.js-iconGithub');
const addGithub = document.querySelector('.js-addGithub');
//radio
const inputRadio1 = document.querySelector('.js-input1');
const inputRadio2 = document.querySelector('.js-input2');
const inputRadio3 = document.querySelector('.js-input3');

titleDesign1.addEventListener('click', () => {
  console.log('hola');
  firstFieldset.classList.toggle('collapsed');
  angleDesign.classList.toggle('rotate');
});

titleFill.addEventListener('click', () => {
  secondFieldset.classList.toggle('collapsed');
  angle.classList.toggle('rotate');
});

titleShare.addEventListener('click', () => {
  thirdFieldset.classList.toggle('collapsed');
  angleShare.classList.toggle('rotate');
});

titleCard.addEventListener('click', () => {
  fourFieldset.classList.toggle('collapsed');
});

inputRadio1.addEventListener('click', () => {
  cardPersonalInfo.classList.add('js-darkGreenBlue');
  cardPersonalInfo.classList.remove('js-driedBlood');
  cardPersonalInfo.classList.remove('js-slate');
  borde.classList.add('js-colorDirtyBlue');
  borde.classList.remove('js-fadedOrange');
  borde.classList.remove('js-rustyRed');
  icon1.classList.add('js-darkGreenBlue');
  icon1.classList.remove('js-driedBlood');
  icon1.classList.remove('js-slate');
  icon2.classList.add('js-darkGreenBlue');
  icon2.classList.remove('js-driedBlood');
  icon2.classList.remove('js-slate');
  icon3.classList.add('js-darkGreenBlue');
  icon3.classList.remove('js-driedBlood');
  icon3.classList.remove('js-slate');
  icon4.classList.add('js-darkGreenBlue');
  icon4.classList.remove('js-driedBlood');
  icon4.classList.remove('js-slate');
  border1.classList.add('js-hospitalGreen');
  border1.classList.remove('js-tomato');
  border1.classList.remove('js-lightGreyBlue');
  border2.classList.add('js-hospitalGreen');
  border2.classList.remove('js-tomato');
  border2.classList.remove('js-lightGreyBlue');
  border3.classList.add('js-hospitalGreen');
  border3.classList.remove('js-tomato');
  border3.classList.remove('js-lightGreyBlue');
  border4.classList.add('js-hospitalGreen');
  border4.classList.remove('js-tomato');
  border4.classList.remove('js-lightGreyBlue');
});

inputRadio2.addEventListener('click', () => {
  cardPersonalInfo.classList.add('js-driedBlood');
  cardPersonalInfo.classList.remove('js-darkGreenBlue');
  cardPersonalInfo.classList.remove('js-slate');
  borde.classList.add('js-rustyRed');
  borde.classList.remove('js-fadedOrange');
  borde.classList.remove('js-colorDirtyBlue');
  icon1.classList.add('js-driedBlood');
  icon1.classList.remove('js-darkGreenBlue');
  icon1.classList.remove('js-slate');
  icon2.classList.add('js-driedBlood');
  icon2.classList.remove('js-darkGreenBlue');
  icon2.classList.remove('js-slate');
  icon3.classList.add('js-driedBlood');
  icon3.classList.remove('js-darkGreenBlue');
  icon3.classList.remove('js-slate');
  icon4.classList.add('js-driedBlood');
  icon4.classList.remove('js-darkGreenBlue');
  icon4.classList.remove('js-slate');
  border1.classList.add('js-tomato');
  border1.classList.remove('hospitalGreen');
  border1.classList.remove('js-lightGreyBlue');
  border2.classList.add('js-tomato');
  border2.classList.remove('hospitalGreen');
  border2.classList.remove('js-lightGreyBlue');
  border3.classList.add('js-tomato');
  border3.classList.remove('hospitalGreen');
  border3.classList.remove('js-lightGreyBlue');
  border4.classList.add('js-tomato');
  border4.classList.remove('hospitalGreen');
  border4.classList.remove('js-lightGreyBlue');
});

inputRadio3.addEventListener('click', () => {
  cardPersonalInfo.classList.add('js-slate');
  cardPersonalInfo.classList.remove('js-darkGreenBlue');
  cardPersonalInfo.classList.remove('js-driedBlood');
  borde.classList.add('js-fadedOrange');
  borde.classList.remove('js-rustyRed');
  borde.classList.remove('js-colorDirtyBlue');
  icon1.classList.add('js-slate');
  icon1.classList.remove('js-driedBlood');
  icon1.classList.remove('js-darkGreenBlue');
  icon2.classList.add('js-slate');
  icon2.classList.remove('js-driedBlood');
  icon2.classList.remove('js-darkGreenBlue');
  icon3.classList.add('js-slate');
  icon3.classList.remove('js-driedBlood');
  icon3.classList.remove('js-darkGreenBlue');
  icon4.classList.add('js-slate');
  icon4.classList.remove('js-driedBlood');
  icon4.classList.remove('js-darkGreenBlue');
  border1.classList.add('js-lightGreyBlue');
  border1.classList.remove('hospitalGreen');
  border1.classList.remove('js-tomato');
  border2.classList.add('js-lightGreyBlue');
  border2.classList.remove('hospitalGreen');
  border2.classList.remove('js-tomato');
  border3.classList.add('js-lightGreyBlue');
  border3.classList.remove('hospitalGreen');
  border3.classList.remove('js-tomato');
  border4.classList.add('js-lightGreyBlue');
  border4.classList.remove('hospitalGreen');
  border4.classList.remove('js-tomato');
});
function addImage (event){
  event.preventDefault();
}
addImageButton.addEventListener('click',addImage);
createCard.addEventListener('click',addImage);
shareTwitter.addEventListener('click',addImage);
function handleClickReset(){

 document.getElementById('myform').reset();
  changeName();
  resetCard();
}
reset.addEventListener('click', handleClickReset);
function resetCard(){
  cardPersonalInfo.innerHTML = 'Nombre y Apellidos';
  cardJob.innerHTML = 'Front-End developer';
  iconEmail.href = '';
  iconPhone.href = '';
  iconGithub.href ='';
  iconLinkedin.href = '';
}

function changeName () {
  cardPersonalInfo.innerHTML = name.value;
}
name.addEventListener('keyup',changeName);

function changeJob (){
  cardJob.innerHTML = job.value;
}
job.addEventListener('keyup',changeJob);
function changeEmail(){
  iconEmail.href = `mailto:${addEmail.value}`;
}
iconEmail.addEventListener('click',changeEmail);
function changeLinkedin(){
  iconLinkedin.href = addLinkedin.value;
}
iconLinkedin.addEventListener('click',changeLinkedin);

function changeGithub(){
  iconGithub.href = addGithub.value; 
}
iconGithub.addEventListener('click',changeGithub);
function changePhone(){
  iconPhone.href = `tel:${addPhone.value}`;
}
iconPhone.addEventListener('click',changePhone);