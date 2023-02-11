//deposit with balance connection ------------------>

// deposit ------------------------>

document.getElementById('deposit-btn').addEventListener('click',function(){

// step-1 : Input deposit amount text to float:

    const inputTextAmount = document.getElementById('deposit-input');

    const inputAmount = parseFloat(inputTextAmount.value);

// step-2 : Amount deposit text to float :

    const insideTextAmount = document.getElementById('deposit-amount');

    const insideAmount = parseFloat(insideTextAmount.innerText);

// step-3 : Total amount

    const totalAmount = inputAmount + insideAmount;

    insideTextAmount.innerText = totalAmount;

// step-4 : Connect deposit with balance 

   const textBalance =document.getElementById('balance');

   const floatBalance = parseFloat(textBalance.innerText);

   const totalBalance = floatBalance * totalAmount;

   textBalance.innerText = totalBalance;

// step-5 : Make input filed empty

   inputTextAmount.value = "";

});