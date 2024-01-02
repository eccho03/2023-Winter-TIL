let age = 25;
console.log(age); // 25
/* 실행 도중 값이 바뀔 수 있는 저장소 */
age = 30;
console.log(age); // 30

// 변수명 규칙은 다른 언어와 동일하다(예약어, 숫자로 시작 등등)

var age2 = 25;
console.log(age2);

age2 = 30;
console.log(age2);

/* var와 let의 공통점
변수 선언 방식 동일 ,값 변경 가능

var와 let의 차이점
var: 똑같은 변수명으로 변수 하나 더 생성 가능함
let: 중복 허용 x
->let만 사용하는 게 좋음
*/

const age3 = 25;
console.log(age3);
// 한 번 선언 후 값을 바꿀 수 없음