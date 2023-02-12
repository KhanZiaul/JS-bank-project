// step - 1

document.getElementById('sub-btn').addEventListener('click',function(){

    const email = document.getElementById('email-input');


    const password = document.getElementById('pass-input');


    if(email.value === 'khanzia@gmail.com' && password.value === 'khanzia123'){
        location.href = '/bank.html';
    }

    else{
        alert('Wrong email or password');
    }
});