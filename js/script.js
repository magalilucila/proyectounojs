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
    inputPresupuestoDisponible.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        calcular();
      }
    });
  }

// Función para calcular el presupuesto por pasajero
function calcular() {
  let cantidadPasajeros = parseInt(document.getElementById('cantidad-pasajeros').value);
  while (isNaN(cantidadPasajeros) || cantidadPasajeros <= 0) {
    alert('Opción inválida');
    cantidadPasajeros = parseInt(document.getElementById('cantidad-pasajeros').value);
    return;
  }

  const presupuestoDisponible = parseInt(document.getElementById('presupuesto-disponible').value);
  const presupuestoPorPasajero = presupuestoDisponible / cantidadPasajeros;

  document.getElementById('resultado').innerHTML = "Tu presupuesto es de $ " + presupuestoPorPasajero + " por pasajero";

  // Guardar los datos en el local storage
  localStorage.setItem('cantidadPasajeros', cantidadPasajeros);
  localStorage.setItem('presupuestoDisponible', presupuestoDisponible);
}


     // Guardar los datos en el local storage
      localStorage.setItem('cantidadPasajeros', inputCantidadPasajeros.value);
      localStorage.setItem('presupuestoDisponible', inputPresupuestoDisponible.value);

   // Obtener los datos del local storage
    const cantidadPasajerosGuardados = localStorage.getItem('cantidadPasajeros');
    const presupuestoDisponibleGuardado = localStorage.getItem('presupuestoDisponible');
  
   // Utilizar los datos guardados
    console.log(cantidadPasajerosGuardados);
    console.log(presupuestoDisponibleGuardado); 

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
    } else {
    alert("No se ha podido agregar el campo de destino");
  }



  const itinerarios = [];
  const sectionItinerario = document.querySelector('#itinerarios');
  
  function getData() {
    fetch('../js/itinerarios.json')
      .then (res => {
        if (!res.ok) {
          throw new Error('Hubo un problema al obtener los datos');
        }
        return res.json()
      })
      .then(data => {
        let itinerarioAbFilter = data.itinerarios.filter(itinerarios => itinerarios.destino === 'Argentina/Brasil')
        
        let itinerarioEFilter = data.itinerarios.filter(itinerarios => itinerarios.destino === 'Europa')
        
        let itinerarioCFilter = data.itinerarios.filter(itinerarios => itinerarios.destino === 'Caribe')
        mostrarItinerarios(itinerarioAbFilter);
        mostrarItinerarios(itinerarioEFilter);
        mostrarItinerarios(itinerarioCFilter);
      })
      .catch(error => console.log ('Hubo un error:', error))
    };

    function mostrarItinerarios(data) {
      data.forEach(itinerario => {
        let button = document.createElement('button');
        button.setAttribute('class', 'itinerario-button');
        button.innerHTML += 
          `<div>
            <h2>Destino: ${itinerario.destino}</h2>
            <h3>Cod: ${itinerario.codigo}</h3>
            <p>"${itinerario.descripcion}"</p>
          </div>`;
        sectionItinerario.append(button);
    
        // Agregar evento de clic al botón de itinerario
        button.addEventListener('click', function() {

      // Mostrar mensaje de alerta utilizando Toastify
          Toastify({
            text: `Itinerario seleccionado: ${itinerario.codigo} - ${itinerario.destino} - 
            ${itinerario.descripcion} - 
            Fecha de salida: ${itinerario.fechaSalida} - 
            Fecha de regreso: ${itinerario.fechaRegreso} - 
            Duración del viaje: ${itinerario.duracionViaje} - 
            Puerto de embarque: ${itinerario.puertoEmbarque} - 
            Precio por pasajero: ${itinerario.precio}`,
            className: Toastify,
            gravity: "top",
            position:"center",
            stopOnFocus: false,
            onClick: null,
            duration: 5000, 
            stopOnFocus: true 
          }).showToast();
        });
      });
    }
    getData()
    



});














