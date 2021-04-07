//filtro por edad
function filtrarXEdad(pListaPacientes, pEdadMinima, pEdadMaxima) {
    const listaFiltrada = pListaPacientes.filter(paciente => {
        return paciente.edad >= pEdadMinima && paciente.edad <= pEdadMaxima
    });
    return listaFiltrada;
}

//filtrar por diagnostico

function filtrarXdiagnostico(pListaPacientes, pDiagnostico) {
    const listaFiltrada = pListaPacientes.filter(paciente => {
        return paciente.diagnostico.toLowerCase() == pDiagnostico.toLowerCase();
    })
    return listaFiltrada
}

//filtro de busqueda 

function busquedaXnombre(pListaPacientes, pNombre) {

    const listaFiltrada = pListaPacientes.filter(paciente => {
        return paciente.nombre.toLowerCase().includes(pNombre.toLowerCase())
    })
    return listaFiltrada;
}