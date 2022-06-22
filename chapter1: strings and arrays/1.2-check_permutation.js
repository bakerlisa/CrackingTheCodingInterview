// Given two strings, write a method to decide if one is permutation of the other
// permutation : Two strings are a permutatuin if they have the same characters, but in a different order

const permutation = (str1, str2) => {
    const str = 'A!@#b$%^c&*(';
    str1 =  str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    str2 =  str2.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const loader = {}

    for(var i=0; i<str1.length;i++){
        if(loader[str1[i]]){
            loader[str1[i]] = loader[str1[i]]+1
        }else{
            loader[str1[i]] = 1
        }
    }
    
    for(var j=0; j<str2.length;j++){
        if(loader[str2[j]] && loader[str2[j]]-1 >= 0){
            loader[str2[j]] = loader[str2[j]]-1
        }else{
            return false
        }
    }
    return true
}

console.log(permutation("I'm a string!", "mat is fring!"))
