function circleArea(singleArg){

    let argType = typeof(singleArg);

    if(argType === 'number'){

        let area = Math.PI * (singleArg * singleArg);
        console.log(area.toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${argType}.`);
    }

}