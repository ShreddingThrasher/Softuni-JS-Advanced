function biggerHalf(arr){
    arr.sort(function(a, b) {
        return a - b;
    });

    if(arr.length % 2 != 0){
        return arr.slice(Math.floor(arr.length / 2));
    }
    else{
        return arr.slice(arr.length / 2);
    }
}