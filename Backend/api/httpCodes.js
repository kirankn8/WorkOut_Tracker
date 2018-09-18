var httpStatusObj = function (msg) {
    return {
        msg: msg
    }
}

var httpMethods = {
    'GET': 0,
    'POST': 1,
    'PUT': 2,
    'PATCH': 3,
    'DELETE': 4,
}

var httpStatusCode = function (status_code, method) {
    switch (status_code) {
        case 200:
            switch (httpMethods[method]) {
                case 0: return httpStatusObj("OK");
                    break;
                case 1: return httpStatusObj("Object recieved successfully");
                    break;
                case 2: return httpStatusObj("Object updated successfully");
                    break;
                case 3: return httpStatusObj("Object patched successfully");
                    break;
                case 4: return httpStatusObj("Object deleted successfully");
                    break;
                default: return httpStatusObj("OK")
            }
            break;
        case 201: return httpStatusObj("Created")
            break;
        case 202: return httpStatusObj("Accepted")
            break;
        case 204: return httpStatusObj("No Content")
            break;
        case 301: return httpStatusObj("Permanently Moved")
            break;
        case 302: return httpStatusObj("Found")
            break;
        case 303: return httpStatusObj("See Other")
            break;
        case 304: return httpStatusObj("Not Modified")
            break;
        case 307: return httpStatusObj("Temporary Redirect")
            break;
        case 400: return httpStatusObj("Bad Request")
            break;
        case 401: return httpStatusObj("Unauthorized")
            break;
        case 403: return httpStatusObj("Forbidden")
            break;
        case 404: return httpStatusObj("Not Found")
            break;
        case 405: return httpStatusObj("Method Not Allowed")
            break;
        case 406: return httpStatusObj("Not Acceptable")
            break;
        case 412: return httpStatusObj("Precondition Failed")
            break;
        case 415: return httpStatusObj("Unsupported Media Type")
            break;
        case 500: return httpStatusObj("Internal Server Error")
            break;
        case 501: return httpStatusObj("Not Implemented")
            break;
        default:
            switch (status_code / 100) {
                case 1: return httpStatusObj("Communicates transfer protocol-level information.")
                    break;
                case 2: return httpStatusObj("Indicates that the client’s request was accepted successfully.")
                    break;
                case 3: return httpStatusObj("Indicates that the client must take some additional action in order to complete their request.")
                    break;
                case 4: return httpStatusObj("This category of error status codes points the finger at clients.")
                    break;
                case 5: return httpStatusObj("The server takes responsibility for these error status codes.")
                    break;
                default: return httpStatusObj("Unrecognized Status code")
            }
    }
}

module.exports = httpStatusCode;