// 1.6 String Compression
// Implament a method to perform a vasic string compression using counts of repeated characters: aabcccccaaa -> a2b1c5a3
// You can assume the string is only upper and lowercase numbers

const stringCompression = (str) => {
    let compressed = {}
    let runner = 0;

    for(let i=0;i<str.length;i++){
        console.log(str[i])
        runner = i;
    }
}

console.log(stringCompression('aaabbbcccdddeee'))