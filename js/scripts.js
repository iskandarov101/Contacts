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

function NameInput() {
  elNameOutput.classList.add('px-3', 'py-4', 'rounded')
  let contactOutput = document.createElement('p');
  contactOutput.classList.add('h5', 'text-secondary');
  contactOutput.textContent = elInput.value;

  elNameOutput.appendChild(contactOutput);
  elInput = '';
}

function relationshipInput(){
  
  elRelationshipOutput.classList.add('h5', 'text-secondary');

  // let qarindosh = elRelationship.value;

  let relationshipOutput = docement.querySelector('p');
  relationshipOutput.classList.add('h5', 'text-secondary');
  relationshipOutput.textContent = elRelationship.value;

  elRelationshipOutput.appendChild(relationshipOutput);
  elRelationship.value = '';
}

function phoneInput() {
  let phoneNumber = elPhone.value;

  let phoneLink = document.createElement('a');
  phoneLink.classList.add('border-bottom', 'border-warning', 'text-info', 'h4');
  phoneLink.href = `tel: ${phoneNumber}`;
  phoneLink.textContent = phoneNumber;

  elPhoneOutput.appendChild(phoneLink);
  elPhone.value = '';
}


elForm.addEventListener('submit', function(evt){
  evt.preventDefault();

  NameInput();
  relationshipInput();
  phoneInput();
 
});








