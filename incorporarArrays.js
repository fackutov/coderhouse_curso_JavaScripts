
let numero

let listaPeliculas = ['kill bill', 'star wars', 'the lord of the rings', 'harry potter', 'inglorious basterds', 'fight club', 'sr & sra smith',
                    'titanic', 'avatar', 'the iron lady', 'the godfather', 'pulp fiction', 'terminator', 'matrix', 'james bond', 'rocky', 'e.t',
                    'back to the future','king Kong','pirates of the caribean',]
                
do{
    numero = parseFloat(prompt('Elige una opcion (1- ver listado, 2- agregar pelicula, 3- eliminar pelicula)'))

    if (isNaN(numero)){
        alert('Por favor ingresar numeros validos')
    }

} while(isNaN(numero)){

    if (numero == 1){
        console.log(listaPeliculas)
    }
    else if (numero == 2){
        
        let nuevaPeli = prompt('Que pelicula desea agregar?')

        listaPeliculas.push(nuevaPeli)
        console.log(listaPeliculas)
    }
    else if (numero == 3){

        let eliminarPeli = prompt('Indice de pelicula desea eliminar?')

        if (isNaN(eliminarPeli)){
            alert('Por favor ingrese numeros')
        }
        else
            listaPeliculas.splice(eliminarPeli,1)
            console.log(listaPeliculas)      
    }
    else
        alert('Valores validos son 1, 2 o 3')  
}
