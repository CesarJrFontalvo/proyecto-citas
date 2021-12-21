let formulario = document.getElementById('formulario')
let guardar = document.getElementById('btnSubmit')

let register =[]
const capturaDatos = ()=>{
    let nombre = document.getElementById('nombre').value
    let numero = document.getElementById('numero').value
    let password = document.getElementById('password').value
    
    let registro ={
        nombre,
        numero,
        password
    }

    // register.unshift(registro)
    // localStorage.setItem('Register', JSON.stringify(register))
    // getLocalStorage();
    console.log(register)
}

formulario.addEventListener('submit', e =>{
    e.preventDefault()
    capturaDatos()
   
})