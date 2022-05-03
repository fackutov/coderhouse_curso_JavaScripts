
/* 
Mi proyecto final sera un e-commerce de una tienda de ventas de figuras y articulos relacionados a videojuegos y series animadas.
En este ejercicio trato de hacer un pequeño programa para que el vendedor mediante un menu pueda consultar de manera sencilla informacion sobre sus productos
*/

    // Variantes

let numb

class Producto {
    constructor(tipo, nombre, universo, tamanio, precio, stock){
        this.tipo = tipo
        this.nombre = nombre
        this.universo = universo
        this.tamanio = tamanio
        this.precio = precio
        this.stock = stock
    }
}

const prod_1 = new Producto ('Figura', 'bulbasaur', 'Pokemon', '10 x 10 x 10', 500, 5)
const prod_2 = new Producto ('Figura', 'charmander', 'Pokemon', '10 x 10 x 10', 500, 7)
const prod_3 = new Producto ('Figura', 'squirtle', 'Pokemon', '10 x 10 x 10', 500, 12)
const prod_4 = new Producto ('Figura', 'spiderman', 'Marvel', '9 x 12 x 12', 400, 3)
const prod_5 = new Producto ('Figura', 'ironman', 'Marvel', '8 x 7 x 7', 300, 10)
const prod_6 = new Producto ('Figura', 'spider-Ham', 'Marvel', '8 x 7 x 7', 300, 1)
const prod_7 = new Producto ('Figura', 'vi', 'league of legends', '9 x 8 x 8', 700, 15)
const prod_8 = new Producto ('Cartas', 'pokemon evolving skies', 'pokemon', '12 x 7 x 2', 150, 7)

let productos = [prod_1, prod_2, prod_3, prod_4, prod_5, prod_6, prod_7, prod_8]


    // Funciones

function mostrarTodo(lista){
    
    lista.forEach( x => {
        console.log(x)
    })
}
//-----------------------------------------------------
function buscarPorNombre(lista){

    let nombreDeseado = prompt('Eliga un nombre a buscar')
    let producto = lista.find(x => x.nombre == nombreDeseado.toLowerCase())

    if (producto){
        console.log(producto)
    }
    else(alert('Producto no encontrado'))
}
//-----------------------------------------------------
function busquedaPorPrecio(lista){

    let precioMin = parseInt(prompt('Ingrese precio minimo'))
    let precioMax = parseInt(prompt('Ingrese precio maximo'))
    let ordenar

    if (isNaN(precioMin) || isNaN(precioMax)){
        alert('Ingrese numeros valido')
    } 
    else if (precioMin > precioMax){
        alert('el precio minimo debe de ser menor al precio maximo')
    }
    else 
        ordenar = lista.filter(x => x.precio > precioMin && x.precio < precioMax)
        console.log(ordenar = ordenar.sort((prod_1, prod_2) => {
            return prod_1.precio - prod_2.precio
        }))
}
//-----------------------------------------------------
function busquedaPorStock(lista){

    let stockMin = parseInt(prompt('Ingrese stock minimo'))
    let stockMax = parseInt(prompt('Ingrese stock maximo'))
    let ordenar

    if (isNaN(stockMin) || isNaN(stockMax)){
        alert('Ingrese numeros valido')
    } 
    else if (stockMin > stockMax){
        alert('el stock minimo debe de ser menor al stock maximo')
    }
    else 
        ordenar = lista.filter(x => x.stock > stockMin && x.stock < stockMax)
        console.log(ordenar = ordenar.sort((prod_1, prod_2) => {
            return prod_1.stock - prod_2.stock
        }))
}

    // Inicio Ciclo

do{
    numb = parseInt(prompt('Elija opcion (1- Listar todo, 2- Busqueda por nombre, 3- Busqueda por precio, 4- Busqueda por stock):'))

    if (isNaN(numb)){
        alert('Por favor ingresar numeros validos')
    }

} while(isNaN(numb)){

    if (numb == 1){
        mostrarTodo(productos)
    }
    else if (numb == 2){
        buscarPorNombre(productos)
    }
    else if (numb == 3){
        busquedaPorPrecio(productos)
    }
    else if (numb == 4){
        busquedaPorStock(productos)
    }
    else
        alert('Valor no valido')   
}
