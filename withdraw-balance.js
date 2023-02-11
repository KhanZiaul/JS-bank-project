//withdraw with balance connection ------------------>

// withdraw ------------------------>

     document.getElementById('withdraw-btn').addEventListener('click',function(){

// step-1 : Input withdraw amount text into float:

    const inputTextAmount = document.getElementById('withdraw-input');

    const inputAmount = parseFloat(inputTextAmount.value);

// step-2 : Make input filed empty

    inputTextAmount.value = "";

// step-3 : Check input validation

    if(isNaN(inputAmount)){

        alert('Enter Money Man !!!');

        return;
    }

// step-4 : Amount of withdraw text into float :

    const insideTextAmount = document.getElementById('withdraw-amount');

    const insideAmount = parseFloat(insideTextAmount.innerText);

// step-5 : Covert withdraw balance into float

    const textBalance =document.getElementById('balance');

    const floatBalance = parseFloat(textBalance.innerText);

// step-6 : Validation Of amount in Bank

    if(inputAmount > insideAmount){

    alert('Are You Joking Man!!!');

    return;   
  }

// step-7 : Total amount

    const totalAmount = inputAmount + insideAmount;

    insideTextAmount.innerText = totalAmount;

// step-8 : Reduce withdraw amount with total balance 

   const totalBalance = floatBalance - inputAmount;

   textBalance.innerText = totalBalance;

});