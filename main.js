const email = document.getElementById('email');
const requiredError = document.getElementById('required-error');
const emailError = document.getElementById('email-error');
const validSubmission = document.getElementById('valid-submission');

function validateEmail(val) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(val);
}

function hideAllErrors() {
    requiredError.style.display = 'none';
    emailError.style.display = 'none';
    validSubmission.style.display = 'none';
}

function validate() {
    hideAllErrors();
    if (!email.value) {
        requiredError.style.display = 'block';
        email.style.marginBottom = '0px';
    } else if (!validateEmail(email.value)) {
        emailError.style.display = 'block';
        email.style.marginBottom = '0px';
    } else {
        validSubmission.style.display = 'block';
        email.style.marginBottom = '8px';
    }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  validate();  
});