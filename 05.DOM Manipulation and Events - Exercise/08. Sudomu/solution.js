function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', quickCheck)
    document.getElementsByTagName('button')[1].addEventListener('click', clearTable);

    function clearTable(){
        let matrix = [];
        for (const row of document.getElementsByTagName('tbody')[0].children) {
            matrix.push(row.children);
        }

        for(let row = 0; row < matrix.length; row++){
            for(let col = 0; col < matrix[row].length; col++){
                matrix[row][col].children[0].value = '';
            }
        }

        let table = document.querySelector('table');
        let paragraphElement = document.querySelector('#check p');

        table.style.border = 'none';
        paragraphElement.style.color = '';
        paragraphElement.textContent = '';
    }

    function quickCheck(){
        let matrix = [];

        for (const row of document.getElementsByTagName('tbody')[0].children) {
            matrix.push(row.children);
        }

        //check rows
        for(let row = 0; row < matrix.length; row++){

            let check = [];

            for(let col = 0; col < matrix[row].length; col++){

                if(check.includes(matrix[row][col].children[0].value)){

                    nonSolvedSudomu();
                    return;

                } else{

                    check.push(matrix[row][col].children[0].value);
                }
            }
        }

        //check cols
        for(let col = 0; col < matrix[0].length; col++){

            let check = [];

            for(let row = 0; row < matrix.length; row++){

                if(check.includes(matrix[row][col].children[0].value)){

                    nonSolvedSudomu();
                    return;

                } else {

                    check.push(matrix[row][col].children[0].value);

                }
            }
        }

        solvedSudomu();
    }

    function solvedSudomu(){
        let table = document.querySelector('table');
        let paragraphElement = document.querySelector('#check p');

        table.style.border = '2px solid green';
        paragraphElement.style.color = 'green';
        paragraphElement.textContent = 'You solve it! Congratulations!';
    }

    function nonSolvedSudomu(){
        let table = document.querySelector('table');
        let paragraphElement = document.querySelector('#check p');

        table.style.border = '2px solid red';
        paragraphElement.style.color = 'red';
        paragraphElement.textContent = 'NOP! You are not done yet...'
    }
}