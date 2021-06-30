   class Cupon {
    constructor(nombreCupon, descuento) {
        this.nombreCupon = nombreCupon;
        this.descuento = descuento;
    }
}


let cupones = [
    new Cupon("Oier1", 20) ,
    new Cupon("Oier2", 30) ,
    new Cupon("Oier3", 40)
    ]; 


function precioFinal(precio, descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function calcularDescuento(){
    let price = parseFloat(document.getElementById("InputPrice").value);

    let c = document.getElementById("InputCupon").value;

    
    let cupon = cupones.find((cupon) => {
        return cupon.nombreCupon === c});
        
        let resultP = document.getElementById("resultPrice");

        if(cupon){
            let discount = cupon.descuento;

            let precio = precioFinal(price,discount).toFixed(2);


            resultP.innerText = `Tu precio final es de : ${precio} €`  ;
            
        }else{
            resultP.innerText = "";
            alert(`El cupon ${c} no es valido`);
        }

        console.log(cupones);
    
}

