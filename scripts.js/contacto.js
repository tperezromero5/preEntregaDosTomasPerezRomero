function mostrarPlanes() {
    const planes = {
        1: { nombre: "Gym 2 veces por semana", precio: 3200 },
        2: { nombre: "Gym 3 veces por semana", precio: 3800 },
        3: { nombre: "Pilates 2 veces por semana", precio: 3000 },
        4: { nombre: "Gym+pilates 2 veces por semana", precio: 4500 },
        5: { nombre: "Gym/pilates libre", precio: 4800 },
    }
    const planesSeleccionados =[]

    let entrada = prompt("Hola bienvenido/a a la pagina oficial de Rehavita Espacio Integral, por favor escribí tu nombre acá abajo para poder mostrarte los planes disponibles")
    while (entrada !=="") {
        let plan= parseInt(prompt("Hola " + entrada + " elige el plan que más te guste:\n1-Gym 2 veces por semana\n2-Gym 3 veces por semana\n3-Pilates 2 veces por semana\n4-Gym+pilates 2 veces por semana\n5-Gym/pilates libre"))

        if (planes[plan]) {
        planesSeleccionados.push(planes[plan]);
        alert("Seleccionaste el plan número " + plan + ". El precio total de este plan es $" + planes[plan].precio + " por mes");
        } else {
        alert("Opción no válida");
        }
        entrada = prompt("Si deseas agregar otro plan, escribí tu nombre nuevamente. De lo contrario, presiona Enter para finalizar.");
        
        if (entrada === "") {
            // Función de orden superior para calcular el precio total de los planes seleccionados
            const calcularPrecioTotal = (planesSeleccionados) => {
            return planesSeleccionados.reduce((total, plan) => total + plan.precio, 0);
            };
    
            const precioTotal = calcularPrecioTotal(planesSeleccionados);
            alert("Te agradecemos tu visita, " + entrada + ". El precio total de los planes seleccionados es $" + precioTotal + " Final por mes. ¡Gracias por elegirnos!");}
    }
}
mostrarPlanes();