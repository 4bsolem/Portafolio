



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


// Datos de ejemplo para las tarjetas
const tarjetas = [
    {
        id: 1,
        titulo: "App Movil: Jobby",
        imagenSrc: "IMG/PROYECTOS/JOBBY.png",
        descripcion: "Jobby fue mi proyecto portafolio de titulo, el cual consistio en la planeación, diseño y desarrollo de una app movil que solucionara una problematica o una falencia que estuviese presente en la actualidad, en la cual con mi grupo nos percatamos que existe falta de promoción a la mano de obra independiente. Por lo que mediante una aplicación movil desarrollada con Ionic y Angular, para la base de datos utilizamos My sql y NodeJs para crear una API la cual fue encargada del almacenamiento y transacción de los datos, GitHub para el control de versiones de la app y finalmente JiraSoftware nos ayudo a la planificación y asignación de tareas. La aplicación contaba con distintas funcionalidades tales como: Creación y edición de perfiles de usuario, Posteo de publicaciónes con o sin imagenes, busqueda de publicaciones con distintos filtros, sistema de registro y seguimiento de solicitudes de trabajo, reseñas y calificación de usuarios, guardado de usuarios favoritos y cambio en la disponibilidad de un perfil.",
        tecnologias: ["IONIC", "ANGULAR", "JAVASCRIPT", "NODEJS", "MYSQL", "GITHUB", "JIRASOFTWARE"]
    },
    {
        id: 2,
        titulo: "Registro y control de ordenes de trabajo",
        descripcion: "Este sistema fue el inicio de un proyecto de digitalización de datos y procesos de una corporación, para desarrollar este sistema se realizaron diversas entrevistas para la captura de requisitos, el sistema fue desarrollado en la plataforma de Google Appscript, por el limitado tiempo se opto por usar de base datos GoogleSheets aprovechando las capacidades de la paltaforma. Tambien uno de los apartados del sistema permite generar documentos en formato PDF a modo de boleta con los datos internos de la orden de trabajo.",
        imagenSrc: "IMG/PROYECTOS/CONTROL OT.png",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT", "APPSCRIPT"]
    },
    {
        id: 3,
        titulo: "Generador de caja",
        descripcion: "Este sistema fue diseñado y creado para generar el calculo de la caja de el dia especificado obteniendo los datos del sistema de control de ordenes de trabajo, esto genera un desglose de la información necesaria por tipo de pago monto y vendedor/a. Ademas de eso el sistema es capaz de generar un documento PDF con la información necesaria para rendir caja, adicional a eso tiene la funcionalidad de enviar el documento PDF a un correo especificado de manera automatica.",
        imagenSrc: "IMG/PROYECTOS/CAJA.png",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT", "APPSCRIPT"]
    },
    {
        id: 4,
        titulo: "Mantenedor de descuentos y promociones",
        descripcion: "Este modulo gestiona los descuentos, promociones, convenios y medicos que existen como opciones para el sistema de control de ordenes de trabajo para que este tipo de datos pueda ser manipulado facilmente a traves de una interfaz en vez de codigo.",
        imagenSrc: "IMG/PROYECTOS/DESCUENTOS Y PROMOCIONES.png",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT", "APPSCRIPT"]
    },
    {
        id: 5,
        titulo: "Gestion de pedidos",
        descripcion: "Este sistema tiene la finalidad de listar todos los pedidos que se requieren hacer por cada orden de trabajo, y con esto poder generar pedidos a distintos proveedores en formato excel para ser enviadas por correo. Ademas tiene la funcionalidad de monitorear el estado de estos pedidos y aceptarlos o rechazarlos a su recepción para que pasen a la siguiente etapa de la orden de trabajo.",
        imagenSrc: "IMG/PROYECTOS/GESTION CRISTALES.png",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT", "APPSCRIPT"]
    },
    {
        id: 6,
        titulo: "Control Producción",
        descripcion: "En este sistema se gestionan las distintas etapas que se puede encontrar un trabajo, se asignan trabajadores y tambien se chequea la calidad de este por lo que puede ser rechazado o aceptado el producto final. Adicional a esto este modulo actualiza el estado de la orden de trabajo para mantenerlo actualizado y que en cualquier momento de consultar una orden de trabajo saber en que etapa de producción se encuentra.",
        imagenSrc: "IMG/PROYECTOS/CONTROL PRODUCCION.png",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT", "APPSCRIPT"]
    },
    {
        id: 7,
        titulo: "Sistema inventario",
        descripcion: "El sistema de inventario se desarrollo por la necesidad que tenia el cliente de tener una lista centralizada de su inventario y que fuera de facil manipulación para poder crear o editar productos. Este sistema tiene la ventaja de permitir llevar un control de stock actualizado de los distintos productos mediante las distintas ventas que tengan estos. tambien tiene un apartado para registrar movimientos de stock entre bodegas, registrar ingresos de productos con boletas o numeros de guia y fecha correspondiente, ademas puede generar un documento pdf para acreditar la validez de un movimiento de stock realizado.",
        imagenSrc: "IMG/PROYECTOS/INVENTARIO.png",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT", "APPSCRIPT"]
    },
    {
        id: 8,
        titulo: "Gestion de postulaciones",
        descripcion: "Este proyecto fue desarrollado con el objetivo de implementar una plataforma destinada a la creación, administración y evaluación de postulaciones. Asimismo, permite gestionar de manera eficiente los diferentes roles involucrados en la administración del sistema. En esta ocasión, desempeñé el cargo de desarrollador Front-end.",
        imagenSrc: "IMG/PROYECTOS/GESTION POSULACIONES.jpg",
        tecnologias: ["REACT JS", "GITHUB","HTML", "CSS"]
    }
    
];

// Función para crear una tarjeta basada en los datos proporcionados
// Función para crear una tarjeta basada en los datos proporcionados
function crearTarjeta(titulo, imagenSrc, descripcion, tecnologias, id) {
    let cardHTML;
    
    // Detectar si el ancho de la ventana es <= 1200px
    //const esPantallaPequena = window.innerWidth <= 1200;

    if (id % 2 === 0 ) { // ID par o pantalla pequeña
        cardHTML = `
        <div class="contentUp" style="display: flex; position: relative;">
            <div class="textoDerecha" >
                <h2>${titulo}</h2>
                <p>${descripcion}</p>
                <div class="imgIconDerecha" >
                    ${tecnologias.map(tec => `<img src="IMG/ICONS/${tec}.png" title="${tec}"/>`).join('')}
                </div>
            </div>
            <div class="imgUser" style="position: relative;">
                <img src="${imagenSrc}"/>
            </div>
        </div>
        `;
    } else { // ID impar
        cardHTML = `
        <div class="content" style="display: flex; position: relative;">
            <div class="imgUser">
                <img src="${imagenSrc}"/>
            </div>
            <div class="textoIzquierda" >
                <h2>${titulo}</h2>
                <p>${descripcion}</p>
                <div class="imgIconIzquierda" >
                    <div>${tecnologias.map(tec => `<img src="IMG/ICONS/${tec}.png" title="${tec}"/>`).join('')}</div>
                </div>
            </div>
        </div>
        `;
    }

    return cardHTML;
}


// Función para agregar todas las tarjetas al contenedor
// Función para agregar todas las tarjetas al contenedor
function agregarTarjetasAlContenedor(tarjetas) {
    const container = document.getElementById('cardContainer');
    tarjetas.forEach(tarjeta => {
        const card = crearTarjeta(tarjeta.titulo, tarjeta.imagenSrc, tarjeta.descripcion, tarjeta.tecnologias, tarjeta.id); // Pasar el id de la tarjeta
        container.innerHTML += card;
    });
}


// Llamada a la función para agregar las tarjetas al contenedor
agregarTarjetasAlContenedor(tarjetas);

