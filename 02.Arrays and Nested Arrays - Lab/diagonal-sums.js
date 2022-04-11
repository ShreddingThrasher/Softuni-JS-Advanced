function diagonalSum(matrix){

    let firstSum = 0;
    let secondSum = 0;

    //first
    for(let i = 0; i < matrix.length; i++){

        firstSum += matrix[i][i];
    }

    //second

    let row = 0;

    for(let i = matrix.length - 1; i >= 0; i--){

        secondSum += matrix[row][i];
        row++;
    }
    console.log(`${firstSum} ${secondSum}`);
}