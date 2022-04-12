
class Stringer {

    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        if(this.innerLength - length < 0){
            this.innerLength = 0;
            return;
        }

        this.innerLength -= length;
    }

    toString(){
        if(this.innerLength < this.innerString.length){
            return this.innerString.substr(0, this.innerLength) + '...';
        }

        return this.innerString.substr(0, this.innerLength);
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
console.log('x');
console.log(test.innerLength);
test.decrease(3);
console.log(test.toString()); // Te...
console.log('x');
console.log(test.innerLength);
test.decrease(5);
console.log(test.toString()); // ...
console.log('x');
console.log(test.innerLength);
test.increase(4); 
console.log(test.toString()); // Test