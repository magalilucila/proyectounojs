let itinerarios = [
    {itinerariosArgentinaBrasil: [
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
    ]},

    {itinerariosEuropa: [
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
]},

    {itinerariosCaribe: [
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
]}
];
document.addEventListener('DOMContentLoaded', function() {
    // Cantidad de pasajeros
    const labelCantidadPasajeros = document.createElement('label');
    labelCantidadPasajeros.setAttribute('for', 'cantidad-pasajeros');
    labelCantidadPasajeros.textContent = 'Ingrese la cantidad de Pasajeros:';

    const inputCantidadPasajeros = document.createElement('input');
    inputCantidadPasajeros.setAttribute('type', 'number');
    inputCantidadPasajeros.setAttribute('id', 'cantidad-pasajeros');

    // Presupuesto disponible
    const labelPresupuestoDisponible = document.createElement('label');
    labelPresupuestoDisponible.setAttribute('for', 'presupuesto-disponible');
    labelPresupuestoDisponible.textContent = 'Ingrese su presupuesto total disponible para este viaje:';

    const inputPresupuestoDisponible = document.createElement('input');
    inputPresupuestoDisponible.setAttribute('type', 'number');
    inputPresupuestoDisponible.setAttribute('id', 'presupuesto-disponible');

    const contenedor = document.getElementById('contenedor');
    if (contenedor) {
        contenedor.appendChild(labelCantidadPasajeros);
        contenedor.appendChild(inputCantidadPasajeros);
        contenedor.appendChild(labelPresupuestoDisponible);
        contenedor.appendChild(inputPresupuestoDisponible);
    }

    // Botón de calcular
    const calcularButton = document.getElementById('calcular');
        if (calcularButton) {
            calcularButton.addEventListener('click', calcular);
        }

    // Función para calcular el presupuesto por pasajero
    function calcular() {
        let cantidadPasajeros = parseInt(document.getElementById('cantidad-pasajeros').value);
        while (isNaN(cantidadPasajeros) || cantidadPasajeros <= 0) {
        alert('Opción inválida');
        cantidadPasajeros = parseInt(document.getElementById('cantidad-pasajeros').value);
        }

    const presupuestoDisponible = parseInt(document.getElementById('presupuesto-disponible').value);
    const presupuestoPorPasajero = presupuestoDisponible / cantidadPasajeros;

    document.getElementById('resultado').innerHTML = "Tu presupuesto es de $ " + presupuestoPorPasajero + " por pasajero";
    }

    // Elegir el destino
    const labelDestino = document.createElement('label');
    labelDestino.setAttribute('for', 'destino');
    labelDestino.textContent = 'Seleccione el destino:';

    const selectDestino = document.createElement('select');
    selectDestino.setAttribute('id', 'destino');
    const option1 = document.createElement('option');
    option1.setAttribute('value', 'argentina-brasil');
    option1.textContent = 'Argentina/Brasil';
    const option2 = document.createElement('option');
    option2.setAttribute('value', 'europa');
    option2.textContent = 'Europa';
    const option3 = document.createElement('option');
    option3.setAttribute('value', 'caribe');
    option3.textContent = 'Caribe';

    selectDestino.appendChild(option1);
    selectDestino.appendChild(option2);
    selectDestino.appendChild(option3);

    const contenedorDestino = document.getElementById('contenedorDestino');

    if (contenedorDestino) {
        contenedorDestino.appendChild(labelDestino);
        contenedorDestino.appendChild(selectDestino);
    }


    const itinerariosArgentinaBrasilList = document.getElementById('itinerarios-argentina-brasil');
    const itinerariosEuropaList = document.getElementById('itinerarios-europa');
    const itinerariosCaribeList = document.getElementById('itinerarios-caribe');

    function mostrarItinerarios(itinerarios, lista) {
        for (let i = 0; i < itinerarios.length; i++) {
            const itinerario = itinerarios[i];
            const button = document.createElement('button');
            button.classList.add('itinerario-button');
            button.textContent = itinerario.codigo + ' - ' + itinerario.descripcion;
            button.dataset.itinerario = JSON.stringify(itinerario);
            lista.appendChild(button);
        } 
        }


    mostrarItinerarios(itinerarios[0].itinerariosArgentinaBrasil, itinerariosArgentinaBrasilList);
    mostrarItinerarios(itinerarios[1].itinerariosEuropa, itinerariosEuropaList);
    mostrarItinerarios(itinerarios[2].itinerariosCaribe, itinerariosCaribeList);

    // Función para manejar el evento de selección de itinerario
    function seleccionarItinerario(event) {
        const itinerarioSeleccionado = event.target.dataset.itinerario;
        const itinerario = JSON.parse(itinerarioSeleccionado);
        const cantidadPasajeros = parseInt(document.getElementById('cantidad-pasajeros').value);
        const presupuestoTotalPorPasajero = parseInt(document.getElementById('presupuesto-disponible').value) / cantidadPasajeros;
      const precioTotal = itinerario.precio * cantidadPasajeros;

        if (precioTotal <= presupuestoTotalPorPasajero) {
            const mensaje = `Itinerario seleccionado: 
            ${itinerario.codigo} -  ${itinerario.descripcion} 
            -------------------------------------------------------- 
            Fecha de salida: ${itinerario.fechaSalida} 
            Fecha de regreso: ${itinerario.fechaRegreso} 
            Duración del viaje: ${itinerario.duracionViaje} 
            Puerto de embarque: ${itinerario.puertoEmbarque} 
            Precio total por pasajero: $${itinerario.precio} 
            Precio total del viaje: $${precioTotal}`;

            document.getElementById('resultado').innerHTML = mensaje;
        } else {
            document.getElementById('resultado').innerHTML = "Lo siento, el precio total del itinerario seleccionado excede tu presupuesto.";
        }
    }

    const itinerarioButtons = document.querySelectorAll('.itinerario-button');
    itinerarioButtons.forEach(button => {
        button.addEventListener('click', seleccionarItinerario);
    });

    selectDestino.addEventListener("change", function() {
    const destinoSeleccionado = this.value;

      // Ocultar las listas de itinerarios
        const listasItinerarios = document.querySelectorAll(".lista-itinerarios");
        listasItinerarios.forEach(lista => {
        lista.style.display = "none";
        });

      // Mostrar solo la lista correspondiente al destino seleccionado
        if (destinoSeleccionado === "argentina-brasil") {
            itinerariosArgentinaBrasilList.style.display = "block";
        }
        if (destinoSeleccionado === "europa") {
            itinerariosEuropaList.style.display = "block";
        }
        if (destinoSeleccionado === "caribe") {
            itinerariosCaribeList.style.display = "block";
        }
    });
});
