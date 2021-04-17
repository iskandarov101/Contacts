var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

// var elIdish = $_('.idish');
// var elButton = $_('button', elIdish);

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};


let elForm = document.querySelector('.js-contact-form');
let elInput = document.querySelector('.js-contact-form__name-input');
let elRelationship = document.querySelector('.js-contact-form__relationship-input');
let elPhone = document.querySelector('.js-contact-form__phone-input');

//  OUTPUT
let elNameOutput = document.querySelector('.js-contact__name');
let elRelationshipOutput = document.querySelector('.js-contact__relationship');
let elPhoneOutput = document.querySelector('.js-contact__phone');





// elForm.addEventListener('submit', function(evt) {
//   evt.preventDefault();

//   let phoneNumber = elPhone.value;

//   let phoneLink = document.createElement('a');
//   phoneLink.classList.add('border-bottom', 'border-warning', 'text-info', 'h4');
//   phoneLink.href = `tel: ${phoneNumber}`;
//   phoneLink.textContent = phoneNumber;

//   elPhoneOutput.appendChild(phoneLink);
//   elPhone.value = '';
// });






