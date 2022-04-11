function printSquare(symbol){

    if(symbol === undefined){
        let strElement = '* ';
        let row = strElement.repeat(5);

        for (let i = 0; i < 5; i++) {
            console.log(row);           
        }
    }

    else{
        let num = Number(symbol);
        
        let strElement = '* ';
        let row = strElement.repeat(num);

        for(let i = 0; i < num; i++){
            console.log(row);
        }
    }
}