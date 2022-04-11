function fromJsonToHtmlTable(jsonInput){
    let arr = JSON.parse(jsonInput);
    let result = ['<table> '];
    result.push(createThRow(arr[0]));

    for(let i = 0; i < arr.length; i++){
        result.push(createTdRow(arr[i]));
    }

    result.push('</table>');

    console.log(result.join('\n'));

    function createThRow(obj){
        let thRow = '   <tr>';
        for (const key in obj) {
            thRow += `<th>${escapeHtml(key)}</th>`;
        }
        thRow += '</tr>'
        return thRow;
    }

    function createTdRow(obj){
        let tdRow = '   <tr>';

        for (const key in obj) {
            tdRow += `<td>${escapeHtml(obj[key])}</td>`;
        }

        tdRow += '</tr>';
        return tdRow;
    }

    function escapeHtml(unsafe){

        return unsafe.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
}