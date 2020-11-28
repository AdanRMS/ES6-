const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];


//Desafio 2.1   
const arrIdade = usuarios.map(function( { idade } ){
    return idade;   
});

console.log(arrIdade)


//Desafio 2.2
const maiorIdade = usuarios.filter(function( { idade } ){
    return idade >= 18;
})

console.log(maiorIdade);


//Desafio 2.3
const impostor = usuarios.find(function({ empresa }){
    return empresa === 'Google';
});

console.log(impostor);


//Desafio 2.4
const novaIdade = usuarios.map(function( { idade } ){
    return idade * 2;
});

const usuarios2 = usuarios.map(function(item, index){
    return  {...usuarios[index], idade: novaIdade[index]}
})

const resultado = usuarios2.filter(function( {idade} ){
    return idade <= 50;
})


console.log(resultado)


