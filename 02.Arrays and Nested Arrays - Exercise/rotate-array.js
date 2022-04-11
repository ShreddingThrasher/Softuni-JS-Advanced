function rotateArray(arr, rotations){
    let r = Number(rotations);

    for (let i = 0; i < r; i++) {
        let last = arr.pop();
        arr.unshift(last);        
    }

    console.log(arr.join(' '));
}