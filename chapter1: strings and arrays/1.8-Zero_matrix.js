// 1.8 Zero Matrix

// made a whole new matrix
const zeroMatric = (matrix) => {
    let newMatrix = []
    let row = []
    let zeros = false;
    let position = [];

    // takes care of the rows
    for(let i=0;i<matrix.length;i++){
        for(let j=0; j<matrix[i].length;j++ ){
            if(zeros === false){
                if(matrix[i][j] === 0){
                    zeros = true;
                    row = []
                    position.push(j)
                    j=-1;
                }else{
                    row.push(matrix[i][j])
                }
            }else{
                row.push(0)
            }
        }
        newMatrix.push(row)
        row = []
        zeros = false;
    }

    // take care of the columns
    if(position.length > 0){
        for(let m=0; m<newMatrix.length;m++){
            for(let n=0; n<position.length;n++){
                if(newMatrix[m][n] != 0){
                    newMatrix[m][n] = 0;
                }
            }
        }
    }
    return newMatrix;
}

// console.log(zeroMatric([[0,-1,5,2],[1,0,5,2],[5,4,6.3,1],[5,3,5,-1]]))


// Inline changes, and we have a array to check for which values to not change in each row
// Not going to work like how I wanted. These functions are meant to help with filtereing not going through each item
const zeroMatricTwo = (matrix) => {
    matrix.filter((item,i) => console.log(item[i]))
}
// console.log(zeroMatricTwo([[0,2,5,2],[1,0,5,2],[5,4,6,1],[5,3,5,1]]))


const zeroMatricThree = (matrix) => {
    let newMatrix = []
    let row = []
    let column = []

    // takes care of the rows
    for(let i=0;i<matrix.length;i++){
        for(let j=0; j<matrix[i].length;j++){
            if(matrix[i][j] === 0){
                row.push(i)
                column.push(j)
            }
        }
        // changes columns
        for(let n=0; n<column.length;n++){
            if(matrix[i][n] != 0){
                matrix[i][n] = 0;
            }
        }
    }


    // changes rows
    if(row.length > 0){
        for(let q=0; q<row.length;q++){
            for(let p=0; p<matrix.length;p++){
                if(matrix[q][p] != 0){   
                    matrix[q][p] = 0
                }
            }
        }
    }
    return matrix;
}

console.log(zeroMatricThree([[0,2,5,2],[1,0,5,2],[5,4,6,1],[5,3,5,1]]))

// [0,2,5,2]
// [1,0,5,2]
// [5,4,6,1]
// [5,3,5,1]



// ================ Making it better? ================
// Can we use map or filter here?
// 