function masterChef(input, a, b, c, d, e){

    let num = Number(input);

    let arr = [a, b, c, d, e];

    for(let i = 0; i < arr.length; i++){

        if(arr[i] === 'chop'){
            num /= 2;
        }
        else if(arr[i] === 'dice'){
            num = Math.sqrt(num);
        }
        else if(arr[i] === 'spice'){
            num += 1;
        }
        else if(arr[i] === 'bake'){
            num *= 3;
        }
        else if(arr[i] === 'fillet'){
            let subtraction = 0.20 * num;
            num -= subtraction;
        }

        console.log(num);
    }
}