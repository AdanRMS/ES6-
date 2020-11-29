// 3.1
const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
 return item + 10;
});

const newArr = arr.map(item => item + 10)

console.log(newArr)

// 3.2
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario))

// 3.3
const nome = "Diego";
const idade = 23;

/*function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}*/

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promisee = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
}

   
const promise = () => new Promise((resolve, reject) => resolve());
