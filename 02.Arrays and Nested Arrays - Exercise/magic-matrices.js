function magicMatrix(matrix){

    let magic = true;
    let row = 0;

    for (let i = 0; i < matrix.length; i++) {
        row += matrix[0][i];
        
    }

    for (let i = 0; i < matrix.length; i++) {
        
        let currRow = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            
            currRow += matrix[i][j];
        }

        if(currRow != row){
            magic = false;
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {

        let currCol = 0;
        
        for (let j = 0; j < matrix.length; j++) {
            
            currCol += matrix[j][i];
            
        }

        if(currCol != row){
            magic = false;
        }
        
    }

    return magic;
}