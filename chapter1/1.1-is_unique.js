// 1. Implament an alogritum to determine if a string has all unique characters. 

const isUnique = (string) => {
    string = string.toLowerCase();
    const alpah = {'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0,'k':0,'l':0,'m':0,'n':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0}
    
    for(var i=0; i<string.length;i++){
        if(alpah[string.charAt(i)] == 0){
            alpah[string.charAt(i)] = 1 
        }else if(alpah[string.charAt(i)] > 0){
            return false;
        }
    }
    return true;
}

// console.log(isUnique('yOu fRack this end'))
// console.log(isUnique('Quack a doodle'))
console.log(isUnique('Quack!!!!!!'))

// ==== #1 Overview ====
// 1. only looking at alaphabet characters in lowercase



// 2. What if you cannot use additionl data structures?



// ==== #2 Overview ====