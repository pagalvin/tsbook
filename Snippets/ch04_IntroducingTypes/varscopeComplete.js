function getTemperatureLabel(forTemperature) {
    var errorResult = "ERROR: Failed to determine a temperature label!";
    var result;
    if (isNaN(forTemperature)) {
        result = errorResult;
    }
    else {
        var options = ["Cold", "Warm", "Hot"];
        result = forTemperature < 40 ? options[0] :
            forTemperature < 85 ? options[1] :
                options[3];
    }
    return result;
}
