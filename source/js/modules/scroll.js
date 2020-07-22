'use strict';

 (function () {
  const element = document.querySelector('.base__btn');
  const form = document.querySelector('.form');

  function handleButtonClick() {
    form.scrollIntoView({block: "center", behavior: "smooth"});
  }

  element.addEventListener('click', handleButtonClick);
})();