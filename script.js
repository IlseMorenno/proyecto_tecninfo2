document.addEventListener('DOMContentLoaded', () => {
    const carruselContenedor = document.querySelector('.carrusel-contenedor');
    const carruselTrack = document.querySelector('.carrusel-track');
    const imagenes = document.querySelectorAll('.carrusel-track img');
    const botonAnterior = document.querySelector('.anterior');
    const botonSiguiente = document.querySelector('.siguiente');
    const indicadores = document.querySelector('.indicadores');
    const numImagenes = imagenes.length;
    let indiceActual = 0;

    function actualizarCarrusel(indice) {
        const translateX = -indice * 100 + '%';
        carruselTrack.style.transform = `translateX(${translateX})`;

        // Actualizar indicadores
        document.querySelectorAll('.indicadores li').forEach(li => li.classList.remove('activo'));
        indicadores.children[indice].classList.add('activo');
    }

    function siguienteImagen() {
        indiceActual = (indiceActual + 1) % numImagenes;
        actualizarCarrusel(indiceActual);
    }

    function anteriorImagen() {
        indiceActual = (indiceActual - 1 + numImagenes) % numImagenes;
        actualizarCarrusel(indiceActual);
    }

    function navegarIndicador(evento) {
        if (evento.target.tagName === 'LI') {
            const indice = parseInt(evento.target.dataset.index);
            indiceActual = indice;
            actualizarCarrusel(indiceActual);
        }
    }

    // Event listeners para los botones
    botonAnterior.addEventListener('click', anteriorImagen);
    botonSiguiente.addEventListener('click', siguienteImagen);

    // Event listener para los indicadores
    indicadores.addEventListener('click', navegarIndicador);

    // Inicializar el carrusel
    actualizarCarrusel(indiceActual);
});
