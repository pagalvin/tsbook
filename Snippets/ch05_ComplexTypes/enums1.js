var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["GENERAL_SERVER_ERROR"] = 500] = "GENERAL_SERVER_ERROR";
    HttpStatus[HttpStatus["RESOURCE_NOT_FOUND"] = 304] = "RESOURCE_NOT_FOUND";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
})(HttpStatus || (HttpStatus = {}));
function parseResult(resultCode) {
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
