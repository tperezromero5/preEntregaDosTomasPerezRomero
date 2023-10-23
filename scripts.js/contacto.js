const planForm = document.getElementById('planForm');
const precioTotalSpan = document.getElementById('precioTotal');
const calcularPrecioButton = document.getElementById('calcularPrecio');

// Utilizamos una promesa para obtener el precio total guardado
function obtenerPrecioTotalGuardado() {
    return new Promise((resolve, reject) => {
        const precioTotalJSON = localStorage.getItem('precioTotalJSON');
        if (precioTotalJSON) {
            resolve(parseFloat(JSON.parse(precioTotalJSON)));
        } else {
            resolve(0);
        }
    });
}

// Utilizamos una promesa para guardar el precio total
function guardarPrecioTotal(precioTotal) {
    return new Promise((resolve, reject) => {
        localStorage.setItem('precioTotalJSON', JSON.stringify(precioTotal));
        resolve(precioTotal);
    });
}

fetch('./opiniones.json')
.then(response => response.json())
.then(data => {
    const reseñas = data.reseñas;

    // Mostrar las reseñas en tu página
    const reseñasContainer = document.getElementById('reseñasContainer');

    reseñas.forEach(reseña => {
        const reseñaElement = document.createElement('div');
        reseñaElement.classList.add('reseña');

        const nombreElement = document.createElement('p');
        nombreElement.textContent = `Nombre: ${reseña.nombre}`;

        const opiniónElement = document.createElement('p');
        opiniónElement.textContent = `Opinión: ${reseña.opinión}`;

        const puntuaciónElement = document.createElement('p');
        puntuaciónElement.textContent = `Puntuación: ${reseña.puntuación}`;

        reseñaElement.appendChild(nombreElement);
        reseñaElement.appendChild(opiniónElement);
        reseñaElement.appendChild(puntuaciónElement);

        reseñasContainer.appendChild(reseñaElement);
    });

    console.log('Datos de opiniones.json leídos con éxito:', reseñas);
})
.catch(error => {
    console.error('Error al cargar los datos de opiniones.json:', error);
});

calcularPrecioButton.addEventListener('click', () => {
    const planCheckboxes = document.querySelectorAll('input[name="plan"]:checked');
    const planesSeleccionados = Array.from(planCheckboxes).map(checkbox => checkbox.value);

    const precios = {
        "Gym 2 veces por semana": 3200,
        "Gym 3 veces por semana": 3800,
        "Pilates 2 veces por semana": 3000,
        "Gym+pilates 2 veces por semana": 4500,
        "Gym/pilates libre": 4800,
    };

    // Calculamos el precio total utilizando la función reduce
    const nuevoPrecioTotal = planesSeleccionados.reduce((total, plan) => {
        return total + (precios[plan] || 0);
    }, 0);

    // Guardamos el precio total utilizando la promesa
    guardarPrecioTotal(nuevoPrecioTotal)
        .then(precioTotal => {
            precioTotalSpan.textContent = `$${precioTotal.toFixed(2)}`;
        })
        .catch(error => {
            console.error(error);
        });
});

// Obtenemos el precio total utilizando la promesa
obtenerPrecioTotalGuardado()
    .then(precioTotal => {
        precioTotalSpan.textContent = `$${precioTotal.toFixed(2)}`;
    })
    .catch(error => {
        console.error(error);
    });
