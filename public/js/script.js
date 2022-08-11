let clock = () => {
let date = new Date()
let hora = date.getHours()
let mins = date.getMinutes()
let seg = date.getSeconds()


hora = hora < 10 ? `0${hora}` : hora

mins = mins < 10 ? `0${mins}` : mins

seg = seg < 10 ? `0${seg}` : seg


let time = `${hora}:${mins}:${seg}`
document.querySelector(".clock").innerText = time
setTimeout(clock, 1000)
}

clock()
