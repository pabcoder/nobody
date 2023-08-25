function tiempoEnMinutos(horas, mins) {
    const horasEnMins = horas * 60;

    return horasEnMins + mins;
}

function cantidadRecolectadaSimple(costo, participantes) {
    const total = costo * participantes;

    return total;
}

function cantidadRecolectada(
    costoEstudiante,
    costoAdulto,
    cantidadEstudiantes,
    cantidadAdultos
) {
    return cantidadRecolectadaSimple(costoEstudiante, cantidadEstudiantes) + cantidadRecolectadaSimple(costoAdulto, cantidadAdultos);
}

const resultado = cantidadRecolectada(2, 5, 5, 2);

console.log(resultado);
