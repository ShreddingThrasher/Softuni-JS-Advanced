function solve() {
    let answers = document.querySelectorAll('.answer-wrap');
    let questionSections = document.getElementsByTagName('section');
    let showIndex = 0;
    let correctAnswers = 0;

    for(let i = 0; i < answers.length; i++){

        if(i == 0 || i == 3 || i == 4){
            answers[i].addEventListener('click', correctAnswer);
        } else{
            answers[i].addEventListener('click', wrongAnswer);
        }
    }
    
    function correctAnswer(event){
        correctAnswers++;
        showIndex++;
        event.currentTarget.parentNode.parentNode.parentNode.style.display = 'none';
        
        if(showIndex < questionSections.length){
            questionSections[showIndex].style.display = 'block';
        } else{
            resultFunction();
        }
    }

    function wrongAnswer(event){
        showIndex++;
        event.currentTarget.parentNode.parentNode.parentNode.style.display = 'none';
        
        if(showIndex < questionSections.length){
            questionSections[showIndex].style.display = 'block';
        } else{
            resultFunction();
        }
    }

    function resultFunction(){
        let resultArea = document.getElementById('results');
        let result = '';

        if(correctAnswers == 3){
            result = 'You are recognized as top JavaScript fan!';
        } else{
            result = `You have ${correctAnswers} right answers`;
        }

        resultArea.querySelector('h1').textContent = result;
        resultArea.style.display = 'block';
    }
}
