function mainGame(moves){
    
    let matrix = [[false, false, false],
                  [false, false, false],
                  [false, false, false]];

    let turn = 0;

    while(true){

        let currMove = moves.shift().split(' ');
        let x = Number(currMove[0]);
        let y = Number(currMove[1]);

        if(!checkCoordinates(x, y)){
            continue;
        }

        if(matrix[x][y] !== false){
                
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        if(turn % 2 === 0){

            matrix[x][y] = 'X';
        }
        else{
            matrix[x][y] = 'O';
        }

        if(checkRowsForWinner(matrix) || checkColsForWinner(matrix) || checkDiagonalsForWinner(matrix)){
    
            if(turn % 2 === 0){
                console.log('Player X wins!');
            }
            else{
                console.log('Player O wins!');
            }
    
            break;
        }
    
        turn++;

            
        if(!matrix.some(r => r.some(v => v === false)) || moves.length === 0){
            console.log('The game ended! Nobody wins :(');
            break;
        }
    }

    for(let i = 0; i < matrix.length; i++){
        console.log(matrix[i].join('\t'));
    }

    function checkCoordinates(x, y){
        
        if(x < 0 || x > 2 || y < 0 || y > 2){
            return false;
        }

        return true;
    }

    function checkRowsForWinner(matrix){

        for(let i = 0; i < matrix.length; i++){
            if(matrix[i][0] === 'X' && matrix[i][1] === 'X' && matrix[i][2] === 'X'){
                return true;
            }
            if(matrix[i][0] === 'O' && matrix[i][1] === 'O' && matrix[i][2] === 'O'){
                return true;
            }
        }
    
        return false;
    }
    
    function checkColsForWinner(matrix){
    
        for(let i = 0; i < matrix.length; i ++){
            if(matrix[0][i] === 'X' && matrix[1][i] === 'X' && matrix[2][i] === 'X'){
                return true;
            }
            if(matrix[0][i] === 'O' && matrix[1][i] === 'O' && matrix[2][i] === 'O'){
                return true;
            }
        }
    
        return false;
    }
    
    function checkDiagonalsForWinner(matrix){
    
        if(matrix[0][0] === 'X' && matrix[1][1] === 'X' && matrix[2][2] === 'X'){
            return true;
        }
        if(matrix[0][0] === 'O' && matrix[1][1] === 'O' && matrix[2][2] === 'O'){
            return true;
        }
        if(matrix[2][0] === 'X' && matrix[1][1] === 'X' && matrix[0][2] === 'X'){
            return true;
        }
        if(matrix[2][0] === 'O' && matrix[1][1] === 'O' && matrix[0][2] === 'O'){
            return true;
        }
    
        return false;
    }
}
