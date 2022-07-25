// variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
const resultado = document.querySelector('#resultado')

// variables de años
const max = new Date().getFullYear()
const min = max - 10

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    transmision: '',
    color: '',

}

// eventos
document.addEventListener('DOMContentLoaded', () => {
    // muestra los autos al cargar
    mostrarAutos(autos)

    // llena las opciones de años
    llenarSelect()
})

// Eventos para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value

    filtrarAuto()
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value)
    
    filtrarAuto()
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value

    filtrarAuto()
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value

    filtrarAuto()
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value)

    filtrarAuto()
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value

    filtrarAuto()
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value

    filtrarAuto()
})

// funciones
const mostrarAutos = (autos) => {

    limpiarHTML() // Elimina el HTML previo 

    autos.forEach(auto => {
        const autoHTML = document.createElement('p')

        autoHTML.textContent = `
            ${auto.marca} - ${auto.modelo} - ${auto.year} - ${auto.color} - ${auto.puertas} Puertas - 
            Transmision: ${auto.transmision} - $${auto.precio}
        `

        // insertar el resultado en el html
        resultado.appendChild(autoHTML)
    });
}

// funcion limpiar html
const limpiarHTML = () => {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

// genera los años del select
const llenarSelect = () => {
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
    }
}

// Funcion que filtra en base a la busqueda
const filtrarAuto = () => {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision).filter( filtrarColor )
    // console.log('filtrando...')

    // console.log(resultado)

    if(resultado.length) {
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
}

// si el filtrado del usuario no coincide con los datos de busqueda
const noResultado = () => {

    limpiarHTML()

    const sinResultado = document.createElement('div')
    sinResultado.classList.add('alerta', 'error')
    sinResultado.textContent = 'No hay resultados de busqueda...'
    resultado.appendChild(sinResultado)
}

// funcion de alto nivel 
function filtrarMarca(auto){
    // console.log(auto)

    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}

// filtrar por año
function filtrarYear(auto){
    // console.log(auto)

    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }
    return auto;
}

// filtrar Minimo 
function filtrarMinimo(auto){
    // console.log(auto)

    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    return auto;
}

// filtrar Maximo
function filtrarMaximo(auto) {
    // console.log(auto)

    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto;
}

// filtar por puertas
function filtrarPuertas(auto){ 
    // console.log(auto)

    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas
    }
    return auto;
}

// filtrar por Transmision
function filtrarTransmision(auto){ 
   // console.log(auto)

   if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }   
    return auto; 

}

// filtrar por Color
function filtrarColor(auto){ 
    // console.log(auto)

    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }
    return auto;
}