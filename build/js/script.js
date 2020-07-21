// Подключение js-файлов с помощью rigger-а
// Vendor
// Modules
'use strict';

var element = document.querySelector('.base__btn');
var div = document.querySelector('#ggg');

function handleButtonClick() {
  div.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

element.addEventListener('click', handleButtonClick);