console.log(true && false);
console.log(true || false);
console.log(!true);

// 단락 회로 평가: 뒤에거 볼 필요없이 연산이 끝나는 경우
// const getName = (person) => {
//     if (!person) {
//         return "객체가 아닙니다";
//     }
//     return person.name;
// }

const getName = (person) => {
    const name = person && person.name;
    return name || "객체가 아닙니다";
    // 이미 person이 false이기 때문에 person.name에 접근 x
}

// let person = { name : "조은채"};
let person = null;
const name = getName(person);
console.log(name);

