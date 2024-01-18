function calcular() {
  let nota1 = parseFloat(prompt("Nota do primeiro aluno 1: "));
  let nota2 = parseFloat(prompt("Nota do primeiro aluno 2: "));
  let nota3 = parseFloat(prompt("Nota do primeiro aluno 3: "));

  let media = (nota1 + nota2 + nota3) / 3;

  if (media >= 8) {
    alert("Parabens, esta aprovado.");
  } else if (media >= 5) {
    alert("Esta de recuperação.");
  } else {
    alert("Repetiu.");
  }
}
