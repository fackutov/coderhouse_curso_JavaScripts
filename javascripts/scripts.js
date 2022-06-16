
    // Variantes

let numb
let btnAll = document.getElementById('btnAll')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

let btnCarrito = document.getElementById('btnCarrito')

let main = document.getElementById('main')
let totalCarrito = document.getElementById('totalCarrito')

fetch('javascripts/productos.json') // muestra todos los productos al iniciar la page
.then( respuesta => respuesta.json())
.then( productos => {
    main.innerHTML = `
        <div id="divProductos" class="divProductosClass"></div>
    `
    productos.forEach(prod => {
        divProductos.innerHTML += `
            <div id=producto${prod.id} class="producto">
                <img src='multimedia/imagenes/productos/prod${prod.id}.jpg'>
                <p class="nombreProd">${prod.nombre}</p>
                <P class="universoProd">${prod.universo}</P>
                <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                <p class="precioProd">$ ${prod.precio}</p>
                <button onclick='agregar(${prod.id})' class='botonCompra'>Agregar al carrito</button>
            </div>
        `
    })
})


fetch('javascripts/productos.json') // muestra todos los productos al pulsar el boton home
.then( respuesta => respuesta.json())
.then( productos => {
    btnAll.addEventListener('click', () => {
        main.innerHTML =`
            <div id="divProductos" class="divProductosClass"></div>
        `

        productos.forEach(prod => {
            divProductos.innerHTML += `       
                <div id=producto${prod.id} class="producto">
                    <img src='multimedia/imagenes/productos/prod${prod.id}.jpg'>
                    <p class="nombreProd">${prod.nombre}</p>
                    <P class="universoProd">${prod.universo}</P>
                    <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                    <p class="precioProd">$ ${prod.precio}</p>
                    <button onclick='agregar(${prod.id})' class='botonCompra'>Agregar al carrito</button>
                </div>
            `
        })
    })
})


fetch('javascripts/productos.json') // muestra todos los productos cuyo universo sea pokemon (boton pokemon)
.then( respuesta => respuesta.json())
.then( productos => {
    btn1.addEventListener('click', () => {
        let listaProductos = productos.filter(producto => producto.universo == 'Pokemon')
        main.innerHTML =`
            <div id="divProductos" class="divProductosClass"></div>
        `

        listaProductos.forEach(prod => {
            divProductos.innerHTML += `
                <div id=producto${prod.id} class="producto">
                    <img src='multimedia/imagenes/productos/prod${prod.id}.jpg'>
                    <p class="nombreProd">${prod.nombre}</p>
                    <P class="universoProd">${prod.universo}</P>
                    <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                    <p class="precioProd">$ ${prod.precio}</p>
                    <button onclick='agregar(${prod.id})' class='botonCompra'>Agregar al carrito</button>
                </div>
            `
    })})
})


fetch('javascripts/productos.json') // muestra todos los productos cuyo universo sea marvel (boton marvel)
.then( respuesta => respuesta.json())
.then( productos => {
    btn2.addEventListener('click', () => {
        let listaProductos = productos.filter(producto => producto.universo == 'Marvel')
        main.innerHTML =`
            <div id="divProductos" class="divProductosClass"></div>
        `

        listaProductos.forEach(prod => {
            divProductos.innerHTML += `
                <div id=producto${prod.id} class="producto">
                    <img src='multimedia/imagenes/productos/prod${prod.id}.jpg'>
                    <p class="nombreProd">${prod.nombre}</p>
                    <P class="universoProd">${prod.universo}</P>
                    <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                    <p class="precioProd">$ ${prod.precio}</p>
                    <button onclick='agregar(${prod.id})' class='botonCompra'>Agregar al carrito</button>
                </div>
            `

    })})
})


fetch('javascripts/productos.json') // muestra todos los productos cuyo universo no sea marvel ni pokemon (boton otros)
.then( respuesta => respuesta.json())
.then( productos => {
    btn3.addEventListener('click', () => {
        let listaProductos = productos.filter(producto => producto.universo != 'Marvel' && producto.universo != 'Pokemon')
        main.innerHTML =`
            <div id="divProductos" class="divProductosClass"></div>
        `

        listaProductos.forEach(prod => {
            divProductos.innerHTML += `
                <div id=producto${prod.id} class="producto">
                    <img src='multimedia/imagenes/productos/prod${prod.id}.jpg'>
                    <p class="nombreProd">${prod.nombre}</p>
                    <P class="universoProd">${prod.universo}</P>
                    <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                    <p class="precioProd">$ ${prod.precio}</p>
                    <button onclick='agregar(${prod.id})' class='botonCompra'>Agregar al carrito</button>
                </div>
            `
    })})
})


// CARRITO

let numCarrito = document.getElementById('numCarrito') 

// Agrega el numero al icono de carrito segun la cantidad de elementos que haya en el local storage

function agregarNum() { //solo agrega el num al icono de carrito
    cantidad = agregarStorage()
    numCarrito.innerHTML = `
    ${cantidad.length}
`
}

function totalCompra(){ //suma el precio de todos los productos del carrito
    let lista = JSON.parse(localStorage.getItem('carrito')) || []
    let total = 0

    if (lista.lenght != 0)
        lista.forEach(prod => {
            total += prod.precio
    })
    return total
}

function mostrarCarrito(){  //muestra todos los productos del carrito
    main.innerHTML =`
        <div class="divCarrito" id="carrito">
            <h2>Carrito de compras</h2>
            <div class="infoCarrito">
                <div id="totalCarrito" class="totalCarrito">
                    <p>El total de su compra es: $${totalCompra()}</p>
                    <button onclick='comprarTodo()'> Comprar todo </button>
                </div>
                <button onclick='eliminarCarrito()'> Eliminar todos los articulos </button> 
            </div>
            <div id="divCarrito" class="divCarritoClass"></div>
        </div>
    `

    let lista = JSON.parse(localStorage.getItem('carrito')) || []
    
    if (lista.length != 0 ) {
        lista.forEach(prod =>{
            divCarrito.innerHTML += `

                <div id=producto${prod.id} class="prodCarrito">
                    <div>
                        <img class='imgProd' src='multimedia/imagenes/productos/prod${prod.id}.jpg'>
                    </div>
                    <div>
                        <p>${prod.nombre}</p>
                        <P>${prod.universo}</P>
                        <P>medidas <br>${prod.tamanio}</P>
                    </div>
                    <div>
                        <p class="precioProd">$ ${prod.precio}</p>
                    </div>
                    <div class='btnCompra'>
                        <button onclick=eliminarProdCarrito(${prod.id})><img src='multimedia/imagenes/iconos/logoeliminar.png'/></button>
                        <button onclick='comprar(${prod.id})' class='botonCompra'>Comprar</button>
                    </div>       
                </div>     
            ` 
        })
    } else {
        main.innerHTML = `
            <div class="divCarrito" id="carrito">
                <h2>Carrito de compras</h2>            
                <div id="divCarrito" class="divCarritoClass">
                    <div class="prodCarrito">
                        <p class="pInfo">No hay productos en el carrito</p>
                    </div>
                </div>
            </div>    
        ` 
    }
}

function agregarStorage (){ // recolecta el array de carrito del local storage o en su defecto lo crea
    return JSON.parse(localStorage.getItem('carrito')) || []
}

function guardarStorage (arraycarrito){ 
    localStorage.setItem('carrito', JSON.stringify(arraycarrito))    
}

function agregar(idprod){ //agrego un nuevo producto a la array del carrito y lanzo una pequeña alerta con toastify
  
    fetch('javascripts/productos.json')
    .then( respuesta => respuesta.json())
    .then( productos => {
        let carrito = agregarStorage()
        let prodEncontrado = productos.find(p => p.id == idprod)
        carrito.push(prodEncontrado)
        guardarStorage(carrito)
        Toastify({
            text: "agregado correctamente",
            duration: 4000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
            background: "linear-gradient(to right, #6ca2db, #006cdf)",
            },
        }).showToast();
        agregarNum(carrito)
    })

}

function comprar(idProd){ // imito la funcion eliminar prod del carrito al darle al boton de comprar para quitar un producto del carrito, ya que este proceso no pasa por todo el tramite de venta, en su lugar solo lanza una alerta de sweetalert alegando la compra

    let lista = JSON.parse(localStorage.getItem('carrito'))
    let enumerar = [] 

    lista.forEach(prod => { 
        enumerar.push(1) 
        let largoenumerar = enumerar.length 

        if (prod.id == idProd){ 
            lista.splice(largoenumerar -1, 1)
            Swal.fire({
                icon: 'success',
                title: 'Gracias por su preferencia',
            })
        }
    })

    localStorage.setItem('carrito', JSON.stringify(lista))
    mostrarCarrito()
}

function comprarTodo(){ // compra todo los productos del carrito

    Swal.fire({
        title: 'Quieres comprar todos los productos?',
        showDenyButton: true,
        confirmButtonText: 'si quiero',
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('carrito')
          Swal.fire('Gracias por su preferencia', '', 'success')
          mostrarCarrito()
          agregarNum()
          totalCompra()
        }
      })
}


function eliminarProdCarrito(idProd){ // elimino un unico producto del carrito al cual le paso el id de ese producto

    let lista = JSON.parse(localStorage.getItem('carrito')) // pido datos del local storage
    let enumerar = [] // lista donde agregare un numero por cada iteracion del forEach

    lista.forEach(prod => { // itero todos los productos que tengo en el carrito
        enumerar.push(1) // agrego un numero a la lista enumerar cada vez que pasa por el forEach 
        let largoenumerar = enumerar.length // coloco esto dentro del ciclo porque quiero saber siempre cuantas veces a pasado por aqui

        if (prod.id == idProd){ // consulto si el id del producto del carrito que esta iterando en ese momento es igual al id del producto que quiero eliminar
            lista.splice(largoenumerar -1, 1) // elimino el producto que esta en la ultima posicion generada cuando se dio la condicion (si tengo 10 prod en el carrito y quiero eliminar el 5to esta funcion iterara 5 veces y eliminara el producto que se encuentra en la posicion 5 del array que traigo de local storage)
            Toastify({ //alerta de eliminacion
                text: "Producto eliminado correctamente",
                duration: 4000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #6ca2db, #006cdf)",
                },
              }).showToast();
        }
    })

    localStorage.setItem('carrito', JSON.stringify(lista))

    mostrarCarrito() 
    agregarNum()
    //totalCompra() //reseteo el carrito, el numero en el icono del carrito y el total de la compra
}

function eliminarCarrito(){ // elimino todos los productos del carrito

    Swal.fire({
        title: 'Quieres eliminar todos los productos?',
        showDenyButton: true,
        confirmButtonText: 'si quiero',
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('carrito')
          Swal.fire('Productos eliminados correctamente', '', 'success')
          mostrarCarrito()
          agregarNum()
          totalCompra()
        }
      })
}

agregarNum()
