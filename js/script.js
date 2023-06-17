
const initialValue = document.getElementById("input")
const finalValue = document.getElementById("result")
const calcBtn = document.getElementById("btn-result")
const resetBtn = document.getElementById("reset")
const reverseBtn = document.getElementById("reverse")
const howto = document.getElementById("howto")

const celsiusToFahrenheit = (cel => {
    let fahrenheit = (cel * 9/5) + 32 // cari nilai cel (celsius) lalu lakukan aritmatika
    return fahrenheit // kembalikan nilai fahrenheit (nilai dari aritmatika)
}) // melakukan kalkulasi
    
const fahrenheitToCelsius = (fah => {
    let celsius = (fah - 32) * 5/9 // cari nilai fah (fahrenheit) lalu lakukan aritmatika lalu bulatkan jika hasil desimal
    return celsius // kembalikan nilai celsius (nilai dari aritmatika)
}) // melakukan kalkulasi

calcBtn.addEventListener("click", () => {
    finalValue.value = `${celsiusToFahrenheit(initialValue.value)}` // lakukan kalkulasi dari nilai initialValue.value melalui function celsiusToFahrenheit
    howto.innerHTML = `(${initialValue.value} °C x 9/5) + 32 = ${finalValue.value} °F` // dapatkan dan isi variabel howto dengan initialValue.value untuk mengisi formula
})

reverseBtn.addEventListener("click", () => {
    initialValue.value = `${fahrenheitToCelsius(finalValue.value)}` // lakukan kalkulasi dari nilai finalValue.value melalui function fahrenheitToCelsius
    howto.innerHTML = `(${finalValue.value} °F - 32) x 5/9 = ${initialValue.value} °C` // dapatkan dan isi variabel howto dengan finalValue.value untuk mengisi formula
})

resetBtn.addEventListener("click", () => {
    initialValue.value = `0` // reset value atau nilai dari kolom
    finalValue.value = `` // hapus kesuluruhan value atau nilai dari kolom
    howto.innerHTML = `(${initialValue.value} °C x 9/5) + 32 = ${finalValue.value} °F` // reset value atau nilai dari paragraph
})