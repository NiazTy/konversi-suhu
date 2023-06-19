
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
    const output = document.getElementById("output")
    const selectTwo = document.getElementById("selection_2").value

    // Lakukan pengecekan jika input adalah NaN (Not a Number) maka beri tahu user
    if (isNaN(input)) {
        document.getElementById("error").innerHTML = `* Masukkan nilai dalam bentuk angka!`
        return
      // Lakukan pengecekan jika selectOne sama dengan selectTwo maka beri tahu user  
    } else if (selectOne === selectTwo) {
        document.getElementById("error").innerHTML = `* Satuan asal dan tujuan tidak boleh sama!`
        return
    }

    // Dapatkan hasil dari kalkulasi
    let result = temperatureConverter(input, selectOne, selectTwo).toFixed(2)

    // Pindahkan hasil kalkulasi kedalam element HTML melalui ID output
    output.value = result

    // Mengubah isi elemen dengan ID howto sesuai dengan rumus konversi yang digunakan
    let formula = getConvertionFormula(input, selectOne, result, selectTwo)
    document.getElementById("howto").innerHTML = formula
})

buttonReset.addEventListener("click", () => {

    // Melakukan reset ke value awal atau semula
    output.value = 32
    document.getElementById("input").value = 0
    document.getElementById("howto").innerHTML = `(0°C × 9/5) + 32 = 32°F`
    document.getElementById("error").innerHTML = ``
    
})

/**
 * 
 * @description Kalkulasi celsius ke Fahrenheit, Reamur, dan Kelvin
 * @returns {Number}
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
    let kelvin = (cel + 273.15)
    return kelvin
})

/**
 * 
 * @description Kalkulasi Fahrenheit ke celsius, Reamur, dan Kelvin
 * @returns {Number}
 * 
 */

const fahrenheitToCelsius = (fah => {
    let celsius = (fah - 32) * 5/9
    return celsius
})

const fahrenheitToReamur = (fah => {
    let reamur = (fah * - 32) * 4/9
    return reamur
})

const fahrenheitToKelvin = (fah => {
    let kelvin = 5/9 * (fah - 32) + 273.15
    return kelvin
})

/**
 * 
 * @description Kalkulasi Reamur ke celsius, Fahrenheit, dan Kelvin
 * @returns {Number}
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
    let kelvin = (5/4 * rea) + 273.15
    return kelvin
})

/**
 * 
 * @description Kalkulasi Kelvin ke celsius, Fahrenheit, dan Reamur
 * @returns {Number}
 * 
 */

const kelvinToCelsius = (kelv => {
    let celsius = kelv - 273.15
    return celsius
})

const kelvinToFahrenheit = (kelv => {
    let fahrenheit = 9/5 * (kelv - 273.15) + 32
    return fahrenheit
})

const kelvinToReamur = (kelv => {
    let reamur = 4/5 * (kelv - 273.15)
    return reamur
})

/**
 * 
 * @description Function yang berfungsi untuk melakukan kalkulasi pada suhu
 * 
 */

const temperatureConverter = (input, selectOne, selectTwo) => {
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

/**
 * 
 * @description Function untuk mendapatkan rumus konversi berdasarkan satuan asal dan tujuan
 * 
 */

const getConvertionFormula = (input, selectOne, result, selectTwo) => {
    let formula = ""

    switch (selectOne) {
        case "Celsius":

            switch (selectTwo) {
                case "Fahrenheit":
                    formula = `(${input}°C × 9/5) + 32 = ${result}°F`
                    break;

                case "Reamur":
                    formula = `${input}°C × 4/5 = ${result}°R`
                    break;

                case "Kelvin":
                    formula = `${input}°C + 273.15 = ${result}K`
                    break;

                default:
                    formula = "error"
                    break;
            }

            break;

        case "Fahrenheit":

            switch (selectTwo) {
                case "Celsius":
                     formula = `(${input}°F - 32) × 5/9 = ${result}°C`
                    break;

                case "Reamur":
                    formula = `(${input}°F - 32) × 4/9 = ${result}°R`
                    break;

                case "Kelvin":
                    formula = `(${input}°F + 459.67) × 5/9 = ${result}K`
                    break;

                default:
                    formula = "error"
                    break;
            }

            break;

        case "Reamur":

            switch (selectTwo) {
                case "Celsius":
                    formula = `${input}°R × 5/4 = ${result}°C`
                    break;

                case "Fahrenheit":
                    formula = `(${input}°R × 9/4) + 32 = ${result}°F`
                    break;

                case "Kelvin":
                    formula = `(${input}°R × 5/4) + 273.15 = ${result}K`
                    break;

                default:
                    formula = "error"
                    break;
            }

            break;

        case "Kelvin":

            switch (selectTwo) {
                case "Celsius":
                    formula = `${input}K - 273.15 = ${result}°C`
                    break;

                case "Fahrenheit":
                    formula = `(${input}K × 9/5) - 459.67 = ${result}°F`
                    break;

                case "Reamur":
                    formula = `(${input}K - 273.15) × 4/5 = ${result}°R`
                    break;

                default:
                    formula = "error"
                    break;
            }

            break;
    
        default:
            break;
    }

    return formula
}
