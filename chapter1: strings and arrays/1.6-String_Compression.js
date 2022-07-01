// 1.6 String Compression
// Implament a method to perform a vasic string compression using counts of repeated characters: aabcccccaaa -> a2b1c5a3
// You can assume the string is only upper and lowercase numbers

const stringCompression = (str) => {
    let runner = 0;
    let counter = 0;
    let output = ""

    for(let i=0;i<str.length;i++){
        if(str[i] === str[runner] || i === 0){
            console.log(i)
            counter++;
        }else{
            output += str[runner] + "" + counter;
            counter = 1;
        }
        runner = i;
    }
    // GETS THE LAST ITEM IN THE LOOP
    output += str[runner] + "" + counter;

    return output
}

console.log(stringCompression('aaabbbcccdddeee'))
// console.log(stringCompression('aaabbbcaapptdddeee'))