"use strict";

const form = document.querySelector(".js-form");
const titleFill = document.querySelector(".js-titleFill");
const titleShare = document.querySelector(".js-titleShare");
const titleCard = document.querySelector(".js-titleCard");
const titleDesign1 = document.querySelector(".js-titleDesign1");
const firstFieldset = document.querySelector(".js-firstFieldset");
const secondFieldset = document.querySelector(".js-secondFieldset");
const thirdFieldset = document.querySelector(".js-thirdFieldset");
const fourFieldset = document.querySelector(".js-fourFieldset");
const angle = document.querySelector(".js-angle");
const angleShare = document.querySelector(".js-angleShare");
const angleDesign = document.querySelector(".js-angleDesign");
const cardPersonalInfo = document.querySelector(".js-personalName");
const borde = document.querySelector(".js-borde");
const icon1 = document.querySelector('.js-icon1');
const icon2 = document.querySelector('.js-icon2');
const icon3 = document.querySelector('.js-icon3');
const icon4 = document.querySelector('.js-icon4');
//radio
const inputRadio1 = document.querySelector(".js-input1");
const inputRadio2 = document.querySelector(".js-input2");
const inputRadio3 = document.querySelector(".js-input3");

titleDesign1.addEventListener("click", () => {
  console.log("hola");
  firstFieldset.classList.toggle("collapsed");
  angleDesign.classList.toggle("rotate");
});

titleFill.addEventListener("click", () => {
  secondFieldset.classList.toggle("collapsed");
  angle.classList.toggle("rotate");
});

titleShare.addEventListener("click", () => {
  thirdFieldset.classList.toggle("collapsed");
  angleShare.classList.toggle("rotate");
});

titleCard.addEventListener("click", () => {
  fourFieldset.classList.toggle("collapsed");
});

inputRadio1.addEventListener("click", () => {
  cardPersonalInfo.classList.add("js-darkGreenBlue");
  cardPersonalInfo.classList.remove("js-driedBlood");
  cardPersonalInfo.classList.remove("js-slate");
  borde.classList.add("js-fadedOrange");
  icon1.classList.add("js-darkGreenBlue");
  icon1.classList.remove('js-driedBlood');
  icon1.classList.remove('js-slate');
  icon2.classList.add("js-darkGreenBlue");
  icon2.classList.remove('js-driedBlood');
  icon2.classList.remove('js-slate');
  icon3.classList.add("js-darkGreenBlue");
  icon3.classList.remove('js-driedBlood');
  icon3.classList.remove('js-slate');
  icon4.classList.add("js-darkGreenBlue");
  icon4.classList.remove('js-driedBlood');
  icon4.classList.remove('js-slate');
});

inputRadio2.addEventListener("click", () => {
  cardPersonalInfo.classList.add("js-driedBlood");
  cardPersonalInfo.classList.remove("js-darkGreenBlue");
  cardPersonalInfo.classList.remove("js-slate");
  borde.classList.add("js-fadedOrange");
  icon1.classList.add("js-driedBlood");
  icon1.classList.remove('js-darkGreenBlue');
  icon1.classList.remove('js-slate');
  icon2.classList.add("js-driedBlood");
  icon2.classList.remove('js-darkGreenBlue');
  icon2.classList.remove('js-slate');
  icon3.classList.add("js-driedBlood");
  icon3.classList.remove('js-darkGreenBlue');
  icon3.classList.remove('js-slate');
  icon4.classList.add("js-driedBlood");
  icon4.classList.remove('js-darkGreenBlue');
  icon4.classList.remove('js-slate');
});

inputRadio3.addEventListener("click", () => {
  cardPersonalInfo.classList.add("js-slate");
  cardPersonalInfo.classList.remove("js-darkGreenBlue");
  cardPersonalInfo.classList.remove("js-driedBlood");
  borde.classList.add("js-fadedOrange");
  icon1.classList.add("js-slate");
  icon1.classList.remove('js-driedBlood');
  icon1.classList.remove('js-darkGreenBlue');
  icon2.classList.add("js-slate");
  icon2.classList.remove('js-driedBlood');
  icon2.classList.remove('js-darkGreenBlue');
  icon3.classList.add("js-slate");
  icon3.classList.remove('js-driedBlood');
  icon3.classList.remove('js-darkGreenBlue');
  icon4.classList.add("js-slate");
  icon4.classList.remove('js-driedBlood');
  icon4.classList.remove('js-darkGreenBlue');
});
