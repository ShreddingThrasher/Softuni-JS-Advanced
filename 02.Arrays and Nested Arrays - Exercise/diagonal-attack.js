function attack(input){

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    matrix = new Array(input.length);

    for(let i = 0; i < input.length; i++){
        let row = input[i].split(' ');
        matrix[i] = [];
        for(let j = 0; j < row.length; j++){
            matrix[i].push(Number(row[j]));
        }
    }

    for(let i = 0; i < matrix.length; i ++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i == j){
                firstDiagonal += matrix[i][j];
            }
            if(i + j == matrix.length-1){
                secondDiagonal += matrix[i][j];
            }
        }
    }

    if(firstDiagonal == secondDiagonal){
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if(i != j && i + j != matrix.length-1){
                    matrix[i][j] = firstDiagonal;
                }
            }
        }
    }

    for(let i = 0; i < matrix.length; i++){
        console.log(matrix[i].join(' '));
    }
}