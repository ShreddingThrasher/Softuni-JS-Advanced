function biggestElement(matrix){

    let biggest = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < matrix.length; i++){

        for(let j = 0; j < matrix[i].length; j++){

            if(matrix[i][j] > biggest){
                biggest = matrix[i][j];
            }
        }
    }

    return biggest;
}