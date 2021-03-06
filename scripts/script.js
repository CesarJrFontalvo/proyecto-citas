let formulario = document.getElementById('formulario')
let listarCita = document.getElementById('listarCita')
let buscar = document.getElementById('btnBuscar')
let busqueda = document.getElementById('busqueda')

let citas = JSON.parse(localStorage.getItem('Citas')) || [];

const capturaDatos = ()=>{
    let nombre = document.getElementById('nombre').value
    let fecha = document.getElementById('fecha').value
    let hora = document.getElementById('hora').value
    let sintomas = document.getElementById('sintomas').value

    let registro ={
        nombre,
        fecha,
        hora,
        sintomas
    }

    citas.unshift(registro)
    localStorage.setItem('Citas', JSON.stringify(citas))
    getLocalStorage();
    console.log(citas)
}

const getLocalStorage = () =>{
    listarCita.innerHTML=''

    let citasLocalStorage = JSON.parse(localStorage.getItem('Citas'))
    console.log(citasLocalStorage);

    citasLocalStorage?.map(cita=>{
        const {nombre,fecha,hora, sintomas}= cita
        listarCita.innerHTML+= `
        
            <tr>
                <td>${nombre}</td>
                <td>${fecha}</td>
                <td>${hora}</td>
                <td>${sintomas}</td>
            </tr>
         `
    })
}

buscar.addEventListener('click', e =>{
    e.preventDefault
    let input = document.getElementById('inputBuscar').value
    let data = JSON.parse(localStorage.getItem('Citas'))
    let filtro = data.filter(cita => cita.nombre.toLowerCase() === input.
    toLowerCase())

    busqueda.innerHTML = ''

    filtro.length === 0
    ?
    busqueda.innerHTML += `
    <div style="color:white;">El ${input} no existe</div>
    `
    :
    filtro.map(cita =>{
        const {nombre, fecha, hora, sintomas} = cita
        busqueda.innerHTML += `
            <div style="color:white;">${nombre}</div>
            <div style="color:white;">${fecha}</div>
            <div style="color:white;">${hora}</div>
            <div style="color:white;">${sintomas}</div>
                <button >Borrar</button click="button">
        `
    })

    
    console.log(filtro)

})


formulario.addEventListener('submit', e =>{
    e.preventDefault()
    capturaDatos()
    e.target.reset()
})

document.addEventListener('DOMContentLoaded', getLocalStorage)
