let formulario = document.getElementById('formulario')
let guardar = document.getElementById('btnBuscar')

let register =JSON.parse(localStorage.getItem('Register')) || []

const capturaDatos = ()=>{
    let nombre = document.getElementById('nombre').value
    let password = document.getElementById('password').value
    
    let registro ={
        nombre,
        password
    }

     register.unshift(registro)
     localStorage.setItem('Register', JSON.stringify(register))
     getLocalStorage();
    console.log(register)
}

const getLocalStorage = () =>{

    let registrarLocalStorage = JSON.parse(localStorage.getItem('Register'))
    console.log(registrarLocalStorage);
  
}

formulario.addEventListener('submit', e =>{
    e.preventDefault()
    capturaDatos()
   
})
document.addEventListener('DOMContentLoaded', getLocalStorage)

