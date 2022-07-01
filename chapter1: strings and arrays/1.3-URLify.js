// 1.3 URLify
// Replace all the sapces with '%20'
// Spaces on the end can be removed

const URLify = (str) => {
    // removes white space from the begingin & end
    str = str.trim()
    let str1 = str[0];

    // removes any extra spaces in the string
    let pervious = 0
    for(let i=1; i<str.length;i++){
        if(str[pervious] === ' '  && str[i] === ' '){
            continue
        }else{
            str1 += str[i]
        }
        pervious++;
    }

    str1 = str1.replace(/\s/g, "%20")
    return str1
}

console.log(URLify("    I'm a happy cat      yup"))