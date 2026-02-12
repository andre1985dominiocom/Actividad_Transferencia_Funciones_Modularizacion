export function verificarCantidad (cantidad) {
    if (typeof cantidad !== "number") {
        return false
    } else if (cantidad > 0) {
        return true
    }
    return false
}