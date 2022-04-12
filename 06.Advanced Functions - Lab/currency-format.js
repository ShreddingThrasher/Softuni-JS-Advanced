function createFormatter(separator, symbol, symbolFirst, formatter){
    function format(value){
        return formatter(separator, symbol, symbolFirst, value);
    }

    return format;
}