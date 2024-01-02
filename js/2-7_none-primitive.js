console.log(helloB());

// 함수 표현식
let hello = function () {
    // hello로 불리면 되므로 함수 이름 x
    return "안녕하세요 여러분";
}

let hello2 = () => "짧게 표현";

const helloText = hello();
const helloText2 = hello2();

console.log(helloText);
console.log(helloText2);

function helloB() {
    return "안녕하세요 여러분";
}