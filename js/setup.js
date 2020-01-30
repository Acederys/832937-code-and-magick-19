'use strict';

document.querySelector('.setup').classList.remove('hidden');

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

var coatColor = [
  'rgb (101, 137, 164)',
  'rgb (241, 43, 107)',
  'rgb (146, 100, 161)',
  'rgb (56, 159, 117)',
  'rgb (215, 210, 55)',
  'rgb (0, 0, 0)',
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var getRandomElement = function(array) {
  for (var i = 0; i < 9; i++) {
    var a = Math.floor(Math.random() * array.length);
  }
};

var randomArray = [
{
    name: getRandomElement(NAMES) + '' + getRandomElement(SURNAMES)
  },
  {
    color: getRandomElement(coatColor)
  },
  {
    eyas: getRandomElement(eyesColor)
  }
];

var newArray = [];

for (var i = 0; i < 4; i++) {
newArray[i] = {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
    coatColor: getRandomElement(coatColor),
    eyeColor: getRandomElement(eyesColor)
  }
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = randomArray.name;
  wizardElement.querySelector('.wizard-coat').style.fill = randomArray.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = randomArray.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < randomArray.length; i++) {
  fragment.appendChild(renderWizard(randomArray[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
