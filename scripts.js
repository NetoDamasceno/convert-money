const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".select-to")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyToConvert = document.querySelector(".currency-value-to-convert")
    const currencyConverted = document.querySelector(".currency-value-converted")
    
    const dolarToday = 5.40
    const euroToday = 5.80
    const libraToday = 6.80

    currencyToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)


    if (currencySelect.value == 'dolar') {
        currencyConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == 'euro') {
        currencyConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)

    }
    if (currencySelect.value == 'libra') {
        currencyConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)

    }

}

function changeCurrency() {
    const currencyImgConverted = document.querySelector(".currency-image-converted")
    const nameCurrencyConverted = document.getElementById("currency-name-converted")

    if (currencySelect.value == 'dolar') {
        currencyImgConverted.src = './assets/dolar.png'
        nameCurrencyConverted.innerHTML = "Dólar Americano"
    }
    if (currencySelect.value == 'euro') {
        currencyImgConverted.src = './assets/euro.png'
        nameCurrencyConverted.innerHTML = "Euro"
    }
    if (currencySelect.value == 'libra') {
        currencyImgConverted.src = './assets/libra.png'
        nameCurrencyConverted.innerHTML = 'Libra Esterlina'
    }

    convertValues()
}


currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)