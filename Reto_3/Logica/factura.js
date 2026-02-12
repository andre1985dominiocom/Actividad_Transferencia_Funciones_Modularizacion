export const calcularSubtotal = (precio, cantidad) => precio * cantidad;


export const calcularTotalSinIVA = (productos) => {
    return productos.reduce((total, producto) => {
        return total + calcularSubtotal(producto.precio, producto.cantidad);
    }, 0);
}

export const calcularIVATotal = (totalSinIVA) => totalSinIVA * 0.19;


export const calcularValorTotalPagar = (totalSinIVA, ivaTotal) => totalSinIVA + ivaTotal;