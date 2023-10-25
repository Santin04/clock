const escrever_hora = document.getElementById('horario');
const escrever_dia = document.getElementById('dia')

function definir_hora() {
    let present = new Date;
    let hours = present.getHours();
    let minutes = present.getMinutes();
    let seconds = present.getSeconds();
    let day = present.getDate();
    let month = present.getMonth();
    let year = present.getFullYear();

    month += 1

    if (seconds < 10){
        seconds = "0" + seconds
    }

    if (minutes < 10){
        minutes = "0" + minutes
    }

    if (hours < 10){
        hours = "0" + hours
    }

    if (day < 10){
        day = "0" + day
    }

    if (month < 10){
        month = "0" + month
    }

    escrever_hora.innerHTML = `${hours}:${minutes}:${seconds}`;
    escrever_dia.innerHTML = `${day}/${month}/${year}`;
}

setInterval(definir_hora, 1000)