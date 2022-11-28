const botonClose = document.querySelector('.close-icon')
const verMeses = document.querySelector('.ver-mensualidades')
const contenedorMeses = document.querySelector('.contenedor-meses')
const checkbox = document.querySelector('#boton-checkbox')
const inputCupon = document.querySelector('.input-cupon')
const precioPrincipal = document.querySelector('.precio')
const boton = document.querySelector('#boton')
const noValido= document.querySelector('.no-valido')


verMeses.addEventListener('click', toggleMesesMenu)
botonClose.addEventListener('click',toggleMesesMenu)
checkbox.addEventListener('click',toggleCuponDescuento)
boton.addEventListener('click',calcularConCupon)


function toggleMesesMenu(){
    contenedorMeses.classList.toggle('inactive')
}

function toggleCuponDescuento(){
    inputCupon.classList.toggle('inactive')
    boton.classList.toggle('inactive')
}
function calcularConCupon(){
const price = 9699
const cupon = inputCupon.value
let descuento

if (cupon == 'Cupon'){
    descuento = 20
}else{
    noValido.innerText = 'Cupon No Valido'
    return
}
        const newPrice = (price * (100 - descuento)) / 100;
        noValido.innerHTML = 'El nuevo precio es ' + newPrice

}
