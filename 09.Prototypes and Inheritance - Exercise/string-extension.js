(function solve(){
    String.prototype.ensureStart = function(str){
        if(this.startsWith(str)){
            return this.toString();
        } else{
            return str + this.toString();
        }
    }

    String.prototype.ensureEnd = function(str){
        if(this.endsWith(str)){
            return this.toString();
        } else{
            return this.toString() + str;
        }
    }

    String.prototype.isEmpty = function(){
        
        if(this.length === 0){
            return true;
        } 

        return false;
    }

    String.prototype.truncate = function(n){

        if(n < 4){

            return '.'.repeat(n);

        } else if(this.length <= n){

            return this.toString();

        } else{

            let lastWhitespace = this.toString().substring(0, n - 2).lastIndexOf(" ");

            return lastWhitespace !== -1 
            ? `${this.toString().substring(0, lastWhitespace)}...` 
            : `${this.toString().substring(0, n - 3)}...`;
        }
    }

    String.format = function(string, ...args){

        for (let i = 0; i < args.length; i++) {
            string = string.replace(`{${i}}`, args[i]);
        }

        return string;
    }
})();