function cantidadCarrito(){
    let cantidadCarrito=localStorage.getItem('cartNumbers');
    cantidadCarrito= JSON.parse(cantidadCarrito);
    document.querySelector('.cantidadCarrito').textContent = cantidadCarrito;
}

var contenedorPregunta  =  document.querySelectorAll('.contenedor-pregunta');

contenedorPregunta.forEach((contenedorPregunta)=>{
    contenedorPregunta.addEventListener('click',(e)=>{
        e.currentTarget.classList.toggle('activa');
    });
})

var contenedorBusqueda  =  document.querySelectorAll('.busqueda');

var busqueda = document.getElementById("busqueda")

contenedorBusqueda.forEach((contenedorBusqueda)=>{
    contenedorBusqueda.addEventListener('click',(e)=>{
        e.target.classList.toggle('activa');
    });
})

cantidadCarrito();