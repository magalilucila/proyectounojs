
let itinerariosArgentinaBrasil = [
    {
        codigo: "101",
        destino: "Argentina/Brasil",
        descripcion: "Buenos Aires, Argentina- Rio de Janeiro, Brasil- Ilha do mel, Brasil- Balneario Camboriú, Brasil- Buenos Aires, Argentina",
        fechaSalida: "20 Diciembre 2023",
        fechaRegreso: "10 Enero 2024",
        duracionViaje: "21 días y 19 noches",
        puertoEmbarque: "Buenos Aires, Argentina",
        precio: 100000
    },
    {
        codigo: "102",
        destino: "Argentina/Brasil",
        descripcion: "Buenos Aires, Argentina- Paranagua, Brasil- Itajai, Brasil- Santos, Brasil- Rios de Janeiro, Brasil- Buenos Aires, Argentina",
        fechaSalida: "10 Enero 2024",
        fechaRegreso: "4 Febrero 2024",
        duracionViaje: "25 Días y 23 noches",
        puertoEmbarque: "Buenos Aires, Argentina",
        precio: 150000
    },
    {
        codigo: "103",
        destino: "Argentina/Brasil",
        descripcion: "Buenos Aires, Argentina- Ilhabela, Brasil- Buzios, Brasil- Rio de Janeiro, Brasil- Buenos Aires, Argentina",
        fechaSalida: "01 Febrero 2023",
        fechaRegreso: "24 Febrero 2023",
        duracionViaje: "23 Días y 21 Noches",
        puertoEmbarque: "Buenos Aires, Argentina",
        precio: 200000
    }
];

let itinerariosEuropa = [
    {
        codigo: "104",
        destino: "Europa",
        descripcion: "Génova, Italia- Marsella, Francia- Barcelona, España",
        fechaSalida: "01 Enero 2024",
        fechaRegreso: "20 Enero 2024",
        duracionViaje: "19 días y 17 noches",
        puertoEmbarque: "Génova, Italia- Marsella",
        precio: 300000
    },
    {
        codigo: "105",
        destino: "Europa",
        descripcion: "Valencia, España- Alicante, España- Marsella, Francia- Génova, Italia- Funchal, Portugal",
        fechaSalida: "15 Febrero 2024",
        fechaRegreso: "28 Febrero 2024",
        duracionViaje: "13 Días y 11 noches",
        puertoEmbarque: "Valencia, España- Alicante",
        precio: 500000
    }
];

let itinerariosCaribe = [
    {
        codigo: "106",
        destino: "Caribe",
        descripcion: "Miami, Florida- Nassau, Las Bahamas- Falmouth, Jamaica- Miami, Florida",
        fechaSalida: "10 Enero 2024",
        fechaRegreso: "25 Enero 2024",
        duracionViaje: "15 días y 13 noches",
        puertoEmbarque: "Miami, Florida- Nassau",
        precio: 250000
    },
    {
        codigo: "107",
        destino: "Caribe",
        descripcion: "Miami, Florida- CocoCay, Las Bahamas- Nassau, Las Bahamas- Labadee, Haití- Miami, Florida",
        fechaSalida: "6 Febrero 2024",
        fechaRegreso: "22 Febrero 2024",
        duracionViaje: "16 Días y 14 noches",
        puertoEmbarque: "Miami, Florida- CocoCay",
        precio: 300000
    }
];

function simuladorPresupuestoCrucero() {
    let cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros:")); 
    while (isNaN(cantidadPasajeros) || cantidadPasajeros <= 0) {
        alert("Opción inválida");
        cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros:")); 
    }
    let presupuesto = parseInt(prompt('Ingrese su presupuesto total disponible'));
    while (isNaN(presupuesto) || presupuesto <= 0) {
        alert("Opción inválida");
        presupuesto = parseInt(prompt('Ingrese su presupuesto total disponible')); 
    }
    let presupuestoTotalPorPasajero = Math.round(presupuesto / cantidadPasajeros);
    alert("Tu presupuesto es de $" + presupuestoTotalPorPasajero + " por pasajero");
    let opcionesDestino = prompt('Seleccione el destino deseado: \n1- Argentina/Brasil. \n2 - Europa. \n3 - Caribe.');
    while (opcionesDestino <= 0 || opcionesDestino >= 4) {
        alert("Opción inválida");
        opcionesDestino = prompt('Seleccione el destino deseado: \n1- Argentina/Brasil. \n2 - Europa. \n3 - Caribe');
    }


    switch (opcionesDestino)  { 
        case "1":       
            seleccionarItinerarioArgentinaBrasil(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros);     
            break;    
        case "2":       
            seleccionarItinerarioEuropa(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros);      
            break;          
        case "3":
            seleccionarItinerarioCaribe(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros);
            break;       
    }
}

function seleccionarItinerarioArgentinaBrasil(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros) {
    let mensajeItinerarios = "Itinerarios disponibles para Argentina/Brasil:\n";
    for (let i = 0; i < itinerariosArgentinaBrasil.length; i++) {
        mensajeItinerarios += itinerariosArgentinaBrasil[i].codigo + " - " + itinerariosArgentinaBrasil[i].descripcion + "\n";
    }
    let seleccionItinerario = prompt(mensajeItinerarios + "Ingrese el código del itinerario deseado:");
    while (!itinerariosArgentinaBrasil.some(itinerario => itinerario.codigo === seleccionItinerario)) {
        alert("Opción inválida");
        seleccionItinerario = prompt(mensajeItinerarios + "Ingrese el código del itinerario deseado:");
    }
    let itinerarioSeleccionado = itinerariosArgentinaBrasil.find(itinerario => itinerario.codigo === seleccionItinerario);
    let precioTotal = itinerarioSeleccionado.precio * cantidadPasajeros;
    if (precioTotal <= presupuestoTotalPorPasajero) {
        alert("Itinerario seleccionado:\n" + itinerarioSeleccionado.codigo + " - " + itinerarioSeleccionado.descripcion +
        "\n-----------------------------------------------------------------------\n" +
        "Fecha de salida: " + itinerarioSeleccionado.fechaSalida + "\n" +
        "Fecha de regreso: " + itinerarioSeleccionado.fechaRegreso + "\n" +
        "Duración del viaje: " + itinerarioSeleccionado.duracionViaje + "\n" +
        "Puerto de embarque: " + itinerarioSeleccionado.puertoEmbarque + "\n" +
        "Precio total por pasajero: $" + itinerarioSeleccionado.precio + "\n" +
        "Precio total del viaje: $" + precioTotal);
    } else {
        alert("Lo siento, el precio total del itinerario seleccionado excede tu presupuesto.");
    }
}


function seleccionarItinerarioEuropa(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros) {
    let mensajeItinerarios = "Itinerarios disponibles para Europa:\n";
    for (let i = 0; i < itinerariosEuropa.length; i++) {
        mensajeItinerarios += itinerariosEuropa[i].codigo + " - " + itinerariosEuropa[i].descripcion + "\n";
    }
    let seleccionItinerario = prompt(mensajeItinerarios + "Ingrese el código del itinerario deseado:");
    while (!itinerariosEuropa.some(itinerario => itinerario.codigo === seleccionItinerario)) {
        alert("Opción inválida");
        seleccionItinerario = prompt(mensajeItinerarios + "Ingrese el código del itinerario deseado:");
    }
    let itinerarioSeleccionado = itinerariosEuropa.find(itinerario => itinerario.codigo === seleccionItinerario);
    let precioTotal = itinerarioSeleccionado.precio * cantidadPasajeros;
    if (precioTotal <= presupuestoTotalPorPasajero) {
        alert("Itinerario seleccionado:\n" + itinerarioSeleccionado.codigo + " - " + itinerarioSeleccionado.descripcion +
        "\n-----------------------------------------------------------------------\n" +
        "Fecha de salida: " + itinerarioSeleccionado.fechaSalida + "\n" +
        "Fecha de regreso: " + itinerarioSeleccionado.fechaRegreso + "\n" +
        "Duración del viaje: " + itinerarioSeleccionado.duracionViaje + "\n" +
        "Puerto de embarque: " + itinerarioSeleccionado.puertoEmbarque + "\n" +
        "Precio total por pasajero: $" + itinerarioSeleccionado.precio + "\n" +
        "Precio total del viaje: $" + precioTotal);
    } else {
        alert("Lo siento, el precio total del itinerario seleccionado excede tu presupuesto.");
    }
}


function seleccionarItinerarioCaribe(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros) {
    let mensajeItinerarios = "Itinerarios disponibles para el Caribe:\n";
    for (let i = 0; i < itinerariosCaribe.length; i++) {
        mensajeItinerarios += itinerariosCaribe[i].codigo + " - " + itinerariosCaribe[i].descripcion + "\n";;
    }
    let seleccionItinerario = prompt(mensajeItinerarios + "Ingrese el código del itinerario deseado:");
    while (!itinerariosCaribe.some(itinerario => itinerario.codigo === seleccionItinerario)) {
        alert("Opción inválida");
        seleccionItinerario = prompt(mensajeItinerarios + "Ingrese el código del itinerario deseado:");
    }
    let itinerarioSeleccionado = itinerariosCaribe.find(itinerario => itinerario.codigo === seleccionItinerario);
    let precioTotal = itinerarioSeleccionado.precio * cantidadPasajeros;
    if (precioTotal <= presupuestoTotalPorPasajero) {
        alert("Itinerario seleccionado:\n" + itinerarioSeleccionado.codigo + " - " + itinerarioSeleccionado.descripcion +
        "\n-----------------------------------------------------------------------\n" +
        "Fecha de salida: " + itinerarioSeleccionado.fechaSalida + "\n" +
        "Fecha de regreso: " + itinerarioSeleccionado.fechaRegreso + "\n" +
        "Duración del viaje: " + itinerarioSeleccionado.duracionViaje + "\n" +
        "Puerto de embarque: " + itinerarioSeleccionado.puertoEmbarque + "\n" +
        "Precio total por pasajero: $" + itinerarioSeleccionado.precio + "\n" +
        "Precio total del viaje: $" + precioTotal);
    } else {
        alert("Lo siento, el precio total del itinerario seleccionado excede tu presupuesto.");
    }
}




simuladorPresupuestoCrucero();








































// Datos Argentina/Brasil
/* let preciosArgentinaBrasil = [100000, 150000, 200000];
let itinerariosArgentinaBrasil = [
    "Cód: 101 - Buenos Aires, Argentina- Rio de Janeiro, Brasil- Ilha do mel, Brasil- Balneario Camboriú, Brasil- Buenos Aires, Argentina",
    "Cód: 102 - Buenos Aires, Argentina- Paranagua, Brasil- Itajai, Brasil- Santos, Brasil- Rios de Janeiro, Brasil- Buenos Aires, Argentina",
    "Cód: 103 - Buenos Aires, Argentina- Ilhabela, Brasil- Buzios, Brasil- Rio de Janeiro, Brasil- Buenos Aires, Argentina"
];
let fechasSalidaArgentinaBrasil = ["20 Diciembre 2023", "10 Enero 2024", "01 Febrero 2023" ];
let fechasRegresoArgentinaBrasil = ["10 Enero 2024", " 4 Febrero 2024","24 Febrero 2023"];
let duracionViajeArgentinaBrasil = ["21 días y 19 noches", "25 Días y 23 noches", "23 Días y 21 Noches" ];
let puertoEmbarqueArgentinaBrasil = ["Buenos Aires, Argentina","Buenos Aires, Argentina","Buenos Aires, Argentina"];

// Datos Europa
let preciosEuropa = [300000, 500000];
let itinerariosEuropa = [
    "Cód: 104 - Génova, Italia- Marsella, Francia- Barcelona, España",
    "Cód: 105 - Valencia, España- Alicante, España- Marsella, Francia- Génova, Italia- Funchal, Portugal"
];
let fechasSalidaEuropa = ["01 Enero 2024", "15 Febrero 2024", ];
let fechasRegresoEuropa = ["20 Enero 2024", "28 Febrero 2024",];
let duracionViajeEuropa = ["19 días y 17 noches", "13 Días y 11 noches", ];
let puertoEmbarqueEuropa = ["Génova, Italia- Marsella", "Valencia, España- Alicante", ];

// Datos Caribe
let preciosCaribe = [250000, 300000];
let itinerariosCaribe = [
    "Cód: 106 -  Miami, Florida- Nassau, Las Bahamas- Falmouth, Jamaica- Miami, Florida",
    "Cód: 107 -  Miami, Florida- CocoCay, Las Bahamas- Nassau, Las Bahamas- Labadee, Haití- Miami, Florida"
];
let fechasSalidaCaribe = ["10 Enero 2024", "6 Febrero 2024", ];
let fechasRegresoCaribe = ["25 Enero 2024", "22 Febrero 2024",];
let duracionViajeCaribe = ["15 días y 13 noches", "16 Días y 14 noches", ];
let puertoEmbarqueCaribe = ["Miami, Florida- Nassau", "Miami, Florida- CocoCay", ];


function simuladorPresupuestoCrucero() {
    let cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros:")); 
    while (isNaN(cantidadPasajeros) || cantidadPasajeros <= 0) {
        alert("Opción inválida");
        cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros:")); 
    }
    let presupuesto = parseInt(prompt('Ingrese su presupuesto total disponible'));
    while (isNaN(presupuesto) || presupuesto <= 0) {
        alert("Opción inválida");
        presupuesto = parseInt(prompt('Ingrese su presupuesto total disponible')); 
    }
    let presupuestoTotalPorPasajero = Math.round(presupuesto / cantidadPasajeros);
    alert("Tu presupuesto es de $" + presupuestoTotalPorPasajero + " por pasajero");
    let opcionesDestino = prompt('Seleccione el destino deseado: \n1- Argentina/Brasil. \n2 - Europa. \n3 - Caribe.');
    while (opcionesDestino <= 0 || opcionesDestino >= 4) {
        alert("Opción inválida");
        opcionesDestino = prompt('Seleccione el destino deseado: \n1- Argentina/Brasil. \n2 - Europa. \n3 - Caribe');
    }


    switch (opcionesDestino)  { 
        case "1":       
            seleccionarItinerarioArgentinaBrasil(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros);     
            break;    
        case "2":       
            seleccionarItinerarioEuropa(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros);      
            break;          
        case "3":
            seleccionarItinerarioCaribe(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros);
            break;       
    }
}

function seleccionarItinerarioArgentinaBrasil(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros) {
    let mensajeItinerarios = "Itinerarios disponibles para Argentina/Brasil:\n";
    for (let i = 0; i < itinerariosArgentinaBrasil.length; i++) {
        mensajeItinerarios += itinerariosArgentinaBrasil[i] + "\n";
    }
    let seleccionItinerario = prompt(mensajeItinerarios + "Ingrese el código del itinerario deseado:");
    while (seleccionItinerario !== "101" && seleccionItinerario !== "102" && seleccionItinerario !== "103") {
        alert("Opción inválida");
        seleccionItinerario = prompt(mensajeItinerarios + "Ingrese el código del itinerario deseado:");
    }
    let index = parseInt(seleccionItinerario) - 101;
    let precioTotal = preciosArgentinaBrasil[index] * cantidadPasajeros;
    if (precioTotal <= presupuestoTotalPorPasajero) {
        alert("Itinerario seleccionado:\n" +itinerariosArgentinaBrasil [index] +
        "\n-----------------------------------------------------------------------\n" +
        "Fecha de salida: " + fechasSalidaArgentinaBrasil[index] + "\n" +
        "Fecha de regreso: " + fechasRegresoArgentinaBrasil[index] + "\n" +
        "Duración del viaje: " + duracionViajeArgentinaBrasil[index] + "\n" +
        "Puerto de embarque: " + puertoEmbarqueArgentinaBrasil[index] + "\n" +
        "Precio total por pasajero: $" + preciosArgentinaBrasil[index] + "\n" +
        "Precio total del viaje: $" + precioTotal);
    } else {
        alert("Lo siento, el precio total del itinerario seleccionado excede tu presupuesto.");
    }
}

function seleccionarItinerarioEuropa(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros) {
    let mensaje = "Itinerarios disponibles para Europa:\n";
    for (let i = 0; i < itinerariosEuropa.length; i++) {
        mensaje += itinerariosEuropa[i] + "\n";
    }
    let seleccionItinerario = prompt(mensaje + "Ingrese el código del itinerario deseado:");
    while (seleccionItinerario !== "104" && seleccionItinerario !== "105") {
        alert("Opción inválida");
        seleccionItinerario = prompt(mensaje + "Ingrese el código del itinerario deseado:");
    }
    let index = parseInt(seleccionItinerario) - 104;
    let precioTotal = preciosEuropa[index] * cantidadPasajeros;
    if (precioTotal <= presupuestoTotalPorPasajero) {
        alert("Itinerario seleccionado:\n" +itinerariosEuropa [index] +
        "\n-----------------------------------------------------------------------\n" +
        "Fecha de salida: " + fechasSalidaEuropa[index] + "\n" +
        "Fecha de regreso: " + fechasRegresoEuropa[index] + "\n" +
        "Duración del viaje: " + duracionViajeEuropa[index] + "\n" +
        "Puerto de embarque: " + puertoEmbarqueEuropa[index] + "\n" +
        "Precio total por pasajero: $" + preciosEuropa[index] + "\n" +
        "Precio total del viaje: $" + precioTotal);
    } else {
        alert("Lo siento, el precio total del itinerario seleccionado excede tu presupuesto.");
    }
}


function seleccionarItinerarioCaribe(opcionesDestino, presupuestoTotalPorPasajero, cantidadPasajeros) {
    let mensaje = "Itinerarios disponibles para el Caribe:\n";
    for (let i = 0; i < itinerariosCaribe.length; i++) {
        mensaje += itinerariosCaribe[i] + "\n";
    }
    let seleccionItinerario = prompt(mensaje + "Ingrese el código del itinerario deseado:");
    while (seleccionItinerario !== "106" && seleccionItinerario !== "107") {
        alert("Opción inválida");
        seleccionItinerario = prompt(mensaje + "Ingrese el código del itinerario deseado:");
    }
    let index = parseInt(seleccionItinerario) - 106;
    let precioTotal = preciosCaribe[index] * cantidadPasajeros;
    if (precioTotal <= presupuestoTotalPorPasajero) {
        alert("Itinerario seleccionado:\n" + itinerariosCaribe [index] +
            "\n-----------------------------------------------------------------------\n" +
            "Fecha de salida: " + fechasSalidaCaribe[index] + "\n" +
            "Fecha de regreso: " + fechasRegresoCaribe[index] + "\n" +
            "Duración del viaje: " + duracionViajeCaribe[index] + "\n" +
            "Puerto de embarque: " + puertoEmbarqueCaribe[index] + "\n" +
            "Precio total por pasajero: $" + preciosCaribe[index] + "\n" +
            "Precio total del viaje: $" + precioTotal);
    } else {
        alert("Lo siento, el precio total del itinerario seleccionado excede tu presupuesto.");
    }
}


simuladorPresupuestoCrucero();
 */
