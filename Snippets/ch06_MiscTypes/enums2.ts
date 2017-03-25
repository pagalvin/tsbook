
const enum constHttpStatus {
    OK = 200,
    GENERAL_SERVER_ERROR = 500,
    RESOURCE_NOT_FOUND = 304,
    FORBIDDEN = 403
}

function parseResult(resultCode: constHttpStatus) {

    if (resultCode === constHttpStatus.OK) {
        console.log("Success response");
    }

    else if (resultCode === constHttpStatus.FORBIDDEN) {
        console.log("Forbidden response.");
    }

    else {
        console.log("Some other response");
    }

}
