const data = document.getElementById("data")
const hora = document.getElementById("hora")

function tempo(){
    // const dataTempo = new Date()
    const dataHora = moment()
    
    // data.innerText = `${dataTempo.getDate()}/${dataTempo.getMonth() + 1}/${dataTempo.getFullYear()}`
    // hora.innerHTML = `${dataTempo.getHours()}:${dataTempo.getMinutes()}:${dataTempo.getSeconds()}`
    
    data.innerText = `${dataHora.format("D")}/${dataHora.format("MM")}/${dataHora.format("YYYY")}`
    hora.innerHTML = `${dataHora.format("hh")}:${dataHora.format("mm")}:${dataHora.format("ss")}`
    
}
setInterval(tempo, 1000)

tempo()