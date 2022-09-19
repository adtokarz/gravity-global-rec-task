const popupOpenBtn = document.querySelector('.container__article .button__open-popup ');
const popup = document.querySelector('.popup');
const popopCloseBtn = document.querySelector('.popup__button--close')
const clickCounter = document.querySelector('.click-counter');
const popupResetCounter = document.querySelector('.popup .button--reset');

let clickNumber = localStorage.counter;


const openPopup = () => {
    popup.style.display = "flex";
    clickNumber = localStorage.counter;
    clickNumber++;
    localStorage.setItem("counter", clickNumber);
    clickCounter.textContent = localStorage.counter;
    if(clickNumber >= 5){
        popupResetCounter.style.display = "block";
    }
}

const closePopup = () => {
   popup.style.display = "none"; 
}

const resetCounter = () => {
    localStorage.setItem("counter", 0);
    closePopup();
    popupResetCounter.style.display = "none";
}



popupOpenBtn.addEventListener('click', openPopup);
popopCloseBtn.addEventListener('click', closePopup);
popupResetCounter.addEventListener('click', resetCounter);
popup.addEventListener('click', closePopup);


