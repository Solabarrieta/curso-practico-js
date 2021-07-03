function calcularMediana(lista){
    
    if(lista.length!==0){
        let mediana = 0;
        let index = 0;
        if(lista.length%2 === 0){
            index = lista.length/2; 
            let valor1 = lista[index];
            let valor2 = lista[index-1];
            mediana = (valor1 + valor2)/2;
        }else{
            index = lista.length/2; 
            index = Math.floor(index);
            mediana = lista[index];
        }
        return mediana;
    }else{
        console.log("Tu lista es vacia, introduce una que contenga valores!")
    }
}
