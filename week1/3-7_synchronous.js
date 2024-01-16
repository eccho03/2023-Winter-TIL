function taskA() {
    setTimeout(() => {
        console.log("A TASK END");
    }, 2000);
}

taskA();
console.log("코드 끝");

function taskB(a, b, cb) {
    setTimeout(() => {
        const res = a+ b;
        cb(res);
    }, 2000);
}

console.log("코드 끝");

function taskC(a, cb) {
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

console.log("코드 끝");

function taskD(a, cb) {
    setTimeout(() => {
        const res = a *- 1;
        cb(res);
    }, ((2000)));
}

taskB(3, 4, (res) => {
    console.log("B TASK RESULT : ", res);
});

taskC(7, (res) => {
    console.log("C TASK RESULT : ", res);
});

taskD(14, (res) => {
    console.log("D TASK RESULT : ", res);
});

