"use strict";

var usuario = {
  nome: 'Adan',
  idade: 19,
  endereco: {
    Estado: 'SP',
    cidade: 'São Paulo'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    Estado = usuario.endereco.Estado;
console.log(nome, idade, Estado);
var arr = [1, 2, 3, 4, 5];
var b = arr[0],
    a = arr[1],
    c = arr.slice(2);
console.log(a, b);
console.log(c);
