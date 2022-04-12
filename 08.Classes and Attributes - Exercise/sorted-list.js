
class List {
    constructor(){
        this.items = [];
        this.size = this.items.length;
    }

    add(element) {
        this.items.push(element);
        this.items = this.items.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if(index < 0 || index >= this.items.length){
            throw new Error('Invalid index');
        }

        this.items.splice(index, 1);
        this.size--;
    }

    get(index) {
        if(index < 0 || index >= this.items.length){
            throw new Error('Invalid index');
        }

        return this.items[index];
    }
}

let list = new List();
console.log(list.size);
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));