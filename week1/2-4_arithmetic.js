let a = 1;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log (a / b);
console.log (a % b);

let c = 5;
c += 10;
console.log(c);

let d = 10;
d++;
console.log(d);

console.log(!true);
console.log(true && true); // true AND true
console.log(true || false); // true OR true

let compareA = 1 == "1"; // 값만 비교
console.log(compareA); // true

let compareB = 1 === "1"; // 값과 type 비교
console.log(compareB); // false

let compareC = 1 != "1"; // 값만 비교
console.log(compareC); // false

let compareD = 1 !== "1"; // 값만 비교
console.log(compareD); // true

// -> 안전한 비교를 위해 ===, !== 사용

console.log(typeof a);

let temp; // temp가 null이나 undefined이면 10을 선택해 temp에 넣기
temp = temp ?? 10;
console.log(temp);