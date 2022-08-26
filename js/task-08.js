const form = document.querySelector('.login-form');
// console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  
  const formElement = e.currentTarget.elements;    
  const mail = formElement.email.value;
  const password = formElement.password.value;
  
  if (!formElement.email.value || !formElement.password.value) {
    alert("All inputs must be completed")
    return
    }

  const formData = {
    mail,
    password
  }

  console.log(formData);
  form.reset();
}