const stringRotation = (st1, st2) => {
    if(st1.length != st2.length){
        return false
    }else{
        console.log("Yes")
        for(let i=0; i<st1.length;i++){
            for(let j=0;j< st2.length;j++){
                if(st1[i] === st2[j]){
                    console.log(st1[i])
                }
            }
        }
    }
}
// console.log(stringRotation("This is a string about cats!"))
console.log(stringRotation("waterbottle", "erbottlewat"))

