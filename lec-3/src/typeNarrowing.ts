//typeNarrowing;
//
function upperCase(arg: number | string){
    if(typeof(arg) == "string"){
        return arg.toUpperCase();
    }
    else{
        return arg;
    }
    // return arg.toUpperCase();
}
upperCase("abbb");

interface User{
    name : string,
    age  : number,
    phone ?: number   //? is used to make the thing optional
}
let u1 : User = {
    name : "Hello",
    age : 23,
}

function getPhone(arg:User): number{
    if("phone" in arg){
        return arg.phone;
    }
    else{
        return 0;
    }
}
let result:number = getPhone(u1);

interface Person{
    role : string,
    permission? : string[]
}
let user: Person = {
    role : "user"
}
let admin : Person = {
    role : "admin",
    permission : ["write", "delete", "update"]
}

function writeBlog(user : Person): string{
    if("permission" in user){
        let permission = user.permission;
        if(permission?.includes("write")){
            //do your task
            return "blog is written"
        }
    }
    else{
        return "not authorize"
    }
}
writeBlog({role : "user"});

type move = "up" | "down" | "left" | "right"
type success = {
    status: "200",
    data: []
}
type error = {
    status: "404",
    message: ""
}
type ApiResponse = success | error;

function sendResponse(response: ApiResponse){
    //response.message;
    //response.data;
    if(response.status == "200"){
        return response.data;
    }
    return response.message;
}