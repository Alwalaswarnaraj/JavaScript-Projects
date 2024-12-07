const clock = document.querySelector('#clock')
const dat = document.querySelector('#date')
 
// console.log(date.toLocaleTimeString())
// loDate = date.toLocaleTimeString()
// day = date.toLocaleDateString()

setInterval(function (){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
    dat.innerHTML = date.toLocaleDateString()
}, 1000)