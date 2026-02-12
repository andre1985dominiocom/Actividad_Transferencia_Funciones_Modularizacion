import ls from 'prompt-sync'
const cs = ls();

import { verificarCantidad, verificarIVA, calcularIVA, calcularTotal } from './functions/index.js';

console.log("    Calculador de IVA    ");
console.log("");

let cantidad = parseFloat(cs("Ingrese la cantidad a calcular: "))
let iva = parseInt(cs("Ingrese el porcentaje de IVA: (solo numero) "))


let resultadoIVA = calcularIva(iva)
let total = calcularTotal(cantidad, iva)

if (verificarCantidad(cantidad) && verificarIVA(iva)){
    console.log("el iva es: " +resultadoIVA);
    console.log("el total a pagar es: "+total);
} else {
    console.log("Error");
    console.log("ingrese valores validos ");
    
}

