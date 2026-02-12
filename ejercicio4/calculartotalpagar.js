
//importamos la funcion calcular subtotal, y se llama el archivo donde se encuntrea
import { calcularSubtotal } from "./calcularsubtotal.js";

import { calcularIva } from "./calculariva.js";

//creamos la function para calculatotalpagar ( que recibre 3 parametros cantidad, precio, porcentajeiva)
function calcularTotalPagar(cantidad, precio, porcentajeIva) {
  
  //se va guardar subtotal en una variable, que es el resultado de la funcion calcularsubtotal
  const subTotal = calcularSubtotal(cantidad, precio);

  const iva = calcularIva(subTotal, porcentajeIva);

  //va retorna subtotal + iva
  return subTotal + iva

}

//exportamos la funcion calculatotalpagar
export {calcularTotalPagar}