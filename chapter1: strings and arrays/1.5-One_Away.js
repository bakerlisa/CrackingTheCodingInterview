// 1.5 One Away
// Given 2 strings, write a function to check if they are one edit  (or zero edit) away

const oneAway = (str1, str2) => {
    var away = 0;
    if(str1.length > str2.length+1 || str1.length < str2.length-1){
        return false
    }

    // if str2 is greater it messes with the results, so this makes sure that str1 is always the longest string
    if(str1.length < str2.length){
        let temp =  str1;
        str1 = str2
        str2 = temp
    }

    for(var i=0;i<str1.length;i++){
        if(str1[i] != str2[i]){
            if(away+1 <= 1){
                away++;
            }else{
                return false;
            }
        }   
    }
    return true;
}

console.log(oneAway('pleed','plea'))