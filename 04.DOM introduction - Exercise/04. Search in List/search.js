function search() {
    let towns = Array.from(document.getElementById('towns').children);
    let searchText = document.getElementById('searchText').value;
    let result = document.getElementById('result');
    let matches = 0;

    for (const town of towns) {

        town.style.textDecoration = '';
        town.style.fontWeight = '';
        
        if(town.textContent.includes(searchText)){
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            matches++;
        }
    }

    result.textContent = `${matches} matches found`;
}
