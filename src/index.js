import './styles/index.css';
import { initialCards } from './scripts/cards';
import { createCard, deleteCard, toggleLike } from './scripts/card';
import { openPopup, closePopup, closeModalEsc } from './scripts/modal';

function handlerOpenImage (item) {
  popupText.textContent = item.name
  popupImage.src = item.link
  popupImage.alt = item.name
  openPopup(popup);
}

const placesList = document.querySelector('.places__list');
initialCards.forEach(item => {
  placesList.append(createCard(item, deleteCard, toggleLike, handlerOpenImage)); 
});

// Поиск кнопок и попапов
const popup = document.querySelector('.popup_type_image');
const popupImage = popup.querySelector('.popup__image');
const popupText = popup.querySelector('.popup__caption');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_type_edit');
const closeEditButton = editPopup.querySelector('.popup__close');
const editProfileForm = editPopup.querySelector('.popup__form');
const nameInput = editPopup.querySelector('.popup__input_type_name');
const jobInput = editPopup.querySelector('.popup__input_type_description');
const placePopup = document.querySelector('.popup_type_new-card');
const newPlaceForm = placePopup.querySelector('.popup__form');
const placeNameInput= placePopup.querySelector('.popup__input_type_card-name');
const placeUrlInput = placePopup.querySelector('.popup__input_type_url');
const closeNewCardButton = placePopup.querySelector('.popup__close');
const imagePopup = document.querySelector('.popup_type_image');
const closeImageButton = imagePopup.querySelector('.popup__close');
const profileTittle = document.querySelector('.profile__title'); 
const profileDescription = document.querySelector('.profile__description');

function handlerAddNewCard(evt) {
  evt.preventDefault(); 
  const card = {
    name: placeNameInput.value,
    link: placeUrlInput.value
  };
  const cardElement = createCard(card, deleteCard, toggleLike, handlerOpenImage);
  placesList.prepend(cardElement);
  closePopup(placePopup);
};

function handlerEditSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value; 
  const jobValue = jobInput.value; 
  profileTittle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  closePopup(editPopup);
}

function handlerEditPopup() {
  nameInput.value = document.querySelector('.profile__title').textContent;
  jobInput.value = document.querySelector('.profile__description').textContent;
  openPopup(editPopup);
}

function handlerAddPopup() {
  newPlaceForm.reset();
  openPopup(placePopup);
}

// Добавление обработчиков событий
editButton.addEventListener('click', () => handlerEditPopup());
addButton.addEventListener('click', () => handlerAddPopup());
newPlaceForm.addEventListener('submit', (evt) => handlerAddNewCard(evt));
editProfileForm.addEventListener('submit', handlerEditSubmit);
closeEditButton.addEventListener('click', () => closePopup(editPopup));
closeNewCardButton.addEventListener('click', () => closePopup(placePopup));
closeImageButton.addEventListener('click', () => closePopup(imagePopup));

