alert ('Bienvenido al simulador de cruceros')

function simuladorPresupuestoCrucero() {
    let cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros:")); 
        while (isNaN(cantidadPasajeros) || cantidadPasajeros <= 0) {
            alert ("opción inválida")
            cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros:")); 
    }
    let presupuesto =  parseInt (prompt ('ingrese su presupuesto total disponible'))
        while (isNaN(presupuesto) || presupuesto <= 0) {
            alert ("opción inválida")
            parseInt (prompt ('ingrese su presupuesto total disponible')); 
    }
    let presupuestoTotalPorPasajero = (presupuesto / cantidadPasajeros)
    alert ("tu presupuesto es de $" + presupuestoTotalPorPasajero + " por pasajero")
    
    let opcionesDestino = prompt ('seleccione el destino deseado: \n1- Argentina/Brasil. \n2 - Europa. \n3 - Caribe.')
        while (opcionesDestino <= 0 || opcionesDestino >= 5) {
            alert ("opción inválida")
            prompt ('seleccione el destino deseado: \n1- Argentina/Brasil. \n2 - Europa. \n3 - Caribe')
    }    
    switch (opcionesDestino) {
        case "1":
            let precioArgentinaBrasilDestinoUno = 100000;
            let precioArgentinaBrasilDestinodos = 150000 ;
            let precioArgentinaBrasilDestinoTres = 200000;
            if (presupuestoTotalPorPasajero >= precioArgentinaBrasilDestinoTres) {
                    alert("Podés seleccionar entre los siguientes itinerarios:  \n1- Buenos Aires, Argentina- Rio de Janeiro, Brasil- Ilha do mel, Brasil- Balneario Camboriú, Brasil- Buenos Aires, Argentina. \n2- Buenos Aires, Argentina- Paranagua, Brasil- Itajai, Brasil- Santos, Brasil- Rios de Janeiro, Brasil- Buenos Aires, Argentina . \n3 - Buenos Aires, Argentina- Ilhabela, Brasil- Buzios, Brasil- Rio de Janeiro, Brasil- Buenos Aires, Argentina");
                } else if (presupuestoTotalPorPasajero >= precioArgentinaBrasilDestinodos){
                    alert ("Podés seleccionar entre los siguientes itinerarios:  \n1- Buenos Aires, Argentina- Rio de Janeiro, Brasil- Ilha do mel, Brasil- Balneario Camboriú, Brasil- Buenos Aires, Argentina. \n2 - Buenos Aires, Argentina- Ilhabela, Brasil- Buzios, Brasil- Rio de Janeiro, Brasil- Buenos Aires, Argentina")
                } else if (presupuestoTotalPorPasajero >= precioArgentinaBrasilDestinoUno) {
                    alert ("Buenos Aires, Argentina- Ilhabela, Brasil- Buzios, Brasil- Rio de Janeiro, Brasil- Buenos Aires, Argentina")
                } else {
                    alert("No tienes suficiente presupuesto para el destino seleccionado");
                }
                break;
        case "2":
            let precioEuropaDestinoUno = 300000;
            let precioEuropaDestinoDos = 500000 ;
                if (presupuestoTotalPorPasajero >= precioEuropaDestinoDos) {
                    alert("Podés seleccionar entre los siguientes itinerarios:  \n1- Génova, Italia- Marsella, Francia- Barcelona, España \n2- Valencia, España- Alicante, España- Marsella, Francia- Génova, Italia- Funchal, Portugal.");
                } else if (presupuestoTotalPorPasajero >= precioEuropaDestinoUno){
                    alert ("Podés realizar el siguiente itinerario:  \nGénova, Italia- Marsella, Francia- Barcelona, España")
                } else {
                    alert("No tienes suficiente presupuesto para el destino seleccionado");
                }
                break;
        case "3":
            let precioCaribeDestinoUno = 250000;
            let precioCaribeDestinoDos = 300000 ;
                if (presupuestoTotalPorPasajero >= precioCaribeDestinoDos) {
                    alert("Podés seleccionar entre los siguientes itinerarios:  \n1-Miami, Florida- Nassau, Las Bahamas- Falmouth, Jamaica- Miami, Florida. \n2- Miami, Florida- CocoCay, Las Bahamas- Nassau, Las Bahamas- Labadee, Haití- Miami, Florida.");
                } else if (presupuestoTotalPorPasajero >= precioCaribeDestinoUno ) {
                    alert ("Podés realizar el siguiente itinerario: Miami, Florida- Nassau, Las Bahamas- Falmouth, Jamaica- Miami, Florida." )
                }else {
                    alert("No tienes suficiente presupuesto para el destino seleccionado");
                }
                break;
            }
}
simuladorPresupuestoCrucero();