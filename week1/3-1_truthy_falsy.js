let a = "";
if (a) { // FALSE
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let b = "string";
if (b) { // TRUE
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let c = [];
if (c) { // TRUE
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let d = undefined;
if (d) { // FALSE
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let e = NaN;
if (e) { // FALSE
    console.log("TRUE");
} else {
    console.log("FALSE");
}
//--------------------------------------------
const getName = (person) => {
    // if (person === undefined || person === null) {
    //     return "객체가 아닙니다";
    // }
    if (!person) {
        return "객체가 아닙니다";
    }
    return person.name;
};

let person = { name: "조은채" };
const name = getName(person);
console.log(name);