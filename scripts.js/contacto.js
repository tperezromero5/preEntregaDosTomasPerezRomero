let precioTotal = obtenerPrecioTotalGuardado()
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

