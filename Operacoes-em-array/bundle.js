"use strict";

var arr = [1, 2, 3, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return item + 2;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0; //precisa retornar True||false
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 2; //precisa retornar True||false
});
console.log(find);
