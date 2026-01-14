document.addEventListener('DOMContentLoaded', function() {
    
    const dataDoAniversario = new Date("Feb 15, 2026 19:00:00").getTime();

    const contador = setInterval(function() {
        const agora = new Date().getTime();
        const distanciaAteOEvento = dataDoAniversario - agora;

        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

        if (distanciaAteOEvento < 0) {
            clearInterval(contador);
            document.getElementById('contador').innerHTML = "Parabéns! O aniversário começou!";
        }
    }, 1000);
});