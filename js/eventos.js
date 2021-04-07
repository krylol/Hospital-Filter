let seccionPacientes = document.querySelector('#pacientes');
let cajaNumeroPacientes = document.querySelector('#numeropacientes');



function pintarPacientes(pListaPacientes) {
    seccionPacientes.innerHTML = "";
    cajaNumeroPacientes.innerText = pListaPacientes.length;
    pListaPacientes.forEach(paciente => {
        pintarUnPaciente(paciente);
    })
}

function pintarUnPaciente(pObjPaciente) {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    let div = document.createElement('div');
    div.classList.add('diagnostico');

    //contenido

    let contenth3 = document.createTextNode(pObjPaciente.nombre + " " + pObjPaciente.apellido);

    let contentUl = `<li>EDAD: ${pObjPaciente.edad}</li>
                    <li>NUMERO SEGURIDAD SOCIAL: ${pObjPaciente.numeroSS}</li>`;

    let contentdiv = document.createTextNode(pObjPaciente.diagnostico);

    //meter cada contenido en su contenedor


    h3.appendChild(contenth3);
    ul.innerHTML = contentUl;
    div.appendChild(contentdiv);

    article.appendChild(h3)
    article.appendChild(ul)
    article.appendChild(div);


    seccionPacientes.appendChild(article);

}

pintarPacientes(pacientes);

//filtro por edad en el interfaz

let selectEdadMin = document.querySelector('#edadMin');
let selectEdadMax = document.querySelector('#edadMaxima');
let btnEdad = document.querySelector('#botonEdad');

btnEdad.addEventListener('click', recogerDatosEdad);

function recogerDatosEdad(event) {
    event.preventDefault();

    let edadminima = selectEdadMin.value;
    let edadmaxima = selectEdadMax.value;

    let listaEdad = filtrarXEdad(pacientes, edadminima, edadmaxima);
    pintarPacientes(listaEdad);
}

//filtro diagnostico

let selectDiagnostico = document.querySelector('#diagnostico');

selectDiagnostico.addEventListener('change', recogerDiagnostico);

function recogerDiagnostico(event) {
    let diagnostico = event.target.value;

    if (event.target.value != "") {
        let listaDiagnosticos = filtrarXdiagnostico(pacientes, diagnostico);
        pintarPacientes(listaDiagnosticos);
    } else {
        pintarPacientes(pacientes);
    }
}

//superfiltro
let selectEdadMin2 = document.querySelector('#edadMin2');
let selectEdadMax2 = document.querySelector('#edadMaxima2');
let selectDiagnotico2 = document.querySelector('#diagnostico2');
let superboton = document.querySelector('#superboton');

//voy a rellenar el selector de edad maxima
const aniosMax = 100;
for (let i = 1; i <= aniosMax; i++) {
    selectEdadMax2.innerHTML += `<option value="${i}">${i}</option>`;
    selectEdadMin2.innerHTML += `<option value="${i}">${i}</option>`;
}

superboton.addEventListener('click', recogerDatosSuperFiltro);

function recogerDatosSuperFiltro(event) {
    event.preventDefault();

    let edadmin = selectEdadMin2.value;
    let edadmax = selectEdadMax2.value;
    let diagnostico = selectDiagnotico2.value;

    const listaEdad = filtrarXEdad(pacientes, edadmin, edadmax);
    const listaEdadDiagnostico = filtrarXdiagnostico(listaEdad, diagnostico)

    pintarPacientes(listaEdadDiagnostico);

}

//busqueda por nombre 

let inputBuscar = document.querySelector('#pacienteNombre');
let btnBuscar = document.querySelector('#buscar');

//boton de buscar
//btnBuscar.addEventListener('click', recogerDatosBusqueda);

//lanza el evento el input
inputBuscar.addEventListener('input', recogerDatosBusqueda);

function recogerDatosBusqueda(event) {

    let nombreBuscar = inputBuscar.value;
    let listaBusqueda = busquedaXnombre(pacientes, nombreBuscar);

    pintarPacientes(listaBusqueda);

}