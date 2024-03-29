class Textbox {
    
    constructor(selector, regex){
        this._value = '';
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
    }

    get value(){
        return this._value;
    }

    set value(value){
        this._value = value;

        for (const element of this._elements) {
            element.value = this._value;
        }
    }

    get elements(){
        return this._elements;
    }

    isValid(){
        return !this._invalidSymbols.test(this._value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

for (const input of inputs) {
    input.addEventListener('click',function(){console.log(textbox.value);});
}
