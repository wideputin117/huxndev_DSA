// finding the largest element from 2 dimensional array

/**
 * Approach: The idea is to traverse the matrix using two nested loops, one for rows and one for columns, 
 * and find the maximum element. Initialize a variable maxElement with a minimum value and traverse the matrix 
 * and compare every time if the current element is greater than a maxElement. If yes then update maxElement with the current element.
 */

// initializing the size of the matrix rows and columns

let R = 4;
let C = 4;

const maxVal =(mat)=>{

    // having max element with minimum value
    let maxElement = Number.MIN_VALUE;

    // USING TWO For Nested loops

    for(let i =0; i< R;i++){
        for(let j =0; j<C; j++){
            if(mat[i][j]>maxElement){
                maxElement = mat[i][j];
            }
        }
    }
    return maxElement;
}

const mat = [[2,1,3,4],
[23,11,4,5],[21,25,6,12,24],[33,21,33,5]]
const answer = maxVal(mat);
console.log(answer);