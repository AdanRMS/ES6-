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
