
/*
Para la entrega del desafio cree una pequeña interfaz simple la cual ire ampliando y mejorando lo mayor posible en el transcurso del curso
*/

    // Variantes

let numb
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')

class Producto {
    constructor(id, tipo, nombre, universo, tamanio, precio, stock){
        this.id = id
        this.tipo = tipo
        this.nombre = nombre
        this.universo = universo
        this.tamanio = tamanio
        this.precio = precio
        this.stock = stock
    }
}

const prod_1 = new Producto (1, 'Figura', 'bulbasaur', 'Pokemon', '10 x 10 x 10', 900, 5)
const prod_2 = new Producto (2, 'Figura', 'charmander', 'Pokemon', '10 x 10 x 10', 900, 7)
const prod_3 = new Producto (3, 'Figura', 'squirtle', 'Pokemon', '10 x 10 x 10', 900, 12)
const prod_4 = new Producto (4, 'Figura', 'spiderman', 'Marvel', '9 x 12 x 12', 400, 3)
const prod_5 = new Producto (5, 'Figura', 'ironman', 'Marvel', '8 x 7 x 7', 300, 10)
const prod_6 = new Producto (6, 'Figura', 'spider-Ham', 'Marvel', '8 x 7 x 7', 300, 1)
const prod_7 = new Producto (7, 'Figura', 'vi', 'League of legends', '9 x 8 x 8', 700, 15)
const prod_8 = new Producto (8, 'Cartas', 'pokemon evolving skies', 'Pokemon', '12 x 7 x 2', 150, 7)
const prod_9 = new Producto (9, 'juguete', 'cubo Rubik 3x3x3', 'Rubik', '6 x 6 x 6', 600, 5)

let productos = [prod_1, prod_2, prod_3, prod_4, prod_5, prod_6, prod_7, prod_8, prod_9]

let divProductos = document.getElementById('divProductos')
let divCarrito = document.getElementById('divCarrito')
let totalCarrito = document.getElementById('totalCarrito')

productos.forEach(prod => {
    divProductos.innerHTML += `
        <div id=producto${prod.id} class="producto">
            <img src='../multimedia/imagenes/productos/prod${prod.id}.jpg'>
            <p class="nombreProd">${prod.nombre}</p>
            <P class="universoProd">${prod.universo}</P>
            <P class="medidasProd">medidas <br>${prod.tamanio}</P>
            <p class="precioProd">$ ${prod.precio}</p>
            <button onclick='agregar(${prod.id})' class='botonCompra'>Agregar al carrito</button>
        </div>
    `
})

btnAll.addEventListener('click', () => {
    divProductos.innerHTML =``

    productos.forEach(prod => {
        divProductos.innerHTML += `
            <div id=producto${prod.id} class="producto">
                <img src='../multimedia/imagenes/productos/prod${prod.id}.jpg'>
                <p class="nombreProd">${prod.nombre}</p>
                <P class="universoProd">${prod.universo}</P>
                <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                <p class="precioProd">$ ${prod.precio}</p>
                <button onclick='agregar(${prod.id})' class='botonCompra'>Agregar al carrito</button>
            </div>
        `
    })
})

btn1.addEventListener('click', () => {
    let listaProductos = productos.filter(producto => producto.universo == 'Pokemon')
    divProductos.innerHTML =``

    listaProductos.forEach(prod => {
        divProductos.innerHTML += `
            <div id=producto${prod.id} class="producto">
                <img src='../multimedia/imagenes/productos/prod${prod.id}.jpg'>
                <p class="nombreProd">${prod.nombre}</p>
                <P class="universoProd">${prod.universo}</P>
                <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                <p class="precioProd">$ ${prod.precio}</p>
                <button onclick='agregar(${prod.id})' class='botonCompra'>Agregar al carrito</button>
            </div>
        `
})})

btn2.addEventListener('click', () => {
    let listaProductos = productos.filter(producto => producto.universo == 'Marvel')
    divProductos.innerHTML =``

    listaProductos.forEach(prod => {
        divProductos.innerHTML += `
            <div id=producto${prod.id} class="producto">
                <img src='../multimedia/imagenes/productos/prod${prod.id}.jpg'>
                <p class="nombreProd">${prod.nombre}</p>
                <P class="universoProd">${prod.universo}</P>
                <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                <p class="precioProd">$ ${prod.precio}</p>
                <button onclick='agregar(${prod.id})' class='botonCompra'>Agregar al carrito</button>
            </div>
        `

})})

btn3.addEventListener('click', () => {
    let listaProductos = productos.filter(producto => producto.universo == 'League of legends')
    divProductos.innerHTML =``

    listaProductos.forEach(prod => {
        divProductos.innerHTML += `
            <div id=producto${prod.id} class="producto">
                <img src='../multimedia/imagenes/productos/prod${prod.id}.jpg'>
                <p class="nombreProd">${prod.nombre}</p>
                <P class="universoProd">${prod.universo}</P>
                <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                <p class="precioProd">$ ${prod.precio}</p>
                <button onclick='agregar(${prod.id})' class='botonCompra'>Agregar al carrito</button>
            </div>
        `
})})

btn4.addEventListener('click', () => {
    let listaProductos = productos.filter(producto => producto.universo == 'Rubik')
    divProductos.innerHTML =``

    listaProductos.forEach(prod => {
        divProductos.innerHTML += `
            <div id=producto${prod.id} class="producto">
                <img src='../multimedia/imagenes/productos/prod${prod.id}.jpg'>
                <p class="nombreProd">${prod.nombre}</p>
                <P class="universoProd">${prod.universo}</P>
                <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                <p class="precioProd">$ ${prod.precio}</p>
                <button onclick='agregar(${prod.id})' class='botonCompra'>Agregar al carrito</button>
            </div>
        `
})})

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
    totalCarrito.innerHTML = `
        <p>El total de su compra es ${total}</p>
        <button onclick='comprarTodo()'>Comprar todo</button>
    `
}

function mostrarCarrito(){  //muestra todos los productos del carrito (queria hacer que esto apareciera en otro HTML pero no pude asi que me lo llevo de tarea)
    divCarrito.innerHTML =``

    let lista = JSON.parse(localStorage.getItem('carrito')) || []

    if (lista.length != 0 ) {
        lista.forEach(prod =>{
            divCarrito.innerHTML += `
                <div id=producto${prod.id} class="prodCarrito">
                    <div>
                        <img class='imgProd' src='../multimedia/imagenes/productos/prod${prod.id}.jpg'>
                    </div>
                    <div>
                        <p class="nombreProd">${prod.nombre}</p>
                        <P class="universoProd">${prod.universo}</P>
                        <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                    </div>
                    <div>
                        <p class="precioProd">$ ${prod.precio}</p>
                    </div>
                    <div class='btnCompra'>
                        <button onclick=eliminarProdCarrito(${prod.id})>X</button>
                        <button onclick='comprar(${prod.id})' class='botonCompra'>Comprar</button>
                    </div>
                    
                </div>
            ` 
        })
    } else {
        divCarrito.innerHTML = `
            <div class="prodCarrito">
                <p>No hay productos en el carrito</p>
            </div>
        ` 
    }
    totalCompra()
}

function agregarStorage (){ // recolecta el array de carrito del local storage o en su defecto lo crea
    return JSON.parse(localStorage.getItem('carrito')) || []
}

function guardarStorage (arraycarrito){ 
    localStorage.setItem('carrito', JSON.stringify(arraycarrito))    
}

function agregar(idprod){ //agrego un nuevo producto a la array del carrito y lanzo una pequeña alerta con toastify
    let carrito = agregarStorage()
    let prodEncontrado = productos.find(p => p.id == idprod)
    carrito.push(prodEncontrado)
    guardarStorage(carrito)
    Toastify({
        text: "agregado correctamente",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();

    agregarNum(carrito)
    mostrarCarrito()
}

function comprar(){ // la funcion de compra solo lanza una pequeña alerta ya que no pasa por todo el tramite de pago

    Swal.fire({
        icon: 'sucess',
        title: 'Gracias por su preferencia',
      })
}

function comprarTodo(){

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

    let lista = JSON.parse(localStorage.getItem('carrito')) //pido datos del local storage
    let enumerar = [] //lista donde agregare un numero por cada iteracion del forEach

    lista.forEach(prod => { //itero todos los productos que tengo en el carrito
        enumerar.push(1) // agrego un numero a la lista enumerar cada vez que pasa por el forEach 
        let largoenumerar = enumerar.length //coloco esto dentro del ciclo porque quiero saber siempre cuantas veces a pasado por aqui

        if (prod.id == idProd){ //consulto si el id del producto del carrito que esta iterando en ese momento es igual al id del producto que quiero eliminar
            lista.splice(largoenumerar -1, 1) // elimino el producto que esta en la ultima posicion generada cuando se dio la condicion (si tengo 10 prod en el carrito y quiero eliminar el 5to esta funcion iterara 5 veces y eliminara el producto que se encuentra en la posicion 5 del array que traigo de local storage)
            Toastify({ //alerta de eliminacion
                text: "Producto eliminado correctamente",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
              }).showToast();
        }
    })

    localStorage.setItem('carrito', JSON.stringify(lista))

    mostrarCarrito() 
    agregarNum()
    totalCompra() //reseteo el carrito, el numero en el icono del carrito y el total de la compra
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
mostrarCarrito()
