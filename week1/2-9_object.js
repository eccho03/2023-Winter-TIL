let person = new Object(); // 생성자 방식
let person2 = {}; // 객체 리터럴 방식
let person3 = {
    key: "value", // 프로퍼티 (객체 프로퍼티)
    key1: "value2",
    key2: true,
    key3: undefined,
    key4: [1,2],
    key5: function() {}
};
console.log(person3.key); // 객체 안의 key에 접근
// 없는 프로퍼티에 접근 시 undefined이 나온다.

const person4 = {   //const여도 에러 x 이유? 객체를 수정하는거지 상수 자체를 수정하는게 아니어서
    name: "조은채",
    age: 22
}; // 객체 리터럴 방식

console.log(person4["name"]);

console.log(getPropertyValue("name"));
function getPropertyValue (key) {
    return person4[key];
}

person4.location = "한국";
person4["gender"] = "남성";

person4.name = "이정환 A";
console.log(person4);

delete person4.age; //property 삭제
// delete person4["name"]; -> 메모리에서 삭제 안 됨
person4.name = null;
console.log(person4);

const person5 = {
    name: "조은채", // 멤버
    age: 22,
    say: function () {
        console.log(`안녕 나는 ${this["name"]}`);
    } // 메서드 -> 방법
};

person5.say();
person5["say"]();

console.log(person5.gender); // 존재하지 않는 프로퍼티
console.log(`name : ${"name" in person5}`); // 객체 안에 해당 프로퍼티가 있는지 확인
console.log(`age : ${"age" in person5}`);
console.log(`gender : ${"gender" in person5}`);