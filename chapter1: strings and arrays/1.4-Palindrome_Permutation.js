// 1.4 Palindrome Permutation
// Given a string check to see if the string is a palindrome, spaces and 
// Plaindrome: It's tje same backwards as it is forwards: taco cat

const palindrome = (pal,str) => {
    pal = pal.replace(" ", "").toLowerCase()
    str = str.replace(" ", "").toLowerCase()
    if(pal.length != str.length ){
        return false
    }else{
        for(var i=0;i<pal.length;i++)
    }

    

}

console.log(palindrome("Tact Coa", "aoct Cat"));