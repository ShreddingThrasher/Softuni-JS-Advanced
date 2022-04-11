function evenPositionElement(arr){

    let result;

    let resultArr = new Array();
    
    for(let i = 0; i < arr.length; i++){

        if(i % 2 === 0){

            resultArr.push(arr[i]);
        }
    }

    return resultArr.join(' ');
}