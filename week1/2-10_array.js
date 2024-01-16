let arr = new Array();
let arr2 = [1, "2", true, null, undefined, {}, [], function(){}]; // 배열 리터럴
console.log(arr2);

let arr3 = [ 1, 2, 3, 4, 5];
console.log(arr3);

arr3.push(6);
console.log(arr3);

arr3.push({key: "value"});
console.log(arr3);

console.log(arr3.length);