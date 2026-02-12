export function verificarIVA(iva) {
    if (typeof iva !== "number") {
        return false
    } else if (iva >= 0) {
        return true
    }
    return false
}