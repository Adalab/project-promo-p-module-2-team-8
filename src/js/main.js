'use strict';

const form = document.querySelector('.js-form');
const titleFill = document.querySelector('.js-titleFill');
const titleShare = document.querySelector('.js-titleShare');
const titleCard = document.querySelector('.js-titleCard');
const secondFieldset = document.querySelector('.js-secondFieldset');
const thirdFieldset = document.querySelector('.js-thirdFieldset');
const fourFieldset = document.querySelector('.js-fourFieldset');
const angle = document.querySelector('.js-angle');
const angleShare = document.querySelector('.js-angleShare');

titleFill.addEventListener('click',() => {
 secondFieldset.classList.toggle('collapsed');
 angle.classList.toggle('rotate');
});

titleShare.addEventListener('click',() => {
thirdFieldset.classList.toggle('collapsed');
angleShare.classList.toggle('rotate');
});

titleCard.addEventListener('click',() => {
fourFieldset.classList.toggle('collapsed');
});
