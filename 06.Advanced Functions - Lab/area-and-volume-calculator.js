function solve(area, vol, input){
    let resultArr = [];

    let inputArr = JSON.parse(input);

    for (const obj of inputArr) {
        let objArea = area.call(obj);
        let objVolume = vol.call(obj);
        resultArr.push({area: objArea, volume: objVolume});
    }

    return resultArr;
}