
/*  
    Los años bisiestos son aquellos años cuyo numero son divisibles entre 4 (desde 1582)
    excepto los años seculares (el ultimo de cada siglo (los terminados en 00) (ej: 1600, 1700, 1800))
    que ademas de ser divisibles entre 4 deben ser tambien divisibles entre 400 (ej: 1600, 2000. 2400)
*/

let anio

do{
    anio = parseInt(prompt("ingrese un año entre 1582 y 2100"))
}   
    while (isNaN(anio))

        if (anio >= 1582 && anio <= 2100) {
            if (anio != 1700 && anio != 1800 && anio != 1900 && anio != 2100 && anio %4 == 0){
                console.log ("el año " + anio + " es un año bisiesto")
            }
                else {
                    console.log ("el año " + anio + " no es bisiesto")
                }
        }  
            else {
                console.log ("año " + anio + " no corresponde al rango")
            }

