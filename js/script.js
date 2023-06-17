
const initialValue = document.getElementById("input")
const finalValue = document.getElementById("result")
const calcBtn = document.getElementById("btn-result")
const resetBtn = document.getElementById("reset")
const num = document.getElementById("num")

const celsiusToFahrenheit = (cel => {
    let fahrenheit = (cel * 9/5) + 32 // cari nilai cel (celsius) lalu lakukan aritmatika
    return fahrenheit // kembalikan nilai fahrenheit (nilai dari aritmatika)
}) // melakukan kalkulasi
    
const fahrenheitToCelsius = (fah => {
    let celsius = (fah - 32) * 5/9 // cari nilai fah (fahrenheit) lalu lakukan aritmatika
    return celsius // kembalikan nilai celsius (nilai dari aritmatika)
}) // melakukan kalkulasi

calcBtn.addEventListener("click", () => {
    finalValue.value = `${celsiusToFahrenheit(initialValue.value)}` // lakukan kalkulasi dari nilai Initial.value melalui function celsiusToFahrenheit
    num.innerHTML = `${initialValue.value}` // dapatkan dan isi variabel num dengan initialValue.value untuk mengisi formula
})

resetBtn.addEventListener("click", () => {
    initialValue.value = `0` // reset value atau nilai dari kolom
    finalValue.value = `` // hapus kesuluruhan value atau nilai dari kolom
    num.innerHTML = `0` // reset value atau nilai dari paragraph
})