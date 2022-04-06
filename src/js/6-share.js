'use strict';
function handleClickCreateCard{
    event.preventDefault();

  fetch(
    'https://awesome-profile-cards.herokuapp.com/card',
    {
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }
    )
  .then(response => response.json())
  .then(serverResp => {
    console.log(serverResp);

    if(serverResp.success === false) {
        shareTwitter.innerHTML = 'Debes rellenar todos los datos para crear la tarjeta';
    }
    else {
        shareTwitter.href = 'serverResp';
    }

  });

}

createCard.addEventListener('click',handleClickCreateCard);
};



