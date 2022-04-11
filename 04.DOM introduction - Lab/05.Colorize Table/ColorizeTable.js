function colorize() {
    // TODO
    let rows = document.getElementsByTagName('tr');

    for(let i = 1; i < rows.length; i++){
        if(i % 2 != 0){
            rows[i].style.backgroundColor = 'Teal';
        }
    }
}