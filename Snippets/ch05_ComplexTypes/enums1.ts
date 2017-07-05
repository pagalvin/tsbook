
enum HttpStatus {
    OK = 200,
    GENERAL_SERVER_ERROR = 500,
    RESOURCE_NOT_FOUND = 304,
    FORBIDDEN = 403
}

function parseResult(resultCode: HttpStatus) {

    if (resultCode === HttpStatus.OK) {
        console.log("Success response");
    }

    else if (resultCode === HttpStatus.FORBIDDEN) {
        console.log("Forbidden response.");
    }

    else {
        console.log("Some other response");
    }

}
