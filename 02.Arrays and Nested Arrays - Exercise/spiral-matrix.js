function spiralMatrix(x, y){

    let rows = Number(x);
    let cols = Number(y);
    let matrix = new Array(rows);

    for (let i = 0; i < matrix.length; i++) {

        matrix[i] = new Array(cols);
        
    }

    let startRow = 0;
    let endRow = matrix.length - 1;
    let startCol = 0;
    let endCol = matrix.length - 1;

    let value = 1;


    while(startRow <= endRow && startCol <= endCol){

        for(let i = startCol; i <= endCol; i++){
            matrix[startRow][i] = value;
            value++;
        }

        startRow++;

        for(let i = startRow; i <= endRow; i++){
            matrix[i][endCol] = value;
            value++;
        }

        endCol--;

        for(let i = endCol; i >= startCol; i--){
            matrix[endRow][i] = value;
            value++;
        }
        
        endRow--;

        for(let i = endRow; i >= startRow; i--){
            matrix[i][startCol] = value;
            value++;
        }

        startCol++;
    }

    for(let i = 0; i < matrix.length; i++){
        console.log(matrix[i].join(' '));
    }
}
