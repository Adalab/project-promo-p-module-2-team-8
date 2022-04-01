"use strict";

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
const icon1 = document.querySelector(".js-icon1");
const icon2 = document.querySelector(".js-icon2");
const icon3 = document.querySelector(".js-icon3");
const icon4 = document.querySelector(".js-icon4");
const border1 = document.querySelector(".js-border1");
const border2 = document.querySelector(".js-border2");
const border3 = document.querySelector(".js-border3");
const border4 = document.querySelector(".js-border4");
const addImageButton = document.querySelector(".js-secondFieldset__button");
const createCard = document.querySelector(".js-thirdFieldset__button");
const shareTwitter = document.querySelector(".js-fourFieldset__button");
const reset = document.querySelector(".js-reset");
const name = document.querySelector(".js-name");
const job = document.querySelector(".js-job");
const cardJob = document.querySelector(".js-cardJob");
const addEmail = document.querySelector(".js-addemail");
const iconEmail = document.querySelector(".js-iconEmail");
const addPhone = document.querySelector(".js-addPhone");
const iconPhone = document.querySelector(".js-iconPhone");
const iconLinkedin = document.querySelector(".js-iconLinkedin");
const addLinkedin = document.querySelector(".js-addLinkedin");
const iconGithub = document.querySelector(".js-iconGithub");
const addGithub = document.querySelector(".js-addGithub");
//radio
const previewContainer = document.querySelector(".js-preview");

function handleClickRadioUnique(event) {
  const paletteClassToAdd = `palette-${event.currentTarget.value}`;

  previewContainer.classList.remove("palette-1");
  previewContainer.classList.remove("palette-2");
  previewContainer.classList.remove("palette-3");
  previewContainer.classList.remove("palette-4");
  previewContainer.classList.remove("palette-5");
  previewContainer.classList.remove("palette-6");
  previewContainer.classList.add(paletteClassToAdd);
}

const allRadioButtons = document.querySelectorAll(".js_radio");

for (const eachRadioButton of allRadioButtons) {
  eachRadioButton.addEventListener("click", handleClickRadioUnique);
}

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
//revisar esto, afecta a formulario
function addImage(event) {
  event.preventDefault();
}
addImageButton.addEventListener("click", addImage);
createCard.addEventListener("click", addImage);
shareTwitter.addEventListener("click", addImage);
function handleClickReset() {
  document.getElementById("myform").reset();
  /*changeName();*/
  resetCard();
}
reset.addEventListener("click", handleClickReset);
function resetCard() {
  cardPersonalInfo.innerHTML = "Nombre y Apellidos";
  cardJob.innerHTML = "Front-End developer";
  iconEmail.href = "";
  iconPhone.href = "";
  iconGithub.href = "";
  iconLinkedin.href = "";
}


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
  }

  else {
    ElementTyping.value = 'Nombre y Apellidos';
  }



  if (ElementTyping.id === 'marketStall') {
    dataObjets.job = ElementTyping.value;
  }

  if (ElementTyping.id === 'addemail') { data.email = ElementTyping.value; }

  if (ElementTyping.id === 'addphone') {
    dataObjets.phone = ElementTyping.value;
  }

  if (ElementTyping.id === 'addimage') {
    dataObjets.photo = ElementTyping.value;
  }

  if (ElementTyping.id === 'addLinkedin') {
    dataObjets.linkedin = ElementTyping.value;
  }

  if (ElementTyping.id === 'addGithub') {
    dataObjets.github = ElementTyping.value;
  }
  renderPreview();
}



const fillDiv = document.querySelector('.js-secondFieldset');
fillDiv.addEventListener('keyup', keyUpInputs)


function renderPreview() {
  cardPersonalInfo.innerHTML = dataObjets.name;
  cardJob.innerHTML = dataObjets.job;
  iconEmail.href = dataObjets.email;
  iconLinkedin.href = dataObjets.linkedin;
  iconGithub.href = dataObjets.github;
  iconPhone.href = dataObjets.phone;

}
/*function changeName() {
  cardPersonalInfo.innerHTML = name.value;
}
name.addEventListener("keyup", changeName);

function changeJob() {
  cardJob.innerHTML = job.value;
}
job.addEventListener("keyup", changeJob);
function changeEmail() {
  iconEmail.href = `mailto:${addEmail.value}`;
}
iconEmail.addEventListener("click", changeEmail);
function changeLinkedin() {
  iconLinkedin.href = addLinkedin.value;
}
iconLinkedin.addEventListener("click", changeLinkedin);

function changeGithub() {
  iconGithub.href = addGithub.value;
}
iconGithub.addEventListener("click", changeGithub);
function changePhone() {
  iconPhone.href = `tel:${addPhone.value}`;
}
iconPhone.addEventListener("click", changePhone);*/

// Change image functionality

const fr = new FileReader();
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener("change", getImage);
