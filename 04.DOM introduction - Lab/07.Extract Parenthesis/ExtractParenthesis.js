function extract(content) {
    const input = document.getElementById(content).textContent;
    let regex = /\([A-Za-z ]+\)/g;

    let result = input.match(regex).join('; ');

    while(result.includes('(') || result.includes(')')){
        result = result.replace('(', '');
        result = result.replace(')', '');
    }
    
    return result;
}