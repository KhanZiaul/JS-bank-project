// step - 1

document.getElementById('sub-btn').addEventListener('click',function(){

    const email = document.getElementById('email-input');


    const password = document.getElementById('pass-input');


    if(email.value === 'khanzia@gmail.com' && password.value === 'khanzia123'){
        location.href = 'http://127.0.0.1:5500/bank.html';
    }

    else{
        alert('Wrong email or password');
    }
});