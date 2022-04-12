
function requestValidator(httpRequestObject){

    const errorMessage = 'Invalid request header: Invalid ';
    let methodRegex = /^(GET|POST|DELETE|CONNECT)$/;
    let uriRegex = /^[a-z0-9\.]+$/
    let versionRegex = /^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0)$/
    let messageCheckRegex = /[\<\>\\\&'"]+/

    //check method
    if(!httpRequestObject.method || !httpRequestObject.method.match(methodRegex)){
        throw new Error(errorMessage + 'Method');
    }

    //check uri
    if(!httpRequestObject.uri || !httpRequestObject.uri.match(uriRegex)){
        throw new Error(errorMessage + 'URI');
    }

    //check version
    if(!httpRequestObject.version || !httpRequestObject.version.match(versionRegex)){
        throw new Error(errorMessage + 'Version');
    }

    //check message
    if(!httpRequestObject.hasOwnProperty('message') || messageCheckRegex.test(httpRequestObject.message)){
        throw new Error(errorMessage + 'Message');
    }

    return httpRequestObject;
}

let obj = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

console.log(requestValidator(obj));