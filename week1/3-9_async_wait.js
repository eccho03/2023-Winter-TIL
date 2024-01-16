// async

// function hello() {
//     return 'hello';
// }

// async function helloAsync() {
//     return "hello async";
// }

function delay(ms) {
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve();
    //     }, ms);
    // });

    return new Promise((resolve) => {
        setTimeout(resolve, ms); // callback 함수 자체로 전달해도 resolve 가능
    });
}

// console.log(hello());
// console.log(helloAsync());

async function helloAsync() {
    // return delay(3000).then(() => {
    //     return "Hello Async";
    // });

    await delay(3000); // 동기적으로 수행 (실행 중에 코드 작동 x)
    return "Hello Async";
}

async function main () {
    const res = await helloAsync();
    console.log(res);
}

main();

helloAsync().then((res) => {
    console.log(res);
});
