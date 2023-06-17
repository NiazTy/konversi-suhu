
const initialValue = document.getElementById("input")
const finalValue = document.getElementById("result")
const button = document.getElementById("btn-result")

const celsiusToFahrenheit = (cel => {
    let fahrenheit = (cel * 9/5) + 32
    return fahrenheit
})
    
const fahrenheitToCelsius = (fah => {
    let celsius = (fah - 32) * 5/9
    return celsius
})

button.addEventListener("click", () => {
    finalValue.value = `${celsiusToFahrenheit(initialValue.value)}`
})