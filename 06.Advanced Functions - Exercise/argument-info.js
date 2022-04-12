function argumentInfo(...input){

    let result = {};

    for (const arg of input) {

        console.log(`${typeof(arg)}: ${typeof(arg) !== 'object' ? arg : JSON.stringify(arg)}`);
        
        let key = typeof(arg);
        
        if(!result[key]){
            result[key] = 0;
        }

        result[key]++;
    }

    let sorted = Object.fromEntries(Object.entries(result).sort(([, a], [, b]) => b - a));

    for (const iterator in sorted) {
        console.log(`${iterator} = ${sorted[iterator]}`);
    }

}