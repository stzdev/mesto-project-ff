
export function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  popup.addEventListener('click', closeModalOverlay)
}

export function closePopup(popup) {
  popup.removeEventListener('click', closeModalOverlay)
  popup.classList.remove('popup_is-opened');
}

export function closeModalEsc(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
        closePopup(openedPopup);
    }
}
}

function closeModalOverlay(evt) {
  evt.stopPropagation();

  const openedPopup = document.querySelector('.popup_is-opened');
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
}
}
