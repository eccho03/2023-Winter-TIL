// function isKoreanFood(food) {
//     if (food === "불고기" || food === "비빔밥" || food === "떡볶이") {
//         return true;
//     }
//     return false;
// }

function isKoreanFood(food) {
    if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
        return true;
    }
    return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");
console.log(food1);
console.log(food2);

// 더 많은 한식을 넣고 싶을 때,,?? -> include 활용

const getMeal = (mealType) => {
    if (mealType === '한식') return "불고기";
    if (mealType === '양식') return "파스타";
    if (mealType === "중식") return "멘보샤";
    if (mealType === "일식") return "초밥";
    return "굶기";
}

const meal = {
    한식: "불고기",
    중식: "멘보샤",
    일식: "초밥",
    양식: "스테이크",
    인도식: "카레"
};

const getMeal2 = (mealType) => {
    return meal[mealType] || "굶기";
}

console.log(getMeal("한식"));
console.log(getMeal2("양식"));