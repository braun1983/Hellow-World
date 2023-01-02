const prompt = require('prompt-sync')();

var salarios = [];
var soma = 0;
var media;
var qtn_menores = 0;

for (var i = 1; i <= 5; i++) {
  console.log("Pessoa", i);
  var nome = prompt("Digite seu nome:");
  var salario_bruto = parseFloat(prompt(" Digite seu salário bruto:"));
  var dependentes = parseInt(prompt("Digite o número de dependentes:"));
  var renda_percapta = salario_bruto / (dependentes + 1);

  for (var j = 1; j <= dependentes; j++) {
    var ganho = parseFloat(prompt(" Digite seu ganho mensal:"));
    salario_bruto = salario_bruto + ganho;
  }




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
  salarios.push(salario_liquido);
  soma = soma + salario_liquido;

}
media = soma / 5

for (var i = 0; i <= 4; i++) {
  if (salarios[i]) {
    qtd_menores = qtd_menores + 1
  }
}

console.log("A média dos salários líquidos é:", media);
console.log("A quantidade de pessoas com salários menores que a média é:", qtd_menores);