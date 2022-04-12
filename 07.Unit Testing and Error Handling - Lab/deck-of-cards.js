
function printDeckOfCards(cards){
    console.log('x');

    function playingCards(face, suit){

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
    
        if(!faces.includes(face) || !Object.keys(suits).includes(suit)){
            throw new Error(`Invalid card: ${face}${suit}`);
        }
    
        const card = {
            face,
            suit,
            toString() {
                return this.face + suits[this.suit];
            }
        }
    
        return card;
    }

    for (const card of cards) {
        console.log(playingCards(card[0], card[1]));
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C'])