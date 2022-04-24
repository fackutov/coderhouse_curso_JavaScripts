
// Pequeño programita que mediante un parametro que le pedimos a un usuario (importe), el vendedor de un producto X puede constatar el precio con las diferentes formas de pago

let importe
let formaDePago

const contado = (monto) => monto * 0.90
const mastercard = (monto) => monto * 0.75
const mastercard3cuotas = (monto) => (monto * 0.75) / 3
const mastercard4cuotas = (monto) => (monto * 0.75) / 4
const mastercard5cuotas = (monto) => (monto * 0.75) / 5
const mastercard6cuotas = (monto) => (monto * 0.75) / 6
const credito3cuotas = (monto) => monto * 1.20
const credito4cuotas = (monto) => monto * 1.30
const credito5cuotas = (monto) => monto * 1.40
const credito6cuotas = (monto) => monto * 1.50

do{
    importe = parseFloat(prompt('Cual es el monto establecido?'))
    formaDePago = parseInt(prompt('Ingrese forma de pago (1 para contado, 2 para mastercard, 3 para credito)'))

    if (isNaN(importe) || isNaN(formaDePago)){
        alert('Por favor ingresar numeros validos')
    }

} while(isNaN(importe) || isNaN(formaDePago)){

    if (formaDePago == 1){
        console.log('Monto: $',importe)
        console.log('El pago contado contiene un 10% de descuento, monto: $',contado(importe))
    }
    else if (formaDePago == 2){
        console.log('Monto: $',importe)
        console.log('El pago con targeta Mastercard contiene un 25% de descuento, monto: $',mastercard(importe)) 
        console.log('en 3 cuotas sin recargo de: $',mastercard3cuotas(importe))
        console.log('en 4 cuotas sin recargo de: $',mastercard4cuotas(importe))
        console.log('en 5 cuotas sin recargo de: $',mastercard5cuotas(importe))
        console.log('en 6 cuotas sin recargo de: $',mastercard6cuotas(importe))
    }
    else if (formaDePago == 3){
        console.log('Monto: $',importe)
        console.log('El pago en 3 cuotas tiene un recargo del 20%, monto: $',credito3cuotas(importe))
        console.log('El pago en 4 cuotas tiene un recargo del 30%, monto: $',credito4cuotas(importe))
        console.log('El pago en 5 cuotas tiene un recargo del 40%, monto: $',credito5cuotas(importe))
        console.log('El pago en 6 cuotas tiene un recargo del 50%, monto: $',credito6cuotas(importe))
    }
    else
        alert('Valores validos para formas de pago son 1, 2 o 3')
    
}

