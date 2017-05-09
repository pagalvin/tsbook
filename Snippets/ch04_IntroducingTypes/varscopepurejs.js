
function getTempLabel(currentTempInCelsius) {

    if (currentTempInCelsius > 35 && currentTempInCelsius <= 40) {
        result = "Very warm";
    }
    
    else if (currentTempInCelsius > 40) {
        result = "Hot!";
    }
    
    else {
        var result = "Unexpected temperature value.";
    }

    console.log(result);

    return result;

}

