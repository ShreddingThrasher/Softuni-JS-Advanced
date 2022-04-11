function wordsUppercase(str){

    let result = str.split(/[\W]+/).filter(w => w.length > 0);

    for(let i = 0; i < result.length; i++){

        result[i] = result[i].toUpperCase();
    }

    console.log(result.join(', '));
}