function solution(initialNumber){
    let obj = {
        number: initialNumber,
        add: function(num){
            return this.number + num;
        }
    }

    return obj.add.bind(obj);
}