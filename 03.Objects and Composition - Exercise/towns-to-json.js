
function townsToJson(input){
    let arr = [];

    for(let i = 1; i < input.length; i++){
        let curr = input[i].split('|').filter(n => n);
        let latitude = Number(curr[1]).toFixed(2);
        let longitude = Number(curr[2]).toFixed(2);

        const currTown = {
            Town: curr[0].trim(),
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }
        
        arr.push(currTown);

    }

    return JSON.stringify(arr);
}

console.log(townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']));