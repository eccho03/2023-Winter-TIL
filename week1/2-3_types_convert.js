// primary type
let age = 25; // 정수
let tall = 175.9; // 실수
console.log(age + tall);

let inf = Infinity;
let minusinf = -Infinity;
let nan = NaN;

let name = "winterlood";
let name2 = '조은채';
let name3 = `winterlood`;
let name4 = `winterlood ${name2}`;
console.log(name4);

let isSwitchOff = false;

let a;
console.log(a); //undifined
let b = null;
console.log(b);

let numberA = 12;
let numberB = "2";

console.log(numberA * numberB); // 자료형을 적절히 변환해서 계산해줌 (casting)
console.log(numberA + numberB); // 122
console.log(numberA + parseInt(numberB)); // 14