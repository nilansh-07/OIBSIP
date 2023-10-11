function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var scale = document.getElementById('scale').value;
    var resultElement = document.getElementById('result');

    if (isNaN(inputTemp)) {
        resultElement.innerHTML = 'Please enter a valid temperature.';
        return;
    }

    var convertedTemp;

    switch (scale) {
        case 'celsius':
            convertedTemp = {
                celsius: inputTemp,
                fahrenheit: (inputTemp * 9/5) + 32,
                kelvin: inputTemp + 273.15
            };
            break;
        case 'fahrenheit':
            convertedTemp = {
                celsius: (inputTemp - 32) * 5/9,
                fahrenheit: inputTemp,
                kelvin: (inputTemp - 32) * 5/9 + 273.15
            };
            break;
        case 'kelvin':
            convertedTemp = {
                celsius: inputTemp - 273.15,
                fahrenheit: (inputTemp - 273.15) * 9/5 + 32,
                kelvin: inputTemp
            };
            break;
        default:
            resultElement.innerHTML = 'Invalid scale selected.';
            return;
    }

    resultElement.innerHTML = `Result: 
        Celsius: ${convertedTemp.celsius.toFixed(2)}°C, 
        Fahrenheit: ${convertedTemp.fahrenheit.toFixed(2)}°F, 
        Kelvin: ${convertedTemp.kelvin.toFixed(2)}K`;
}