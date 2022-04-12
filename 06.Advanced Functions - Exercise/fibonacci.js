function getFibonator(){

    let first = 0;
    let second = 1;
    let currFib = 0;

    return function(){
        currFib = first + second;
        first = second;
        second = currFib;

        return first;
    }
}