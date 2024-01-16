for(let i = 1; i <= 10; i++) {
    // 반복 수행할 명령
    console.log("winterlood");
}

const arr = ["a", "b", "c", "d"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

let person = {
    name: "조은채",
    age: 22,
    tall: 159
};

const personKeys = Object.keys(person);
console.log(personKeys);

const personValues = Object.values(person);
console.log(personValues);

for (let i = 0; i < personKeys.length; i++) {
    const curKey = personKeys[i];
    const curValue = person[curKey];

    console.log(`${curKey} : ${curValue}`);
}

