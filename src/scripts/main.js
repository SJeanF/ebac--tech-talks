AOS.init();

const dataEvento = new Date('dec 12, 2025 19:00:00');
const timeStampDoEvento = dataEvento.getTime();

const contaHoras = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diaEmMs = (1000 * 60 * 60 * 24);
    const horaEmMs = (1000 * 60 * 60);
    const minutosEmMs = (1000 * 60);
    const segundoEmMs = 1000

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;
    const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaDoEvento % diaEmMs / horaEmMs);
    const minutosAteOEvento = Math.floor(distanciaDoEvento % diaEmMs % horaEmMs / minutosEmMs)
    const segundoAteOEvento = Math.floor (distanciaDoEvento % diaEmMs % horaEmMs % minutosEmMs / segundoEmMs)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteOEvento}s`
    if (distanciaDoEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = "Evento expirado"
    }
}, 1000);