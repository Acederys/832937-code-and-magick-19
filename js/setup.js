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

var randomArrow = [
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

var similarWizardTemplate = document.querySelector('#similar-wizard-template');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = randomArrow.name;
  wizardElement.querySelector('.wizard-coat').style.fill = randomArrow.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = randomArrow.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < randomArrow.length; i++) {
  fragment.appendChild(renderWizard(randomArrow[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
