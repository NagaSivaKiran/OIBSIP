document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
    var temperature = parseFloat(document.getElementById("Number").value);
    var unitSelection = document.getElementById("unitSelection").value;
    var result = document.getElementById("result");

    if (unitSelection === 'fahrenheit') {
        var celsius = (temperature - 32) / 1.8;
        result.value = celsius.toFixed(1) + " °C";
    } else if (unitSelection === 'celsius') {
        var fahrenheit = (temperature * 1.8) + 32;
        result.value = fahrenheit.toFixed(1) + " °F";
    }
}

function clearForm() {
    document.getElementById('Number').value = '';
    document.getElementById('result').value = '';
}
