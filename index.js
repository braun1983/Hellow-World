const prompt = require('prompt-sync')();
for (var i=1; i <=5; i++) {
  console.log("Pessoa", i);
var nome = prompt("Digite seu nome:");
var salario_bruto = parseFloat(prompt(" Digite seu salário bruto:"));
var dependentes = parseInt(prompt("Digite o número de dependentes:"));
var renda_percapta = salario_bruto / (dependentes + 1);

if (renda_percapta >= 500) {

  if (salario_bruto > 0 && salario_bruto <= 1903.98) {
    var ir = salario_bruto * 0.05;
  } else if (salario_bruto <= 28026.65) {
    var ir = salario_bruto * 0.075;
  } else {
    var ir = salario_bruto * 0.15;
  }

} else {
  var ir = 0;
}
var salario_liquido = salario_bruto - ir;
console.log("Salário líquido: R$", salario_liquido);
}