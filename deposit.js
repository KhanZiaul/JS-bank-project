document.getElementById('deposit-btn').addEventListener('click',function(){

    const depositField = document.getElementById('deposit-input');

    const textDepositAmount = depositField.value;

    const numberAmount = parseFloat(textDepositAmount);

    const textDolar = document.getElementById('dolar');

    const dolar = parseFloat(textDolar.innerText);

    const finalDolar = numberAmount + dolar;

    textDolar.innerText = finalDolar;

    depositField.value = "";

});