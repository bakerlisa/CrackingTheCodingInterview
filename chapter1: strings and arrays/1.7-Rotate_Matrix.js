// 1.7 Rotate Matrix

const rotateMatrix = (matrix) => {
    // sets up our array
    var output = []
    for(let m=0;m<matrix.length;m++){
        output.push([])
    }

    // roataes the values clockwise
    for(let i=matrix.length-1; i >= 0; i--){
        for(let j=0;j<matrix[i].length;j++){
            output[j].push(matrix[i][j])
        }
    }
    return output;
} 

console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]))


// [1,2,3]     [7,4,1]
// [4,5,6]  => [8,5,2]
// [7,8,9]     [9,6,3]