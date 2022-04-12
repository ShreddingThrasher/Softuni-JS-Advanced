
function subSum(arr, start, end){

    if(!Array.isArray(arr)){
        return NaN;
    }
    
    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, arr.length - 1);

    let subNumbers = arr.slice(startIndex, endIndex+1);
    let sum = subNumbers.reduce((a, b) => a + Number(b), 0);

    return sum;
}

subSum([1, 2, 3, 4, 5, 6, 7], 0, 3);





module.exports = subSum;