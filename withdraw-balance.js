//withdraw with balance connection ------------------>

// withdraw ------------------------>

document.getElementById('withdraw-btn').addEventListener('click',function(){

// step-1 : Input withdraw amount text to float:

    const inputTextAmount = document.getElementById('withdraw-input');

    const inputAmount = parseFloat(inputTextAmount.value);

// step-2 : Amount withdraw text to float :

    const insideTextAmount = document.getElementById('withdraw-amount');

    const insideAmount = parseFloat(insideTextAmount.innerText);

// step-3 : Total amount

    const totalAmount = inputAmount + insideAmount;

    insideTextAmount.innerText = totalAmount;

// step-4 : Connect withdraw with balance 

   const textBalance =document.getElementById('balance');

   const floatBalance = parseFloat(textBalance.innerText);

   const totalBalance = floatBalance - inputAmount;

   textBalance.innerText = totalBalance;

// step-5 : Make input filed empty

   inputTextAmount.value = "";

});