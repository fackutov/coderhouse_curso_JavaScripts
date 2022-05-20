
/*
Para la entrega del desafio cree una pequeña interfaz simple la cual ire ampliando y mejorando lo mayor posible en el transcurso del curso
*/

    // Variantes

let numb
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')

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

productos.forEach(prod => {
    divProductos.innerHTML += `
        <div id=producto${prod.id} class="producto">
            <img src='../multimedia/imagenes/productos/prod${prod.id}.jpg'>
            <p class="nombreProd">${prod.nombre}</p>
            <P class="universoProd">${prod.universo}</P>
            <P class="medidasProd">medidas <br>${prod.tamanio}</P>
            <p class="precioProd">$ ${prod.precio}</p>
            <button onclick='agregar(${prod.id})' class='botonCompra'>Comprar</button>
        </div>
    `
})

btn1.addEventListener('click', () => {
    let productosOrdenados = productos.sort((prod1, prod2) => {
        return prod1.precio - prod2.precio
    })
    divProductos.innerHTML =``
    productosOrdenados.forEach(prod => {
        divProductos.innerHTML += `
            <div id=producto${prod.id} class="producto">
                <img src='../multimedia/imagenes/productos/prod${prod.id}.jpg'>
                <p class="nombreProd">${prod.nombre}</p>
                <P class="universoProd">${prod.universo}</P>
                <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                <p class="precioProd">$ ${prod.precio}</p>
                <button onclick='agregar(${prod.id})' class='botonCompra'>Comprar</button>
            </div>
        `
})})

btn2.addEventListener('click', () => {
    let productosOrdenados = productos.sort((prod1, prod2) => {
        return prod2.precio - prod1.precio
    })
    divProductos.innerHTML =``
    productosOrdenados.forEach(prod => {
        divProductos.innerHTML += `
            <div id=producto${prod.id} class="producto">
                <img src='../multimedia/imagenes/productos/prod${prod.id}.jpg'>
                <p class="nombreProd">${prod.nombre}</p>
                <P class="universoProd">${prod.universo}</P>
                <P class="medidasProd">medidas <br>${prod.tamanio}</P>
                <p class="precioProd">$ ${prod.precio}</p>
                <button onclick='agregar(${prod.id})' class='botonCompra'>Comprar</button>
            </div>
        `
})})

btn3.addEventListener('click', () => {
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
                <button onclick='agregar(${prod.id})' class='botonCompra'>Comprar</button>
            </div>
        `
})})

btn4.addEventListener('click', () => {
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
                <button onclick='agregar(${prod.id})' class='botonCompra'>Comprar</button>
            </div>
        `

})})

btn5.addEventListener('click', () => {
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
                <button onclick='agregar(${prod.id})' class='botonCompra'>Comprar</button>
            </div>
        `
})})

btn6.addEventListener('click', () => {
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
                <button onclick='agregar(${prod.id})' class='botonCompra'>Comprar</button>
            </div>
        `
})})

// CARRITO

let numCarrito = document.getElementById('numCarrito')

// Agrega el numero al icono de carrito segun la cantidad de elementos que haya en el local storage
function agregarNum() {
    cantidad = agregarStorage()
    numCarrito.innerHTML = `
    ${cantidad.length}
`
}



function agregarStorage (){
    return JSON.parse(localStorage.getItem('carrito')) || []
}

function guardarStorage (arraycarrito){
    localStorage.setItem('carrito', JSON.stringify(arraycarrito))    
}

function agregar(idprod){
    let carrito = agregarStorage()
    let prodEncontrado = productos.find(p => p.id == idprod)
    carrito.push(prodEncontrado)
    guardarStorage(carrito)
    console.log(carrito)

    agregarNum(carrito)
}

agregarNum()

