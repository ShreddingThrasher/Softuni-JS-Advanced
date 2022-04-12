function extensibleObject(){

    const prototype = Object.getPrototypeOf(this);

    prototype.extend = function(template) {

        let keys = Object.keys(template);

        for (const key of keys) {
            
            if(typeof(template[key]) === 'function'){

                prototype[key] = template[key];

            } else{

                this[key] = template[key];
            }
        }
    }

    return this;
}