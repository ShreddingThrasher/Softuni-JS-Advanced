function solution(){

    let text = '';

    let obj = {
        append: (str) => {
            text += str;
        },
        removeStart: (n) => {
            text = text.substr(n);
        },
        removeEnd: (n) => {
            text = text.substr(0, text.length - n);
        },
        print: () => {
            console.log(text);
        }
    }

    return obj;
}