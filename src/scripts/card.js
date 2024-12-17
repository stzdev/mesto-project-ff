const cardTemplate = document.querySelector('#card-template').content;

export function createCard(item, deleteFunction, likeFunction, openImage) { 
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  const cardTittle = newCard.querySelector('.card__title');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTittle.textContent = item.name;
  newCard.querySelector('.card__delete-button').addEventListener('click', deleteFunction);
  newCard.querySelector('.card__like-button').addEventListener('click', likeFunction); 
  cardImage.addEventListener('click', () => {
    openImage(item)
  });
  return newCard;
};

export function deleteCard(evt) {
  evt.target.closest('.card').remove();
};

export function toggleLike(evt) {
const likeButton = evt.target;
likeButton.classList.toggle('card__like-button_is-active'); 
};