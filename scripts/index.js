const cardTemplate = document.querySelector('#card-template').content;

function createCard(item, deleteFunction) {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
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
