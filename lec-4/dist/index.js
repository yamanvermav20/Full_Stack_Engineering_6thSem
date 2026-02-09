"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function addblog(role: string) : string{
//     if(role == "user"){
//         return "not authorize"
//     }
//     //blog add
//     return "blog added"
// }
function addblog(role) {
    if (role == "user") {
        return "not authorize";
    }
    //blog add
    return "blog added";
}
addblog("admin");
addblog("admin");
// addblog("fdfd");
//enum
var Role2;
(function (Role2) {
    Role2[Role2["user"] = 1] = "user";
    Role2[Role2["admin"] = 2] = "admin";
})(Role2 || (Role2 = {}));
console.log(Role2.user);
console.log(Role2.admin);
// function addblog2(role : Role2) : string{
//     if(role == "user"){
//         return "not authorize"
//     }
//     return "blog added";
// }
//# sourceMappingURL=index.js.map