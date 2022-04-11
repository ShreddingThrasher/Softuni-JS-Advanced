function addAndRemoveElements(commands){
    let result = [];

    for(let i = 0; i < commands.length; i++){
        if(commands[i] === 'add'){
            result.push(i+1);
        }
        else if(commands[i] === 'remove'){
            result.pop();
        }
    }

    if(result.length === 0){
        console.log('Empty');
    }
    else{
        for(let i = 0; i < result.length; i++){
            console.log(result[i]);
        }
    }
}