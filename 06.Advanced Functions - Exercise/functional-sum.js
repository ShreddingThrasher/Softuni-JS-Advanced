function add(value){
    let result = value;

    function sum(num){
        result += num;
        return sum;
    }

    sum.toString = () => {
        return result;
    }

    return sum;
}