
function getTempLabelTS(currentTempInCelsius: number): string {

    let result: string;
    
    if (currentTempInCelsius > 35 && currentTempInCelsius <= 40) {
        result = "Very warm";
    }
    
    else if (currentTempInCelsius > 40) {
        result = "Hot!";
    }
    
    else {
        result = "Unexpected temperature value.";
    }

    console.log(result);

    return result;

}

