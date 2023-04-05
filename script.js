const email = document.getElementById('email').value;
const warning = document.getElementsByClassName('warning');
const formInput = document.getElementById('email');

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the default form submission behavior
    // your code to handle the form data goes here
  });
document.querySelector('form').addEventListener('keypress', function(event){
    warning[0].style.display = 'none';
    warning[1].style.display = 'none';
    formInput.style.borderBlockColor = 'pink'
})
function someFunction(){
    const email = document.getElementById('email').value;
    const warning = document.getElementsByClassName('warning');
    const formInput = document.getElementById('email');
     if(email.length > 0){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            alert('success')
        } else {
            warning[0].style.display = 'block'
            warning[1].style.display = 'block'
            warning[1].innerHTML = 'Please provide a valid email';
            formInput.style.borderBlockColor = 'red'
        }
     } else {   
         warning[0].style.display = 'block';
         warning[1].style.display = 'block';
         formInput.style.borderBlockColor = 'red'
     }
}
