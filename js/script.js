
/**
 * 
 * @author Niaz
 * @name script.js
 * @description Melakukan kalkulasi suhu Celsius, Fahrenheit, Reamur, dan Kelvin
 *  
 */

const buttonConvert = document.getElementById("result")
const buttonReset = document.getElementById("reset")

buttonConvert.addEventListener("click", () => {
    
    // Memanggil input dan selectOne dari element menggunakan ID HTML
    const input = parseFloat(document.getElementById("input").value)
    const selectOne = document.getElementById("selection_1").value

    // Memanggil output dan selectTwo dari element menggunakan ID HTML
    const selectTwo = document.getElementById("selection_2").value

    // Lihat bila satuan asal sama dengan satuan tujuan, bila iya jalankan alert
    if (selectOne  === selectTwo) {
        alert("Satuan asal dan tujuan tidak boleh sama!")
        return
    }

    // Dapatkan hasil dari kalkulasi
    let result = temperatureConverter(input, selectOne, selectTwo)

    // Pindahkan hasil kalkulasi kedalam element HTML melalui ID output
    document.getElementById('output').value = result
})

buttonReset.addEventListener('click', () => {

    // Melakukan reset ke value awal atau semula
    document.getElementById('input').value = 0;
    document.getElementById('output').value = "";
    
})

/**
 * 
 * @description Kalkulasi celsius ke Fahrenheit, Reamur, dan Kelvin
 * @type {Number}
 * 
 */

const celsiusToFahrenheit = (cel => {
    let fahrenheit = (cel * 9/5) + 32
    return fahrenheit
})

const celsiusToReamur = (cel => {
    let reamur = (cel * 4/5)
    return reamur
})

const celsiusToKelvin = (cel => {
    let kelvin = (cel + 273)
    return kelvin
})

/**
 * 
 * @description Kalkulasi Fahrenheit ke celsius, Reamur, dan Kelvin
 * @type {Number}
 * 
 */

const fahrenheitToCelsius = (fah => {
    let celsius = (fah - 32) * 5/9
    return celsius
})

const fahrenheitToReamur = (fah => {
    let reamur = (fah * 4/9) - 32
    return reamur
})

const fahrenheitToKelvin = (fah => {
    let kelvin = 5/9 * (fah - 32) +273
    return kelvin
})

/**
 * 
 * @description Kalkulasi Reamur ke celsius, Fahrenheit, dan Kelvin
 * @type {Number}
 * 
 */

const reamurToCelsius = (rea => {
    let celsius = (5/4 * rea)
    return celsius
})

const reamurToFahrenheit = (rea => {
    let fahrenheit = (9/4 * rea) + 32
    return fahrenheit
})

const reamurToKelvin = (rea => {
    let kelvin = (5/4 * rea) + 273
    return kelvin
})

/**
 * 
 * @description Kalkulasi Kelvin ke celsius, Fahrenheit, dan Reamur
 * @type {Number}
 * 
 */

const kelvinToCelsius = (kelv => {
    let celsius = kelv - 273
    return celsius
})

const kelvinToFahrenheit = (kelv => {
    let fahrenheit = 9/5 * (kelv - 273) + 32
    return fahrenheit
})

const kelvinToReamur = (kelv => {
    let reamur = 4/5 * (kelv - 273)
    return reamur
})

function temperatureConverter(input, selectOne, selectTwo) {
    let result

    switch (selectOne) {
        case "Celsius":

            switch (selectTwo) {
                case "Fahrenheit":
                    result = celsiusToFahrenheit(input)
                    break;

                case "Reamur":
                    result = celsiusToReamur(input)
                    break;

                case "Kelvin":
                    result = celsiusToKelvin(input)
                    break;

                default:
                    result = "error"
                    break;
            }

            break;

        case "Fahrenheit":

            switch (selectTwo) {
                case "Celsius":
                    result = fahrenheitToCelsius(input)
                    break;

                case "Reamur":
                    result = fahrenheitToReamur(input)
                    break;

                case "Kelvin":
                    result = fahrenheitToKelvin(input)
                    break;

                default:
                    result = "error"
                    break;
            }

            break;

        case "Reamur":

            switch (selectTwo) {
                case "Celsius":
                    result = reamurToCelsius(input)
                    break;

                case "Fahrenheit":
                    result = reamurToFahrenheit(input)
                    break;

                case "Kelvin":
                    result = reamurToKelvin(input)
                    break;

                default:
                    result = "error"
                    break;
            }

            break;

        case "Kelvin":

            switch (selectTwo) {
                case "Celsius":
                    result = kelvinToCelsius(input)
                    break;

                case "Fahrenheit":
                    result = kelvinToFahrenheit(input)
                    break;

                case "Reamur":
                    result = kelvinToReamur(input)
                    break;

                default:
                    result = "error"
                    break;
            }

            break;
    
        default:
            break;
    }

    return result
}