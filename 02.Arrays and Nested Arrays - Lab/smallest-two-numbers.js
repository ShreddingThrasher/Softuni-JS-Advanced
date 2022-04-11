function smallestTwoNumbers(arr){

    arr.sort(function(a, b) {
        return a - b;
      });

    console.log(`${arr[0]} ${arr[1]}`);  
}