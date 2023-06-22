
/**
 * 
 * @author Niaz
 * @name script.js
 * @description Melakukan kalkulasi suhu Celsius, Fahrenheit, Reamur, dan Kelvin
 *  
 */

const output = document.getElementById("output")
const inputElement = document.getElementById("input")
const selectOneElement = document.getElementById("selection_1")
const selectTwoElement = document.getElementById("selection_2")
const buttonConvert = document.getElementById("result")
const buttonReset = document.getElementById("reset")
const howto = document.getElementById("howto")
const error = document.getElementById("error")

buttonConvert.addEventListener("click", () => {
    
    // Memanggil input dan selectOne dari element menggunakan ID HTML
    const input = parseFloat(inputElement.value)
    const selectOne = selectOneElement.value

    // Memanggil selectTwo dari element menggunakan ID HTML
    const selectTwo = selectTwoElement.value

    // Lakukan pengecekan jika input adalah NaN (Not a Number) maka beri tahu user
    if (isNaN(input)) {
        document.getElementById("error").innerHTML = `* Masukkan nilai dalam bentuk angka!`
        return
      // Lakukan pengecekan jika selectOne sama dengan selectTwo maka beri tahu user  
    } else if (selectOne === selectTwo) {
        error.innerHTML = `* Satuan asal dan tujuan tidak boleh sama!`
        return
    }

    error.innerHTML = ``

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
    error.innerHTML = ``
    inputElement.value = 0
    output.value = `32.00`
    howto.innerHTML = `(0°C × 9/5) + 32 = 32.00°F`
    selectOneElement.options[0].selected = true
    selectTwoElement.options[1].selected = true
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
                    result = (input * 9/5) + 32
                    break;

                case "Reamur":
                    result = (input * 4/5)
                    break;

                case "Kelvin":
                    result = (input + 273.15)
                    break;
            }

            break;

        case "Fahrenheit":

            switch (selectTwo) {
                case "Celsius":
                    result = (input - 32) * 5/9
                    break;

                case "Reamur":
                    result = (input * - 32) * 4/9
                    break;

                case "Kelvin":
                    result = (input - 32) * 5/9  + 273.15
                    break;
            }

            break;

        case "Reamur":

            switch (selectTwo) {
                case "Celsius":
                    result = (5/4 * input)
                    break;

                case "Fahrenheit":
                    result = (9/4 * input) + 32
                    break;

                case "Kelvin":
                    result = (5/4 * input) + 273.15
                    break;
            }

            break;

        case "Kelvin":

            switch (selectTwo) {
                case "Celsius":
                    result = input - 273.15
                    break;

                case "Fahrenheit":
                    result = 9/5 * (input - 273.15) + 32
                    break;

                case "Reamur":
                    result =  4/5 * (input - 273.15)
                    break;
            }

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
                    formula = `${input}°C + 273.15 = ${result}°K`
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
                    formula = `(${input}°F + 459.67) × 5/9 = ${result}°K`
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
                    formula = `(${input}°R × 5/4) + 273.15 = ${result}°K`
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
            }

            break;
    }

    return formula
}