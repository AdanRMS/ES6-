const arr = [1, 2, 3, 5, 8, 9];

const newArr = arr.map(function(item, index){
    return item + 2;
});

console.log(newArr)

const sum = arr.reduce(function(total, next){ 
    return total + next;
});

console.log(sum)

const filter = arr.filter(function(item){
    return item % 2 === 0;//precisa retornar True||false
});

console.log(filter);

const find = arr.find(function(item){
    return item === 2;//precisa retornar True||false
});

console.log(find);