/*let precioTotal = obtenerPrecioTotalGuardado()
const planForm = document.getElementById('planForm');
const precioTotalSpan = document.getElementById('precioTotal');
const calcularPrecioButton = document.getElementById('calcularPrecio');

calcularPrecioButton.addEventListener('click', function () {
    const planesSeleccionados = [];
    const planCheckboxes = document.querySelectorAll('input[name="plan"]:checked');
    
    planCheckboxes.forEach(function (checkbox) {
        planesSeleccionados.push(checkbox.value);
    });

    let nuevoPrecioTotal = 0;
    for (const plan of planesSeleccionados) {
        if (plan === "Gym 2 veces por semana") {
            nuevoPrecioTotal += 3200;
        } else if (plan === "Gym 3 veces por semana") {
            nuevoPrecioTotal += 3800;
        } else if (plan === "Pilates 2 veces por semana") {
            nuevoPrecioTotal += 3000;
        } else if (plan === "Gym+pilates 2 veces por semana") {
            nuevoPrecioTotal += 4500;
        } else if (plan === "Gym/pilates libre") {
            nuevoPrecioTotal += 4800;
        }
    }

    guardarPrecioTotal(nuevoPrecioTotal);

    precioTotalSpan.textContent = `$${nuevoPrecioTotal.toFixed(2)}`;
});

precioTotalSpan.textContent = `$${precioTotal.toFixed(2)}`;

function obtenerPrecioTotalGuardado() {
    const precioTotalJSON = localStorage.getItem('precioTotalJSON');
    if (precioTotalJSON) {
        return parseFloat(JSON.parse(precioTotalJSON));
    } else {
        return 0;
    }
}

function guardarPrecioTotal(precioTotal) {
    localStorage.setItem('precioTotalJSON', JSON.stringify(precioTotal));
}
*/
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
