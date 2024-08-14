document.getElementById('themeBtn').style.border = '2px salid black'

document.getElementById('themeBtn').addEventListener('click', function () {
    if (document.getElementById('themeBtn').innerText === "Dark") {
        document.getElementById('body-theme').style.backgroundColor = 'black'
        document.getElementById('body-theme').style.color = 'white'
        document.getElementById('themeBtn').style.backgroundColor = 'black'
        document.getElementById('themeBtn').style.color = 'white'
        document.getElementById('themeBtn').style.border = '2px solid white'
        document.getElementById('themeBtn').innerText = "Light"

    }
    else {
        document.getElementById('body-theme').style.backgroundColor = 'white'
        document.getElementById('body-theme').style.color = 'black'
        document.getElementById('themeBtn').style.backgroundColor = 'white'
        document.getElementById('themeBtn').style.color = 'black'
        document.getElementById('themeBtn').style.border = '2px solid black'
        document.getElementById('themeBtn').innerText = "Dark"
    }
})

