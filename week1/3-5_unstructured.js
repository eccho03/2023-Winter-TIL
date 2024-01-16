// let [one, two, three] = ["one", "two", "three"];
// console.log(one, two, three);

let a = 10;
let b = 20;

[a, b] = [b, a]; // 쉽게 swap 할 수 있음
console.log(a, b);

let object = { one: "one", two: "two", three: "three", name: "조은채"};
// let one = object.one;
// let two = object["two"];
// let three = object["three"];
let {name, one, two, three} = object;

console.log(one, two, three, name);