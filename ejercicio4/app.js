

//importamos pormotsync para preguntarle al usuario 
import PromptSync from "prompt-sync";
import { calcularIva, calcularSubtotal, calcularTotalPagar } from "./index.js";

const prompt = PromptSync();
//variable para declarar el porcentar del iva que del 19%
const porcentajeIva = 19;


//variable que se declara que recibe por nombre cantidad, donde se almacenra la cantidad de productos ingresados
let cantidad = parseInt(prompt("ingresar cantidad de productos: "), 10)
//variable para almacenar el precion del productos
let precio = parseInt(prompt("ingrese el valor del producto: "), 10)

//mostrar resultado

console.log("el subtotal es: " + calcularSubtotal(cantidad, precio));
console.log("el iva es: " + calcularIva(cantidad,precio),porcentajeIva);
console.log("el total es: " + calcularTotalPagar(cantidad, precio, porcentajeIva));
