//deposit with balance connection ------------------>

// deposit ------------------------>

    document.getElementById('deposit-btn').addEventListener('click',function(){

// step-1 : Input deposit amount text into float:

    const inputTextAmount = document.getElementById('deposit-input');

    const inputAmount = parseFloat(inputTextAmount.value);

// step-2 : Make input filed empty

    inputTextAmount.value = "";

// step-3 : Check input validation

    if(isNaN(inputAmount)){

        alert('Without PAISA No Double!!!');

        return;
    }

// step-4 : Amount of deposit text into float :

    const insideTextAmount = document.getElementById('deposit-amount');

    const insideAmount = parseFloat(insideTextAmount.innerText);

// step-5 : Total amount

    const totalAmount = inputAmount + insideAmount;

    insideTextAmount.innerText = totalAmount;

// step-6 : Adding deposit amount with total balance 

    const textBalance =document.getElementById('balance');
  
    const floatBalance = parseFloat(textBalance.innerText);

    const totalBalance = totalAmount * 2;

    textBalance.innerText = totalBalance;

});