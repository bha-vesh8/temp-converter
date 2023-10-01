let celciusInput = document.querySelector('#celcius > input')
let ferenInput = document.querySelector('#feren > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    ferenInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

ferenInput.addEventListener('input', function(){
    let fTemp = parseFloat(ferenInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    celciusInput.value = roundNumber(cTemp) 
    kelvinInput.value = roundNumber(kTemp)
})

kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celciusInput.value = roundNumber(cTemp) 
    ferenInput.value = roundNumber(fTemp)
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    ferenInput.value = ""
    kelvinInput.value = ""
})