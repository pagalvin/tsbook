function getTemperatureLabel (forTemperature: number) {

    const errorResult = "ERROR: Failed to determine a temperature label!";

    let result: string;

    if (isNaN(forTemperature)) {
        result = errorResult;    
    }
    else {
        let options: string[] = ["Cold", "Warm", "Hot"];

        result = forTemperature < 40 ? options[0] :
                    forTemperature < 85 ? options[1] : 
                        options[3];
                        
    }

    return result;

}