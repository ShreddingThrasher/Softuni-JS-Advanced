function sortingNumberOtherSolution(arr){

    arr.sort(function(a, b){return a-b});

    let result = [];

    if(arr.length % 2 == 0){
        for(let i = 0; i < (arr.length / 2); i++){
            result.push(arr[i]);
            result.push(arr[arr.length - 1 - i]);
        }
    }
    else{
        let x = Math.floor(arr.length / 2);

        for(let i = 0; i < x; i++){
            result.push(arr[i]);
            result.push(arr[arr.length - 1 - i]);
        }

        result.push(arr[x]);
    }

    return result;
}