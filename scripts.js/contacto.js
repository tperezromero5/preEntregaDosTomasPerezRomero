// Obtener referencias a los elementos del formulario
/*const planForm = document.getElementById('planForm');
const precioTotalSpan = document.getElementById('precioTotal');
const calcularPrecioButton = document.getElementById('calcularPrecio');

// Agregar un controlador de eventos para el botón "Calcular Precio"
calcularPrecioButton.addEventListener('click', function () {
    // Obtener todos los planes seleccionados
    const planesSeleccionados = [];
    const planCheckboxes = document.querySelectorAll('input[name="plan"]:checked');
    
    planCheckboxes.forEach(function (checkbox) {
        planesSeleccionados.push(checkbox.value);
    });

    // Calcular el precio total de los planes seleccionados
    let precioTotal = 0;
    for (const plan of planesSeleccionados) {
        if (plan === "Gym 2 veces por semana") {
            precioTotal += 3200;
        } else if (plan === "Gym 3 veces por semana") {
            precioTotal += 3800;
        } else if (plan === "Pilates 2 veces por semana") {
            precioTotal += 3000;
        } else if (plan === "Gym+pilates 2 veces por semana") {
            precioTotal += 4500;
        } else if (plan === "Gym/pilates libre") {
            precioTotal += 4800;
        }
    }

    // Mostrar el precio total en la página
    precioTotalSpan.textContent = `$${precioTotal}`;
});
*/
// Obtener el precio total almacenado en localStorage, si existe
let precioTotal = localStorage.getItem('precioTotal');
if (precioTotal === null) {
    // Si no hay un valor en localStorage, inicializarlo a 0
    precioTotal = 0;
} else {
    // Convertir el valor almacenado de cadena a número
    precioTotal = parseFloat(precioTotal);
}

// Obtener referencias a los elementos del formulario
const planForm = document.getElementById('planForm');
const precioTotalSpan = document.getElementById('precioTotal');
const calcularPrecioButton = document.getElementById('calcularPrecio');

// Agregar un controlador de eventos para el botón "Calcular Precio"
calcularPrecioButton.addEventListener('click', function () {
    // Obtener todos los planes seleccionados
    const planesSeleccionados = [];
    const planCheckboxes = document.querySelectorAll('input[name="plan"]:checked');

    planCheckboxes.forEach(function (checkbox) {
        planesSeleccionados.push(checkbox.value);
    });

    // Calcular el precio total de los planes seleccionados
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

    // Guardar el nuevo precio total en localStorage
    localStorage.setItem('precioTotal', nuevoPrecioTotal);

    // Mostrar el precio total en la página
    precioTotalSpan.textContent = `$${nuevoPrecioTotal.toFixed(2)}`;
});

// Mostrar el precio total inicial en la página
precioTotalSpan.textContent = `$${precioTotal.toFixed(2)}`;
