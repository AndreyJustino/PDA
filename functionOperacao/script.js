function operacao() {
  let number1 = Number(prompt("Informe um numero: "));
  let number2 = Number(prompt("Informe mais um numero: "));

  let soma = number1 + number2;
  let subtracao = number1 - number2;
  let multiplicacao = number1 * number2;
  let divisao = number1 / number2;

  alert(`A soma desses dois numeros é ${soma}, a subtracao é ${subtracao}, a multiplicação é ${multiplicacao} 
        e a divisão é ${divisao}`);
}

operacao()