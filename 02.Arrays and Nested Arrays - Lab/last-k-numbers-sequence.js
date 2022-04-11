function solve(n, k){

    let arr = [1];

    for(let i = 0; i < n-1; i++){
        let sum = 0;
        for (let j = i; j > i-k; j--) {
            
            if(j < 0){
                break;
            }

            sum += arr[j];
        }

        arr.push(sum);
    }

    return arr;
}