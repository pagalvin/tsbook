function myLogger(msgType: "INFO" | "ERROR", ...messages: any[]) {

    if (msgType === "INFO") {
        console.log(messages);
    }
    else  {
        // Save the details to local storage for future analysis/debugging
        localStorage.setItem("lastErrorMessage", JSON.stringify(messages));
        console.error(messages);
    }
}

myLogger("INFO","Greetings!");
myLogger("INFO", "Successfully saved the data, results:", {someResult: "", databaseResultCode: 1});
myLogger("ERROR", "ERROR: Failed to save the data, error details follow.", {errorDetails: "[some error details object goes here]"}, "Error occurred at `${new Date()}`");

