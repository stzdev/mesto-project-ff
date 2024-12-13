import './styles/index.css';
import { initialCards } from './scripts/card';
import { createCard, deleteCard, toggleLike } from './scripts/card';
import { openPopup, closePopup, closeModalEsc } from './scripts/modal';

function handlerOpenImage (e) {
  const popup = document.querySelector('.popup_type_image');
  const popupImage = popup.querySelector('.popup__image');
  const popupText = popup.querySelector('.popup__caption');
  const cardElement = e.target.closest('.card');
  popupText.textContent = cardElement.querySelector('.card__title').textContent
  popupImage.src = e.target.src
  popupImage.alt = cardElement.querySelector('.card__title').textContent
  openPopup(popup);
}

const placesList = document.querySelector('.places__list');
initialCards.forEach(item => {
  placesList.append(createCard(item, deleteCard, toggleLike, handlerOpenImage)); 
});

// Поиск кнопок и попапов
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_type_edit');
const closeEditButton = editPopup.querySelector('.popup__close');
const formElement = editPopup.querySelector('.popup__form');
const nameInput = editPopup.querySelector('.popup__input_type_name');
const jobInput = editPopup.querySelector('.popup__input_type_description');
const placePopup = document.querySelector('.popup_type_new-card');
const newPlaceForm = placePopup.querySelector('.popup__form');
const placeNameInput= placePopup.querySelector('.popup__input_type_card-name');
const placeUrlInput = placePopup.querySelector('.popup__input_type_url');
const imagePopup = document.querySelector('.popup_type_image');
const closeImageButton = imagePopup.querySelector('.popup__close');

function handlerAddNewCard(evt) {
  evt.preventDefault(); 
  const card = {
    name: placeNameInput.value,
    link: placeUrlInput.value
  };
  const cardElement = createCard(card, deleteCard, toggleLike, handlerOpenImage);
  placesList.prepend(cardElement);
  placePopup.classList.remove('popup_is-opened'); 
};

function handlerEditSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value; // Получаем значение имени
  const jobValue = jobInput.value; // Получаем значение описания
  document.querySelector('.profile__title').textContent = nameValue; // Устанавливаем новое имя
  document.querySelector('.profile__description').textContent = jobValue; // Устанавливаем новое описание
  closePopup(editPopup);
}

function handlerEditPopup() {
  nameInput.value = document.querySelector('.profile__title').textContent;
  jobInput.value = document.querySelector('.profile__description').textContent;
  openPopup(editPopup);
}

function handlerAddPopup() {
  placeNameInput.value = ''; // Сбросить значение поля названия
  placeUrlInput.value = ''; // Сбросить значение поля URL
  openPopup(placePopup);
}

// Добавление обработчиков событий
editButton.addEventListener('click', () => handlerEditPopup());
addButton.addEventListener('click', () => handlerAddPopup());
newPlaceForm.addEventListener('submit', (evt) => handlerAddNewCard(evt));
formElement.addEventListener('submit', handlerEditSubmit);
closeEditButton.addEventListener('click', () => closePopup(editPopup));
closeImageButton.addEventListener('click', () => closePopup(imagePopup));
document.addEventListener('keydown', closeModalEsc);
