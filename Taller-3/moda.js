function calcularModa(lista){
    const listaCount = {};
    lista.map(
        (element) =>{
            if(listaCount[element]){
                listaCount[element]++;
            }else{
                listaCount[element] = 1;
            }
        }
    );
    let listaModa = Object.entries(listaCount).sort(
        (elementA, elementB)=>{
            return elementA[1]-elementB[1];
        }
    );
    let moda = listaModa[listaModa.length-1];

    return moda;

}