function ordenarLista(lista){
    if(lista.length < 1){
        return [];
    }else{
        let izquierda = [];
        let derecha = [];
        let pivote = lista[0];
    
        for(let i = 1; i < lista.length; i++){
            if(lista[i]<pivote){
                izquierda.push(lista[i]);
            }else{
                derecha.push(lista[i]);
    
            }
        }
        return [].concat(ordenarLista(izquierda), pivote, ordenarLista(derecha));
    }
}