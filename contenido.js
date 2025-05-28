document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones para revelar información
    const revealButtons = document.querySelectorAll('.reveal-button');
    // Selecciona todos los botones para cerrar la información
    const closeButtons = document.querySelectorAll('.close-button');
    // Selecciona todas las tarjetas
    const cards = document.querySelectorAll('.card');

    // Asigna animaciones de aparición a las tarjetas
    cards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 * index}s`; // Retraso escalonado
        card.style.animationFillMode = 'forwards'; // Mantiene el estado final de la animación
    });

    // Función para manejar el "volteo" de la tarjeta
    const flipCard = (cardElement, showBack) => {
        const cardInner = cardElement.querySelector('.card-inner');
        const cardBack = cardElement.querySelector('.card-back');

        if (showBack) {
            // Asegura que la parte trasera esté visible antes de girar
            cardBack.style.display = 'flex';
            setTimeout(() => { // Pequeño retraso para asegurar el 'display'
                cardElement.classList.add('is-flipped');
            }, 10);
        } else {
            cardElement.classList.remove('is-flipped');
            // Oculta la parte trasera después de la animación de giro
            cardInner.addEventListener('transitionend', () => {
                if (!cardElement.classList.contains('is-flipped')) {
                    cardBack.style.display = 'none';
                }
            }, { once: true });
        }
    };

    // Event listener para los botones "Descubre más"
    revealButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            flipCard(card, true);
        });
    });

    // Event listener para los botones "Entendido"
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            flipCard(card, false);
        });
    });

    // Efecto de partículas (opcional, si quieres algo más avanzado)
    // Esto es un ejemplo muy básico. Para un efecto completo, se necesitaría una librería o más JS.
    // function createParticle() {
    //     const particle = document.createElement('div');
    //     particle.className = 'particle';
    //     document.body.appendChild(particle);
    //     const size = Math.random() * 5 + 2;
    //     particle.style.width = `${size}px`;
    //     particle.style.height = `${size}px`;
    //     particle.style.left = `${Math.random() * 100}vw`;
    //     particle.style.top = `${Math.random() * 100}vh`;
    //     particle.style.opacity = Math.random();
    //     particle.style.transform = `translateY(${Math.random() * 200 - 100}px) translateX(${Math.random() * 200 - 100}px) scale(${Math.random()})`;
    //     particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
    //     particle.style.animationDelay = `${Math.random() * 2}s`;
    //     particle.addEventListener('animationend', () => particle.remove());
    // }
    //
    // setInterval(createParticle, 500); // Crea una partícula cada 500ms
});
