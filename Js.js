document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("burbujas-container");
    let numBurbujas = 100; // Número de burbujas por defecto
    let resizeTimer;

    // Función para ajustar el número de burbujas en función del ancho de la pantalla
    function ajustarNumeroBurbujas() {
        if (window.innerWidth <= 1000 && window.innerWidth > 395) {
            numBurbujas = 40; // Reducir el número de burbujas para pantallas más pequeñas
        }else if (window.innerWidth <= 395) {
            numBurbujas = 30; // Reducir el número de burbujas para pantallas más pequeñas
        } else {
            numBurbujas = 100; // Restaurar el número de burbujas por defecto para pantallas más grandes
        }

        // Limpiar contenedor antes de generar nuevas burbujas
        container.innerHTML = '';

        // Generar nuevas burbujas
        const duracionTotal = 400; // Duración total de la animación en segundos
        const probabilidadSombra = 0.3; // Probabilidad de que una burbuja tenga sombra (valor entre 0 y 1)
        const probabilidadNaranja = 0.8; // Probabilidad de que una burbuja tenga color naranja (valor entre 0 y 1)
        const probabilidadIntermitente = 0.1;

        for (let i = 0; i < numBurbujas; i++) {
            const span = document.createElement("span");
            span.className = "burbuja";
            const delay = Math.random() * duracionTotal; // Calcula un retraso aleatorio para cada burbuja
            span.style.animationDelay = `-${delay}s`; // Establece el retraso de la animación

            // Genera un número aleatorio entre 0 y 1
            const randomValue = Math.random();
            
            // Si el número aleatorio es mayor que la probabilidad de sombra, aplica el efecto de sombra
            if (randomValue > probabilidadSombra) {
                span.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(114, 239, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.5)';
            }

            // Si el número aleatorio es mayor que la probabilidad de naranja, aplica el color naranja
            if (randomValue > probabilidadNaranja) {
                span.style.background = '#FFA500'; // Color naranja
            }
            if (randomValue < probabilidadIntermitente) {
                span.classList.add('intermitente', 'animate');
                if (randomValue > probabilidadNaranja) {
                    span.style.background = '#FFA500'; // Color naranja
                }
            }
            
            container.appendChild(span);
        }
    }

    // Función para ejecutar la función de ajuste de burbujas después de un breve retraso
    // Función para ejecutar la función de ajuste de burbujas después de un breve retraso, solo si el cambio de tamaño fue en el ancho
    function onWindowResize() {
        if (window.innerWidth !== window.lastWidth) {
            clearTimeout(resizeTimer); // Limpiar el temporizador existente si existe
            resizeTimer = setTimeout(ajustarNumeroBurbujas, 250); // Esperar 250 milisegundos antes de ejecutar la función de ajuste de burbujas
            window.lastWidth = window.innerWidth; // Actualizar el último ancho registrado
        }
    }

    // Llamamos a la función para ajustar el número de burbujas cuando se carga la página
    ajustarNumeroBurbujas();

    // Llamamos a la función también cuando se redimensiona la ventana, pero usando el temporizador para evitar ejecuciones excesivas
    window.addEventListener('resize', onWindowResize);
});

