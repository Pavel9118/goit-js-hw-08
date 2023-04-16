import _throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', _throttle(onFormInput, 500));
form.addEventListener('submit', onButtonClick);

const getIputData = localStorage.getItem('LOCALSTORAGE_KEY');
const parceInputData = JSON.parse(getIputData);


form.email.value = parceInputData.email;
form.message.value = parceInputData.message;




function onFormInput(event) {
    const inputData = {
    email: form.email.value,
    message: form.message.value, 
  }
  
 localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(inputData));
  
  
};


function onButtonClick(event) {
  event.preventDefault();
  console.log(parceInputData); 
  form.email.value = "";
  form.message.value = "";
  localStorage.removeItem('LOCALSTORAGE_KEY');


 
};

