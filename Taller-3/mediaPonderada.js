function numeroApariciones(lista){
    let listaCount ={};
    lista.map((element)=>{
        if(listaCount[element]){
            listaCount[element]++;
        }else{
            listaCount[element]=1;
        }
    });
    let listaCArray = Object.entries(listaCount);

    return listaCArray;
}

function calcularMediaPonderada(lista){
    let lista1 = numeroApariciones(lista);
    let sumaPonderada = 0;
    lista1.map(element => {
        //let valor = parseInt(element[0]);
        sumaPonderada+=(element[0]*element[1]);
    });
    let mediaPonderada = sumaPonderada/lista.length;

    return mediaPonderada;
}