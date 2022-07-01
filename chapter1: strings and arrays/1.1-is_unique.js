// 1.1 Is Unique
// Implament an alogritum to determine if a string has all unique characters. 
// only looking at lowercase alaphabet characters

const isUnique = (string) => {
    string = string.toLowerCase();
    const alpah = {'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0,'k':0,'l':0,'m':0,'n':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0}
    
    for(let i=0; i<string.length;i++){
        if(alpah[string.charAt(i)] == 0){
            alpah[string.charAt(i)] = 1 
        }else if(alpah[string.charAt(i)] > 0){
            return false;
        }
    }
    return true;
}

// console.log(isUnique('yOu fRack this end'))
console.log(isUnique('Quack!!!!!!'))


// 2. What if you cannot use additionl data structures?
// only looking at alaphabet characters
// Easily add numbers and special characters if needed

const isUniqueTwo = (string) => {
    string = string.toLowerCase();
    const alpah = {'a':0, 'A':0, 'b':0, 'B':0, 'c':0, 'C':0, 'd':0, 'D':0, 'e':0, 'E':0, 'f':0, 'F':0, 'g':0, 'G':0, 'h':0, 'H':0, 'i':0, 'I':0, 'j':0, 'J':0, 'k':0, 'K':0, 'l':0, 'L':0, 'm':0, 'M':0, 'n':0, 'N':0, 'o':0, 'O':0, 'p':0,'P':0, 'q':0, 'Q':0, 'r':0,'R':0, 's':0, 'S':0, 't':0, 'T':0, 'u':0, 'U':0, 'v':0, 'V':0, 'w':0, 'W':0, 'x':0, 'X':0, 'y':0, 'Y':0, 'z':0, 'Z':0}

    for(var i=0; i<string.length;i++){
        
        if(alpah[string[i]] == 0){
            alpah[string[i]] = 1 
        }else if(alpah[string[i]] > 0){
            return false;
        }
    }
    return true;

}
// console.log(isUniqueTwo('yOu fRack this end'))
// console.log(isUniqueTwo('Quack a doodle'))
console.log(isUniqueTwo('Quackk'))