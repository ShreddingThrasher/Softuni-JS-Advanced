function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let tableData = Array.from(document.getElementsByTagName('tbody')[0].children);
    let searchField = document.getElementById('searchField');

    function onClick() {
        let searchPattern = searchField.value;
        searchField.value = '';

        for (const data of tableData) {

            data.className = '';

            if(data.innerHTML.includes(searchPattern)){
                console.log(data);
                data.className = 'select';
            }
        }
    }
}