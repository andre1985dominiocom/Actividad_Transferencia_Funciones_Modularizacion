// 3. Sistema de facturación
// Crea un programa que reciba una lista de productos (nombre, precio, cantidad) y calcule:
// • Subtotal por producto.
// • Total sin IVA.
// • IVA total (19%).
// • Valor total a pagar.
// Aplica modularización y retorno de valores.
// Como desafío adicional, implementa la función final como función flecha.

import { productos } from './Logica/productos.js';
import { calcularSubtotal, calcularTotalSinIVA, calcularIVATotal, calcularValorTotalPagar } from './Logica/index.js';

const detalleSubtotales = productos.map(p => ({
    nombre: p.nombre,
    subtotal: calcularSubtotal(p.precio, p.cantidad)
}));

const totalSinIVA = calcularTotalSinIVA(productos);
const ivaTotal = calcularIVATotal(totalSinIVA);
const valorTotalPagar = calcularValorTotalPagar(totalSinIVA, ivaTotal);

// --- SALIDA POR CONSOLA ---
console.log("========== FACTURA DE VENTA ==========");
console.log("Detalle de productos:");

detalleSubtotales.forEach(item => {
    console.log(`- ${item.nombre}: $${item.subtotal.toLocaleString()}`);
});

console.log("--------------------------------------");
console.log(`Total Neto:      $${totalSinIVA.toLocaleString()}`);
console.log(`IVA (19%):       $${ivaTotal.toLocaleString()}`);
console.log(`VALOR A PAGAR:   $${valorTotalPagar.toLocaleString()}`);
console.log("======================================");
