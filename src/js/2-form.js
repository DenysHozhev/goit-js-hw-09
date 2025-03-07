const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
form.addEventListener('input', fullForm);
form.addEventListener('submit', clickSubmit);

function fullForm(event) {
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  formData.email = email;
  formData.message = message;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function clickSubmit(event) {
  event.preventDefault();
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();
  if (email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }
  console.log({ email, message });
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
