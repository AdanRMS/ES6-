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