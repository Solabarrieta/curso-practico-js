/* const precioOriginal = 100;
const descuento = 15; */





/* console.log({
    precioOriginal,
    precioConDescuento,
    descuento,
    porcentajePrecioConDescuento,
}) */

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}