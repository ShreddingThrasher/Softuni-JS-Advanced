function solution(option){

    switch(option){
        case 'upvote': 
            upvote.call(this);
            break;
        case 'downvote': 
            downvote.call(this);
            break;
        case 'score':
            return score.call(this);
            break;
    }

    function upvote(){
        this.upvotes++;
    }

    function downvote(){
        this.downvotes++;
    }

    function score(){
        let totalVotes = this.upvotes + this.downvotes;
        let tallyTotalScore = this.upvotes - this.downvotes;
        let obfuscateAmount = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
        let rating = '';
        let reportArr = [];
        
        if(totalVotes < 10){
            rating = 'new';
        }
        else if(this.upvotes > totalVotes * 0.66){
            rating = 'hot';
        } else if(tallyTotalScore >= 0 && (this.upvotes > 100 || this.downvotes > 100)){
            rating = 'controversial';
        } else if(tallyTotalScore < 0){
            rating = 'unpopular'
        }

        if(totalVotes > 50){
            reportArr.push(this.upvotes + obfuscateAmount);
            reportArr.push(this.downvotes + obfuscateAmount);
        } else{
            reportArr.push(this.upvotes, this.downvotes);
        }

        reportArr.push(tallyTotalScore);
        reportArr.push(rating);

        return reportArr;
    }
}