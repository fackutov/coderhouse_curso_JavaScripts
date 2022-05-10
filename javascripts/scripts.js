
/* 
Mi proyecto final sera un e-commerce de una tienda de ventas de figuras y articulos relacionados a videojuegos y series animadas.
En este ejercicio trato de hacer un pequeño programa para que el vendedor mediante un menu pueda consultar de manera sencilla informacion sobre sus productos
*/

    // Variantes

let numb

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
const prod_7 = new Producto (7, 'Figura', 'vi', 'league of legends', '9 x 8 x 8', 700, 15)
const prod_8 = new Producto (8, 'Cartas', 'pokemon evolving skies', 'pokemon', '12 x 7 x 2', 150, 7)
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
        </div>
    `
})
