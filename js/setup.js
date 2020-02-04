'use strict';

document.querySelector('.setup').classList.remove('hidden');
// находим скрытое окно и убираем .hidden 

var similarListElement = document.querySelector('.setup-similar-list');
// создали переменную и положили в нее родительскую папку для будущих ячеек

var NAMES = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

// создали массив с именами

var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

// создали массив с фамилиями

var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

// создали массив с цветами одежды

var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

// создали массив с цветом глаз

var getRandomElement = function(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var newArray = [];
var CONST_NUMBER= 4;

for (var i = 0; i< CONST_NUMBER; i++) {
  newArray[i] = {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
    coatColor: getRandomElement(COAT_COLOR),
    eyesColor: getRandomElement(EYES_COLOR),
  }
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;


  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < newArray.length; i++) {
  fragment.appendChild(renderWizard(newArray[i]));
}

similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');

