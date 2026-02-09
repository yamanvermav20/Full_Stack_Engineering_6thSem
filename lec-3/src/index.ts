// create a function 
type numOrStr = number | string
function firstValue(arg : numOrStr[]){
    return arg[0];
}

let val = firstValue(["A", "BBB", "C"]);
// val.toLowerCase();

//using generics
function firstValue2<T>(arg: T[]){
    return arg[0];
}
let val2 = firstValue2<String>(["A", "BBB", "C"]);
val2?.toLocaleLowerCase();
let val3  = firstValue2<number>([1, 2, 3]);
val3?.toString()

//what does ? mark
interface User{
    name : string,
    age  : number,
    phone ?: number   //? is used to make the thing optional
}
let u1 : User = {
    name : "Hello",
    age : 23,
}
console.log(u1.phone);