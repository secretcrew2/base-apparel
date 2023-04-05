
const showWarningText = document.getElementsByClassName('warning');

const warning = document.getElementsByClassName('warning-text')[0];
const warningText = warning.children[0];

const form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
})

form.addEventListener('keypress', function(event){
    hideWarnings();
})
function emailValidation(){
    const emailInput = document.getElementById('email').value;
    if(emailInput.length === 0){
        showWarning('Please provide an Email');
        console.log(emailInput.length);
    } else if(!(isValidEmail(emailInput))){
        showWarning('Please enter a valid email');
    } else {
        alert('Success');
        hideWarnings();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  }

function showWarning(message){
    warningText.innerText = message;
    showWarningText[0].style.visibility = "visible";
    showWarningText[1].style.visibility = "visible";
}
function hideWarnings(){
    showWarningText[0].style.visibility = "hidden";
    showWarningText[1].style.visibility = "hidden";
}