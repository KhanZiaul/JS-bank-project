//deposit with balance connection ------------------>

// deposit ------------------------>
document.getElementById('deposit-btn').addEventListener('click',function(){

    // step-1 : input deposit amount text to float:

    const inputTextAmount = document.getElementById('deposit-input');

    const inputAmount = parseFloat(inputTextAmount.value);

    // step-2 : balance deposit text to float :

    const insideTextAmount = document.getElementById('deposit-amount');

    const insideAmount = parseFloat(insideTextAmount.innerText);

    // step-3 : Total

    const totalAmount = inputAmount + insideAmount;

    insideTextAmount.innerText = totalAmount;

// connect deposit with balance 

   const textBalance =document.getElementById('balance');

   const floatBalance = parseFloat(textBalance.innerText);

   const totalBalance = floatBalance * totalAmount;

   textBalance.innerText = totalBalance;

// make input filed empty

   inputTextAmount.value = "";

});