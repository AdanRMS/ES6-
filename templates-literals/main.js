// REST

function soma (a, b, ...params){
    return params
}

console.log(soma(1, 2, 8));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2 ]

console.log(arr3);

const usuario = {
    nome: 'adan',
    idade: 23,
    cursando: 'nada'
};

const usuario2 = { ...usuario, nome: 'vagabundo' };

console.log(usuario2);