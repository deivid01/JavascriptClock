let clock = () => {
let date = new Date()
let hora = date.getHours()
let mins = date.getMinutes()
let seg = date.getSeconds()
let periodo = "AM"

if (hora == 0) {
    hora = 12
} else if (hora >= 12) {
    hora = hora -12
    periodo = "PM"
}


hora = hora < 10 ? `0${hora}` : hora

mins = mins < 10 ? `0${mins}` : mins

seg = seg < 10 ? `0${seg}` : seg


let time = `${hora}:${mins}:${seg} ${periodo}`
document.querySelector(".clock").innerText = time
setTimeout(clock, 1000)
}

clock()
