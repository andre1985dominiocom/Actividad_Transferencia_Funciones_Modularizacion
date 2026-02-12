import { calcularIVA } from "./calcularIVA.js"
import { verificarCantidad } from "./verificarCantidad.js"
import { verificarIVA } from "./verificarIVA.js"

export function calcularTotal (cantidadVerificada, ivaVerificada) {
    
    let ivaTotal = calcularIVA(ivaVerificada)

    return cantidadVerificada + (cantidadVerificada * ivaTotal)
}