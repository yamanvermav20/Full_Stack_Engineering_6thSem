//enum ---> set of constant values;
type Role = "admin" | "user";

// function addblog(role: string) : string{
//     if(role == "user"){
//         return "not authorize"
//     }
//     //blog add
//     return "blog added"

// }

function addblog(role: Role) : string{
    if(role == "user"){
        return "not authorize"
    }
    //blog add
    return "blog added"

}
addblog("admin");
addblog("admin");
// addblog("fdfd");


//enum

// enum Role2{
//     user 
//     admin 
// }

// enum Role2{
//     user = 1, 
//     admin = 2
// }

enum Role2{
    user = "user", 
    admin = "admin"
}

console.log(Role2.user)
console.log(Role2.admin)

function addblog2(role : Role2) : string{
    if(role == "user"){
        return "not authorize"
    }
    return "blog added";
}

addblog(Role2.user);
addblog(Role2.admin);

//Type any

let a: any; //treat like javascript
a : "abcde";
a : 10;