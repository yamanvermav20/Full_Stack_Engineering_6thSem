function isAllowedtoVote(age){
    if(age < 18){
        return false;
    }
    return true;
}

let result = isAllowedtoVote();
console.log(result);