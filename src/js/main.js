const popupOpenBtn = document.querySelector('.container__article .button--primary');
const popup = document.querySelector('.popup');
const popopCloseBtn = document.querySelector('.popup__button--close')

const openPopup = () => {
    popup.style.display = "flex";
}

const closePopup = () => {
   popup.style.display = "none"; 
}



popupOpenBtn.addEventListener('click', openPopup);
popopCloseBtn.addEventListener('click', closePopup);


