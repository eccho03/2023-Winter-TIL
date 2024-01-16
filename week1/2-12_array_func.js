const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 1. forEach
arr.forEach((elm) => console.log(elm))

arr.forEach(function (elm) {
    console.log(elm * 2);
});

const newArr = [];

arr.forEach(function (elm) {
    newArr.push(elm * 2);
});

console.log(newArr);

//------------------------------------
// 2. map()
const newArrMap = arr.map((elm) => {
    return elm * 2;
});

console.log(newArrMap);
//------------------------------------
let number = 3;
arr.forEach((elm) =>{
    if (elm === number) {
        console.log(true);
    }
})

// 3. includes
console.log(arr.includes(number));

number = "3";
// 4. indexOf (없으면 -1 반환)
console.log(arr.indexOf(number));

const arr2 = [
    {color: "red"},
    {color: "black"},
    {color: "blue"},
    {color: "green"}
];
number = 3;
// 5. findIndex
console.log(arr2.findIndex((elm) => elm.color === "green"));

const idx = arr2.findIndex((elm) => {
            return elm.color === "blue";
});

console.log(idx);

// 6. find -> 요소 그 자체일 때

// 7. filtering
const arr3 = [
    {num: 1, color: "red"},
    {num: 2, color: "black"},
    {num: 3, color: "blue"},
    {num: 4, color: "green"},
    {num: 5, color: "blue"},

];

console.log(arr3.filter((elm) => elm.color === "blue"));

// 8. slice
console.log(arr.slice(0, 2)); // begin ~ end-1

// 9. concat
const arr4 = [
    {num: 1, color: "red"},
    {num: 2, color: "black"},
    {num: 3, color: "blue"}
];

const arr5 = [
    {num: 4, color: "green"},
    {num: 5, color: "blue"},

];

console.log(arr4.concat(arr5));

//10. sort - 문자 정렬 시
let chars = ["나", "다", "가"];
chars.sort();
console.log(chars);

// 숫자 정렬 시
const compare = (a, b) => {
    // 1. 같다
    // 2. 크다
    // 3. 작다

    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    else {
        return 0;
    }
}
let numbers = [0, 3, 2, 10, 20];
numbers.sort(compare);
console.log(numbers);

// 11. join
const arr6 = ["조은채", "님", "안녕하세요", "반갑습니다"];
console.log(arr6.join(" ")); // 괄호 안에 구분자를 넣을 수 있음
