function walkingTime(steps, stepLength, speed){

    let distance = steps * stepLength;

    let breakMinutes = Math.floor(distance / 500);

    let timeInSeconds = ((distance / 1000) / speed) * 3600;

    let seconds = Math.round(timeInSeconds % 60);
    let minutes = Math.floor(timeInSeconds / 60) + breakMinutes;
    let hours = Math.floor(timeInSeconds / 3600);

    let result = '';

    if(hours > 10){
        result += `${hours}:`
    }
    else{
        result += `0${hours}:`
    }

    if(minutes > 10){
        result += `${minutes}:`
    }
    else{
        result += `0${minutes}:`
    }

    if(seconds > 10){
        result += `${seconds}`
    }
    else{
        result += `$0${seconds}`
    }

    console.log(result);
}