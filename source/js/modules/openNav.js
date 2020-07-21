'use strict'

  const element = document.querySelector('.base__btn');
  const div = document.querySelector('#ggg');

  function handleButtonClick() {
    div.scrollIntoView({block: "center", behavior: "smooth"});
 }

 element.addEventListener('click', handleButtonClick);
