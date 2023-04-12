import _throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const getIputData = localStorage.getItem('feedback-form-state');
const parceInputData = JSON.parse(getIputData);

form.addEventListener('input', _throttle(onFormInput, 500));
form.addEventListener('submit', onButtonClick);



form.email.value = parceInputData.email;
form.message.value = parceInputData.message;




function onFormInput(event) {
  const inputData = {
    email: form.email.value,
    message: form.message.value,
  };
 localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
  
  
};


function onButtonClick(event) {
  event.preventDefault();
  console.log(`email: ${parceInputData.email}`);
  console.log(`message: ${parceInputData.message}`);
  localStorage.clear;
  form.email.value = "";
  form.message.value = "";

 
};
