const email = document.getElementById('email');
const formContainer = document.getElementById('form');
const requiredError = document.getElementById('required-error');
const emailError = document.getElementById('email-error');
const validSubmission = document.getElementById('valid-submission');
const smallMediaQuery = window.matchMedia('(min-width: 767px');
const mediumMediaQuery = window.matchMedia('min-width: 768px');
// const largeMediaQuery = window.matchMedia('min-width: 1275px');

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
    if (mediumMediaQuery.matches) {
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
    // } else if (largeMediaQuery.matches) {
    //     if (!email.value) {
    //         requiredError.style.display = 'block';
    //         email.style.marginBottom = '0px';
    //     } else if (!validateEmail(email.value)) {
    //         emailError.style.display = 'block';
    //         email.style.marginBottom = '0px';
    //     } else {
    //         validSubmission.style.display = 'block';
    //         email.style.marginBottom = '8px';
    //     }
    } else {
        if (!email.value) {
            formContainer.style.position = 'relative';
            requiredError.style.display = 'block';
            requiredError.style.position = 'absolute';
            requiredError.style.top = '40%'
            email.style.marginBottom = '25px';
        } else if (!validateEmail(email.value)) {
            formContainer.style.position = 'relative';
            emailError.style.display = 'block';
            emailError.style.position = 'absolute';
            emailError.style.top = '40%'
            email.style.marginBottom = '25px';
        } else {
            validSubmission.style.display = 'block';
            email.style.marginBottom = '15px';
            validSubmission.style.marginTop = '10px';
        }
    }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  validate();  
});

mediumMediaQuery.addEventListener('change', validate());

// largeMediaQuery.addEventListener('change', validate);