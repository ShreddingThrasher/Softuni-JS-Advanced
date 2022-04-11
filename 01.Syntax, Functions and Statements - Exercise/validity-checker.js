function checker(x1, y1, x2, y2){

    let firstCheck = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));

    if(Number.isInteger(firstCheck)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let secondCheck = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));

    if(Number.isInteger(secondCheck)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let lastCheck = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    if(Number.isInteger(lastCheck)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else{
        console.log(`{${x2}, ${y2}} to {${x2}, ${y2}} is invalid`);
    }
}