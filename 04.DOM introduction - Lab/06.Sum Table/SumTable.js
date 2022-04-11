function sumTable() {
    let prices = document.getElementsByTagName('td');
    let total = 0;
    for(let i = 0; i < prices.length; i++){
        if(i % 2 != 0){
            total += Number(prices[i].innerText);
        }
    }

    document.getElementById('sum').innerText = total;
}