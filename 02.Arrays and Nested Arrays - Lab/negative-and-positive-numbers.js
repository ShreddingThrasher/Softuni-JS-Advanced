function negativeAndPositeveNumbers(input){

    let arr = new Array();

    for(let i = 0; i < input.length; i++){

        let curr = Number(input[i]);

        if(curr < 0){
            arr.unshift(curr);
        }
        else{
            arr.push(curr);
        }
    }

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}