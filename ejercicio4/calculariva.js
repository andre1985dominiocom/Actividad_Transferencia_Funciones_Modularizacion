//function para calcular el iva, que recibe dos parametros subtotal y porcentaiva

function calcularIva(subtotal, porcentajeIva) {
  
  return subtotal * (porcentajeIva / 100);


}
//exportamos la funcion para utilizar mas adelante en el archivo barril 

export { calcularIva };