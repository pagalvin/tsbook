function parseResult(resultCode) {
    if (resultCode === 200 /* OK */) {
        console.log("Success response");
    }
    else if (resultCode === 403 /* FORBIDDEN */) {
        console.log("Forbidden response.");
    }
    else {
        console.log("Some other response");
    }
}
