document.getElementById('ul-list').style.border = '2px solid black'
document.getElementById('ul-list').addEventListener('click', function (event) {
    console.log('click, black');
    event.stopPropagation()

})


document.getElementById('li-tag').style.border = '2px solid red'
document.getElementById('li-tag').addEventListener('click', function (event) {
    console.log('click, rad');
})



document.getElementById('section').style.border = '2px solid orange'
document.getElementById('section').addEventListener('click', function (event) {
    console.log('click, orange');
})


