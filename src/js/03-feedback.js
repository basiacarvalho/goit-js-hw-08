const throttle = require('lodash.throttle');

const formUpdate = function (event) {
  const inputFormValues = {
    email: document.querySelector('.feedback-form input').value,
    message: document.querySelector('.feedback-form textarea').value,
  };
  const inputFormValuesJSON = JSON.stringify(inputFormValues);
  localStorage.setItem('feedback-form-state', inputFormValuesJSON);
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(formUpdate, 500));

const formInputJSON = localStorage.getItem('feedback-form-state');
const formInput = JSON.parse(formInputJSON);

if (formInput !== null) {
  document.querySelector('.feedback-form input').value = formInput.email;
  document.querySelector('.feedback-form textarea').value = formInput.message;
}

const onSubmit = function (event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  document.querySelector('.feedback-form input').value = '';
  document.querySelector('.feedback-form textarea').value = '';
  console.log(localStorage.getItem('feedback-form-state'));
};

form.addEventListener('submit', onSubmit);
