const cardTemplate = document.querySelector('#card-template').content.cloneNode(true);

function createCard(item, deleteFunction) {

  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.card__image').src = item.link;
  newCard.querySelector('.card__image').alt = item.name;
  newCard.querySelector('.card__title').textContent = item.name;

  newCard.querySelector('.card__delete-button').addEventListener('click', deleteFunction);

  return newCard;
}

function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

const placesList = document.querySelector('.places__list');
initialCards.forEach(item => {
  placesList.append(createCard(item, deleteCard));
});
