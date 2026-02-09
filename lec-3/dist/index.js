"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function firstValue(arg) {
    return arg[0];
}
let val = firstValue(["A", "BBB", "C"]);
// val.toLowerCase();
//using generics
function firstValue2(arg) {
    return arg[0];
}
let val2 = firstValue2(["A", "BBB", "C"]);
val2?.toLocaleLowerCase();
let val3 = firstValue2([1, 2, 3]);
val3?.toString();
let u1 = {
    name: "Hello",
    age: 23,
};
console.log(u1.phone);
//# sourceMappingURL=index.js.map