//Generate the random color
const randomColor = function () {
    const hex = '0123456789ABCDEF' //hex values from 0-16
    let color = '#' //append the color to it
    for (let i = 0; i <6; i++) {
       color += hex[Math.floor(Math.random() * 16)]  //loop to generate random color  
    }
    return color
}
let intervalID //global declaration
const startChangingColor = function () {
    if (!intervalID) {
        intervalID = setInterval(changeBGColor,500)
    }
    function changeBGColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function () {
    clearInterval(intervalID)
    intervalID = null
    
}
document.getElementById('start').addEventListener('click',startChangingColor)
document.getElementById('stop').addEventListener('click',stopChangingColor)