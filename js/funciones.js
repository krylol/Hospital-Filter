function filtrarXEdad(pListaPacientes, pEdadMinima, pEdadMaxima) {
    const listaFiltrada = pListaPacientes.filter(paciente => {
        return paciente.edad >= pEdadMinima && paciente.edad <= pEdadMaxima
    });
    return listaFiltrada;
}

function filtroEdad(event) { //he logrado que funcione el filtro pero no se como hacer que pinte en pantalla, solo soy capaz de que salga por consola
    event.preventDefault();
    const edadMinima = parseInt(document.querySelector('#edadMin').value)
    const edadMax = parseInt(document.querySelector('#edadMaxima').value)
    let filtered = filtrarXEdad(pacientes,edadMinima,edadMax)
    console.log(filtered)
    pintarPaciente(filtroEdad)

    
     
}

function pintarPacientes(pListaPacientes) {
    pListaPacientes.forEach(paciente => pintarPaciente(paciente));
}
function pintarPaciente(pPaciente) {
    let li = document.createElement('li');
    let nombrePaciente = document.createTextNode(pPaciente.nombre + " ")
    let apellidoPaciente = document.createTextNode(pPaciente.apellido + " ")
    let edadPaciente = document.createTextNode(pPaciente.edad)
    let diagnosticoPaciente = document.createTextNode(pPaciente.diagnostico)
    
    
    li.appendChild(nombrePaciente)
    li.appendChild(apellidoPaciente)
    li.appendChild(edadPaciente)
    li.appendChild(diagnosticoPaciente)

    pintarPacientes(nombrePaciente, apellidoPaciente, edadPaciente)
}

const boton1 = document.querySelector('#botonEdad')

boton1.addEventListener('click', filtroEdad);








//filtrar por diagnostico
//el filtro por diagnostico funciona pero me devuelve un array vacio no se como lograr que me devuelva datos

function filtrarXdiagnostico(pListaPacientes, pDiagnostico) {
    const listaFiltrada = pListaPacientes.filter(paciente => {
        return paciente.diagnostico.toLowerCase() == pDiagnostico.toLowerCase();
    })
    return listaFiltrada
}

const botonDiag = document.querySelector('#diagnostico')

botonDiag.addEventListener('change', filtroDiagnostico); 


function filtroDiagnostico(event) {
    event.preventDefault();
  
    const Diagnostico  = document.querySelector('#diagnostico').value
    let filtered = filtrarXEdad(pacientes, Diagnostico)
    console.log(filtered);

}


const botonEdad1 = document.querySelector('#edadmin2')
const botonEdad2 = document.querySelector('#edadmax2')
const botonDiag2 = document.querySelector('#diagnostico2')


function filtroEdad2(event) { //con el superfiltro me pasa lo mismo que con el boton de diagnostico me devuelve un array vacio
    event.preventDefault();
    const edadMinima2 = parseInt(document.querySelector('#edadMin2').value)
    const edadMax2 = parseInt(document.querySelector('#edadMaxima2').value)
    let filtered = filtrarXEdad(pacientes,edadMinima2,edadMax2)
    console.log(filtered)
    
    
}

function filtroDiagnostico2(event) {
    event.preventDefault();
  
    const Diagnostico  = document.querySelector('#diagnostico').value
    let filtered = filtrarXEdad(pacientes, Diagnostico)
    console.log(filtered);

}


const boton2 = document.querySelector('#superboton')
boton2.addEventListener('click', filtroEdad2, filtroDiagnostico2);


//al usar includes me devuelve undefined en la consola

const enfermos = pacientes.forEach(paciente => paciente.nombre.includes("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"))
const enfermos2 = pacientes.forEach(paciente => paciente.apellido.includes("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"))


console.log(enfermos);
console.log(enfermos2);








