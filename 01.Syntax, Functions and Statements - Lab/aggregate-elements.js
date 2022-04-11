function aggregateElements(arr){

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }

    let inverse = 0;

    for(let i = 0; i < arr.length; i++){

        let num = Number(arr[i]);

        inverse += 1 / num;
    }

    let concated = '';

    for (let i = 0; i < arr.length; i++) {
        concated += arr[i];
        
    }

    console.log(sum);
    console.log(inverse);
    console.log(concated);
}