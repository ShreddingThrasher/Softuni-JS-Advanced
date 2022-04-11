function encodeAndDecodeMessages() {
    document.getElementsByTagName('button')[0].addEventListener('click', encodeAndSend);
    document.getElementsByTagName('button')[1].addEventListener('click', decodeMessage);
    let sendArea = document.getElementsByTagName('textarea')[0];
    let receiveArea = document.getElementsByTagName('textarea')[1];

    function encodeAndSend(){
        let message = sendArea.value;
        let encodedMessage = [];

        for(let i = 0; i < message.length; i++){
            let curr = message.charCodeAt(i);
            encodedMessage.push(String.fromCharCode(curr + 1));
            console.log(curr);
        }

        sendArea.value = '';
        receiveArea.value = encodedMessage.join('');
    }

    function decodeMessage(){
        let encodedText = receiveArea.value;
        let decodedMessage = [];

        for(let i = 0; i < encodedText.length; i++){
            let curr = encodedText.charCodeAt(i);
            decodedMessage.push(String.fromCharCode(curr - 1));
        }

        receiveArea.value = decodedMessage.join('');
    }
}