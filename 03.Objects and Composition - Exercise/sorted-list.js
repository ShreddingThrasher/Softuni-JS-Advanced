
function createSortedList(){
    
    const sortedList = [];

    const list = {
        add: function(item){
            sortedList.push(item);
            sortedList.sort((a, b) => a - b);
        },
        remove: function(index){
            if(index < 0 || index >= sortedList.length){
                return;   
            }

            sortedList.splice(index, 1);
            sortedList.sort((a, b) => a - b);
        },
        get: function(index){
            if(index >= 0 && index < sortedList.length){
                return sortedList[index];
            }
        },
        get size(){
            return sortedList.length;
        }
    }

    return list;
}

let list = createSortedList();
list.add(5);
console.log(list.size);
list.add(6);
console.log(list.size);
list.add(7);
console.log(list.size);
console.log(list.get(1)); 
list.remove(1);
console.log(list.size);
console.log(list.get(1));
console.log(list.size);
