const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();  
  
  const mail = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  
  if (!mail || !password) {
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