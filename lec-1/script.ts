// //primmitive data type --> number, string, boolean, underfined,null

// let a: number; 
// a = 10;
// console.log(a)

// function isAllowedtoVote(age: number):boolean{
//     if(age < 18){
//         return false;
//     }
//     return true;
// }

// let result:boolean = isAllowedtoVote(20);
// console.log(result);

function f(): void{
    console.log("Hello");
}
let a = f();
console.log(a);

//type
type Person = {
    name : string,
    age : number
}
let p1 : Person = {
    name : "abcd",
    age : 23
}

//array type
let numArr : number[] = [1, 68, 4];
let allUsers: Person[] = [{name: "10", age: 26}];

function printAllUserName(users: Person[]){
    for(let i : number = 0; i < users.length; i++){
        console.log(users[i].name);
    }
    // for(let i : number = 0; i < 2; i++){
    //     console.log(users[i].name);
    // }
    // users.forEach(user => {
    //     console.log(user.name + "");
    // });
}
printAllUserName(allUsers)