function solve() {
    let inputField = document.getElementById('input');
    let outputDiv = document.getElementById('output');

    let sentencesArr = inputField.value.split('.').filter(x => x.length > 0);
    console.log(sentencesArr);

    while(sentencesArr.length > 0){
        let p = document.createElement('p');

        for(let i = 0; i < 3; i++){

            if(sentencesArr.length === 0){
                break;
            }
            p.textContent += sentencesArr[0] + '.';
            sentencesArr.shift();
        }

        outputDiv.appendChild(p);
    }
}