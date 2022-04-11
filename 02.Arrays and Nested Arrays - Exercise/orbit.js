function orbit(arr){

    let rows = arr[0];
    let cols = arr[1];
    let starRow = arr[2];
    let starCol = arr[3];

    let matrix = new Array(rows);

    for(let i = 0; i < matrix.length; i++){
        matrix[i] = new Array(cols);
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            matrix[i][j] = Math.max(Math.abs(i-starRow), Math.abs(j-starCol)) + 1;
        }
    }

    for(let i = 0; i < matrix.length; i++){
        console.log(matrix[i].join(' '));
    }
}