function pieceOfPie(arr, start, end){
    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end);

    let result = [];

    for(let i = startIndex; i <= endIndex; i++){
        result.push(arr[i]);
    }

    return result;
}