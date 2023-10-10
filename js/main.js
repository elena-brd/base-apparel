const btn = document.getElementById('btn');
const emailInput = document.getElementById('email');
const formInput = document.getElementById('form-input');
const alertMsg = document.querySelector('.alert-msg');
const msg = document.querySelector('.msg')

function formValidation(e) {
    e.preventDefault();
    if (emailInput.value === '') {
        alertMsg.style.display = 'block';
        setTimeout(() => {
            alertMsg.style.display = 'block';
            alertMsg.remove();
        }, 2000)
    }
}


formInput.addEventListener('submit', formValidation);


