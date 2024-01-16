// const cookie = {
//     base: "cookie",
//     madeIn: "korea"
// };

// const chocochipCookie = {
//     base: "cookie",
//     madeIn: "korea",
//     toping: "chocochip"
// };

// const blueberryCookie = {
//     base: "cookie",
//     madeIn: "korea",
//     toping: "blueberry"
// };

// 중복된 쿠키를 작성해야 하는 상황이 발생함
const cookie = {
    base: "cookie",
    madeIn: "korea"
};

const chocochipCookie = {
    ...cookie,
    toping: "chocochip"
};

console.log(chocochipCookie);

const noTopingCookies = ['촉촉한쿠키', '안촉촉한쿠키'];
const topingCookies = ['바나나쿠키', '블루베리쿠키', '딸기쿠키', '초코칩쿠키'];

const allCoocikes = [...noTopingCookies, "함정쿠키", ...topingCookies];
console.log(allCoocikes);


