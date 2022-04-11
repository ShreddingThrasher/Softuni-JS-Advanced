function printEveryNthElementFromAnArray(arr, n){
    let result = [];

    let increase = Number(n);

    for(let i = 0; i < arr.length; i += increase){
        result.push(arr[i]);
    }

    return result;
}