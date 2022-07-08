// 1.9 String Rotation - Assume you have a method isSubstring which checks if one word is a substring of another. given 2 strings, write a code to check is they're a roration of eachother

const stringRotation = (st1, st2) => {
    if(st1.length != st2.length){
        return false
    }else{
        for(let i=0; i<st1.length;i++){
            if(st1 != st2){
                let char = st1[0]
                st1 = st1.substring(1);
                st1 = st1 + char
            }else if(st1 === st2){
                return true;
            }
        }
    }
    return false
}
console.log(stringRotation("waterbottle", "erbottlewat"))

