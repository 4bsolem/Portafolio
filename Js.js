document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("burbujas-container");
    const numBurbujas = 300; // Número de burbujas que deseas crear
    const duracionTotal = 240; // Duración total de la animación en segundos
    const probabilidadSombra = 0.3; // Probabilidad de que una burbuja tenga sombra (valor entre 0 y 1)

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
        
        container.appendChild(span);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const burbujasAnimation = document.styleSheets[0].cssRules[document.styleSheets[0].cssRules.length - 1];

    // Función para actualizar la altura de la animación
    function actualizarAltura() {
        const alturaDocumento = document.documentElement.scrollHeight;
        burbujasAnimation.style.animation = `animate 40s linear infinite, animate ${alturaDocumento * 0.03}s linear infinite`;
    }

    // Llamar a la función una vez al cargar y luego cada vez que se redimensione la ventana
    actualizarAltura();
    window.addEventListener('resize', actualizarAltura);
});


