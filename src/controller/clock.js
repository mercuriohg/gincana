const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');
const corpo = document.getElementById('corpo');
const principal = document.getElementById('container-clock');

function atualizarRelogio() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();
    hora.textContent = horas < 10 ? '0' + horas : horas;
    minuto.textContent = minutos < 10 ? '0' + minutos : minutos;
    segundo.textContent = segundos < 10 ? '0' + segundos : segundos;
    if (horas >= 18 || horas < 6){
        corpo.classList.add('noite');
        principal.classList.add('noite');
    }
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();
