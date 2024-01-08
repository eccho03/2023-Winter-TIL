function isPositive(number, resolve, reject) {
    setTimeout(() => {
        if (typeof number === 'number') {
            // 성공 -> resolve
            resolve(number >= 0 ? "양수":"음수");
        } else {
            // 실패 -> reject
            reject("주어진 값이 숫자형 값이 아닙니다.");
        }
    }, 2000);

}

function isPositiveP(number) {
    const executor = (resolve, reject) => {
        setTimeout(() => {
            if (typeof number === 'number') {
                // 성공 -> resolve
                console.log(number);
                resolve(number >= 0 ? "양수":"음수");
            } else {
                // 실패 -> reject
                reject("주어진 값이 숫자형 값이 아닙니다.");
            }
        }, 2000);
    }

    const asyncTask = new Promise(executor); // 비동기, 작업 결과를 Promise 객체로 받음
    return asyncTask;
}

const res = isPositiveP([]);

res.then((res) => (console.log("작업 성공: ", res))).catch((err) => console.log("작업 실패 에러"));

// isPositive([], (res) => {
//     console.log("성공적으로 수행됨 : ", res);
// }, 
// (err) => {
//     console.log("실패 하였음 : ", err);
// });

function taskA(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a+ b;
            resolve(res);
        }, 3000);
    });
}

function taskB(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    });
}

function taskC(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a *- 1;
            resolve(res);
        }, 2000);
    });    
}

taskA(5, 1)
    .then((a_res) => {
        console.log("A RESULT : ", a_res);
        return taskB(a_res);
    })
    .then((b_res) => {
        console.log("B RESULT : ", b_res);
        return taskC(b_res);
    })
    .then((c_res) => {
        console.log("C RESULT : ", c_res);
    });

    taskA(5, 1).then((a_res) => {
        console.log("A RESULT : ", a_res);
        return taskB(a_res);
    }).then((b_res) => {
        console.log("B RESULT : ", b_res);
    }).then((c_res) => {
        console.log("C RESULT : ", c_res);
    });


        