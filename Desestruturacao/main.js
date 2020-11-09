const usuario = {
    nome: 'Adan',
    idade: 19,
    endereco: {
        Estado: 'SP',
        cidade: 'São Paulo'
    }
};

const { nome, idade, endereco:{ Estado } } = usuario;

console.log(nome, idade, Estado);

const arr = [1, 2, 3, 4, 5];

const [ b, a, ...c ] = arr;

console.log(a, b);
console.log(c);