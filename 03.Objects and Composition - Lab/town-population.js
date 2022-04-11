function townPopulation(arr){
    const towns = {};

    for (const town of arr) {
        let curr = town.split(' <-> ');
        if(Object.keys(towns).includes(curr[0])){
            towns[curr[0]] += Number(curr[1]);
        } else{
            towns[curr[0]] = Number(curr[1]);
        }
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}