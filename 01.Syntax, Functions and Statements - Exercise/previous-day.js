function previousDay(year, month, day){

    let yearNum = Number(year);
    let monthNum = Number(month);
    let dayNum = Number(day);

    let checkMonth = false;

    if(dayNum === 1){

        checkMonth = true;
        dayNum = 30;
        monthNum--;

        if(monthNum === 0){
            monthNum = 12;
            yearNum--;
        }
    }
    else{
        dayNum--;
    }
    
    let longMonths = [1, 3, 5, 7, 8, 10, 12];

    if(checkMonth){
        if(longMonths.includes(monthNum)){
            dayNum = 31;
        }
        else if(monthNum === 2){
            if(yearNum % 4 === 0){
                dayNum = 29;
            }
            else{
                dayNum = 28;
            }
        }
    }

    console.log(`${yearNum}-${monthNum}-${dayNum}`);
}