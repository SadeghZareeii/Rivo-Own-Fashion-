const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menu = document.querySelector(".nav__right");
const navLogoSvg = document.querySelector(".nav__logo-svg");


const boxShapNav = document.querySelector(".box-shap__nav");
const boxShapNavPrice = document.querySelector(".box-shap__nav--price");
const logoBox = document.querySelector(".nav__logo-svg--box");
const proposalItemTitle = document.querySelectorAll(".proposal__item--title");
const productsItemTitle = document.querySelectorAll(".products__item--title");
const proposalPrice = document.querySelectorAll(".proposal__Price");

let isAdded = false; 


const checkVisibility = () => {
  if (!isAdded) {
    isAdded = true; 

    proposalItemTitle.forEach(function (item) {
      const clone = item.cloneNode(true);
      boxShapNav.insertAdjacentElement("beforeend", clone);
    });
    productsItemTitle.forEach(function (item) {
      const clone = item.cloneNode(true);
      boxShapNav.insertAdjacentElement("beforeend", clone);
    });
    proposalPrice.forEach(function (item) {
      const clone = item.cloneNode(true);
      boxShapNavPrice.insertAdjacentElement("beforeend", clone);
    });
  }
};

setInterval(checkVisibility, 500);

const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const Second = document.querySelector(".second");

// Event Listeners
navToggleIcon.addEventListener("click", function () {
  this.classList.toggle("nav__toggle-icon--open");
  menu.classList.toggle("menu--open");
});

function nextImage() {
  const myTime = new Date();

  let getHours = myTime.getHours();
  let getMinutes = myTime.getMinutes();
  let getSeconds = myTime.getSeconds();

  if (getHours < 10) {
    getHours = "0" + getHours;
  } else if (getMinutes < 10) {
    getMinutes = "0" + getMinutes;
  } else if (getSeconds < 10) {
    getSeconds = "0" + getSeconds;
  }

  hour.innerHTML = getHours;
  minutes.innerHTML = getMinutes;
  Second.innerHTML = getSeconds;
}
setInterval(nextImage, 1000);

