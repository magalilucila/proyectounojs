alert ("Bienvenido al simulador de presupuestos de cruceros MLR")
function simuladorPresupuestoCrucero() {
    let cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros:")); 
    while (isNaN(cantidadPasajeros) || cantidadPasajeros <= 0) {
        alert("opción inválida");
        cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros:")); 
    }
    let presupuesto = parseInt(prompt('Ingrese su presupuesto total disponible'));
    while (isNaN(presupuesto) || presupuesto <= 0) {
        alert("opción inválida");
        presupuesto = parseInt(prompt('Ingrese su presupuesto total disponible')); 
    }
    let presupuestoTotalPorPasajero = Math.round(presupuesto / cantidadPasajeros);
        alert("Tu presupuesto es de $" + presupuestoTotalPorPasajero + " por pasajero");
    let opcionesDestino = prompt('Seleccione el destino deseado: \n1- Argentina/Brasil. \n2 - Europa. \n3 - Caribe.');
    while (opcionesDestino <= 0 || opcionesDestino >= 5) {
        alert("opción inválida");
        opcionesDestino = prompt('Seleccione el destino deseado: \n1- Argentina/Brasil. \n2 - Europa. \n3 - Caribe');
    }
    switch (opcionesDestino) {
        case "1":
            let preciosArgentinaBrasil = [100000, 150000, 200000];
            let itinerariosArgentinaBrasil = [
                "Cód: 101 - Buenos Aires, Argentina- Rio de Janeiro, Brasil- Ilha do mel, Brasil- Balneario Camboriú, Brasil- Buenos Aires, Argentina",
                "Cód: 102 - Buenos Aires, Argentina- Paranagua, Brasil- Itajai, Brasil- Santos, Brasil- Rios de Janeiro, Brasil- Buenos Aires, Argentina",
                "Cód: 103 - Buenos Aires, Argentina- Ilhabela, Brasil- Buzios, Brasil- Rio de Janeiro, Brasil- Buenos Aires, Argentina"
            ];
            if (presupuestoTotalPorPasajero >= preciosArgentinaBrasil[2]) {
                opcionesDestino = parseInt(prompt("Podés seleccionar entre los siguientes itinerarios:\n " + itinerariosArgentinaBrasil[0] + "\n " + itinerariosArgentinaBrasil[1] + "\n" + itinerariosArgentinaBrasil[2] + "\n----------------------------------------------------------------------- \n Ingrese sólo el número del código del itinerario deseado:"));
            } else if (presupuestoTotalPorPasajero >= preciosArgentinaBrasil[1]) {
                opcionesDestino = parseInt(prompt("Podés seleccionar entre los siguientes itinerarios:\n" + itinerariosArgentinaBrasil[0] + "\n" + itinerariosArgentinaBrasil[1] + "\n----------------------------------------------------------------------- \n Ingrese sólo el número del código del itinerario deseado:"));
            } else if (presupuestoTotalPorPasajero >= preciosArgentinaBrasil[0]) {
                opcionesDestino = parseInt(prompt("Podés seleccionar el siguiente itinerario:\n" + itinerariosArgentinaBrasil[0] + "\n----------------------------------------------------------------------- \n Ingrese sólo el número del código del itinerario deseado:"));
            } else {
                alert("No tienes suficiente presupuesto para el destino seleccionado");
                return;
            }
            opcionesDestino = parseInt(opcionesDestino);
            while (isNaN(opcionesDestino) || opcionesDestino <= 100 || opcionesDestino > 103) {
                alert("Opción inválida");
                opcionesDestino = parseInt(prompt("Seleccione la opción deseada del itinerario:"));
            }
            if (opcionesDestino === 101) {
                let costoTotalViaje = preciosArgentinaBrasil[0] * cantidadPasajeros;
                alert (itinerariosArgentinaBrasil[0] + " \n-----------------------------------------------------------------------\n Fecha de salida: \n Fecha de regreso: \n Duración del viaje: \n Puerto de embarque: \n Precio total por pasajero: $" + preciosArgentinaBrasil[0] + "\n Precio total del viaje: $" + costoTotalViaje);
            
            } else if  (opcionesDestino === 102) {
                let costoTotalViaje = preciosArgentinaBrasil[1] * cantidadPasajeros;
                alert (itinerariosArgentinaBrasil[1] + "\n----------------------------------------------------------------------- \n Fecha de salida: \n Fecha de regreso: \n Duración del viaje: \n Puerto de embarque: \n Precio total por pasajero: $" + preciosArgentinaBrasil[1] + "\n Precio total del viaje: $" + costoTotalViaje);
            
            } else if (opcionesDestino === 103) {
                let costoTotalViaje = preciosArgentinaBrasil[2] * cantidadPasajeros;
                alert (itinerariosArgentinaBrasil[2] + "\n----------------------------------------------------------------------- \n Fecha de salida: \n Fecha de regreso: \n Duración del viaje: \n Puerto de embarque: \n Precio total por pasajero: $" + preciosArgentinaBrasil[2] + "\n Precio total del viaje: $" + costoTotalViaje);
            
            } else {
                alert ("opción inválida")
            }
            break;
        case "2":
            let preciosEuropa = [300000, 500000];
            let itinerariosEuropa = [
                "Cód: 104 - Génova, Italia- Marsella, Francia- Barcelona, España",
                "Cód: 105 - Valencia, España- Alicante, España- Marsella, Francia- Génova, Italia- Funchal, Portugal"
            ];
            if (presupuestoTotalPorPasajero >= preciosEuropa[1]) {
                opcionesDestino = parseInt(prompt("Podés seleccionar entre los siguientes itinerarios: \n" + itinerariosEuropa[0] + "\n" + itinerariosEuropa[1] + "\n----------------------------------------------------------------------- \n Ingrese sólo el número del código del itinerario deseado:"));
            } else if (presupuestoTotalPorPasajero >= preciosEuropa[0]) {
                opcionesDestino = parseInt(prompt("Podés realizar el siguiente itinerario:\n" + itinerariosEuropa[0] + "\n----------------------------------------------------------------------- \n Ingrese sólo el número del código del itinerario deseado:"));
            } else {
                alert("No tienes suficiente presupuesto para el destino seleccionado");
                return;
            }
            opcionesDestino = parseInt(opcionesDestino);
            while (isNaN(opcionesDestino) || opcionesDestino <= 103 || opcionesDestino > 105) {
                alert("Opción inválida");
                opcionesDestino = parseInt(prompt("Seleccione la opción deseada del itinerario:"));
            }
            if (opcionesDestino === 104) {
                let costoTotalViaje = preciosEuropa[0] * cantidadPasajeros;
                alert (itinerariosEuropa[0] + " \n-----------------------------------------------------------------------\n Fecha de salida: \n Fecha de regreso: \n Duración del viaje: \n Puerto de embarque: \n Precio total por pasajero: $" + preciosEuropa[0] + "\n Precio total del viaje: $" + costoTotalViaje);
            
            } else if  (opcionesDestino === 105) {
                let costoTotalViaje = preciosEuropa[1] * cantidadPasajeros;
                alert (itinerariosEuropa[1] + "\n----------------------------------------------------------------------- \n Fecha de salida: \n Fecha de regreso: \n Duración del viaje: \n Puerto de embarque: \n Precio total por pasajero: $" + preciosEuropa[1] + "\n Precio total del viaje: $" + costoTotalViaje);
            
            } else {
                alert ("opción inválida")
            }
            break;
        case "3":
            let preciosCaribe = [250000, 300000];
            let itinerariosCaribe = [
                "Cód: 106 - $250000 Miami, Florida- Nassau, Las Bahamas- Falmouth, Jamaica- Miami, Florida",
                "Cód: 107 - $300000 Miami, Florida- CocoCay, Las Bahamas- Nassau, Las Bahamas- Labadee, Haití- Miami, Florida"
            ];
            if (presupuestoTotalPorPasajero >= preciosCaribe[1]) {
                opcionesDestino = parseInt(prompt("Podés seleccionar entre los siguientes itinerarios:\n " + itinerariosCaribe[0] + "\n " + itinerariosCaribe[1] + "\n \n----------------------------------------------------------------------- \n Ingrese sólo el número del código del itinerario deseado:"));
            } else if (presupuestoTotalPorPasajero >= preciosCaribe[0]) {
                opcionesDestino = parseInt(prompt("Podés realizar el siguiente itinerario:\n" + itinerariosCaribe[0] + "\n ----------------------------------------------------------------------- \n Ingrese sólo el número del código del itinerario deseado:"));
            } else {
                alert("No tienes suficiente presupuesto para el destino seleccionado");
                return;
            }
            opcionesDestino = parseInt(opcionesDestino);
            while (isNaN(opcionesDestino) || opcionesDestino <= 105 || opcionesDestino > 107) {
                alert("Opción inválida");
                opcionesDestino = parseInt(prompt("Seleccione la opción deseada del itinerario:"));
            }
            if (opcionesDestino === 106) {
                let costoTotalViaje = preciosCaribe[0] * cantidadPasajeros;
                alert (itinerariosCaribe[0] + " \n-----------------------------------------------------------------------\n Fecha de salida: \n Fecha de regreso: \n Duración del viaje: \n Puerto de embarque: \n Precio total por pasajero: $" + preciosCaribe[0] + "\n Precio total del viaje: $" + costoTotalViaje);
            
            } else if  (opcionesDestino === 107) {
                let costoTotalViaje = preciosCaribe[1] * cantidadPasajeros;
                alert (itinerariosCaribe[1] + "\n----------------------------------------------------------------------- \n Fecha de salida: \n Fecha de regreso: \n Duración del viaje: \n Puerto de embarque: \n Precio total por pasajero: $" + preciosCaribe[1] + "\n Precio total del viaje: $" + costoTotalViaje);
            
            } else {
                alert ("opción inválida")
            } 
            break;
        default:
            alert("Opción inválida");
            break;
    }
}
simuladorPresupuestoCrucero();