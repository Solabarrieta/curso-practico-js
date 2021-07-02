function calcularPromedio(lista){
    const suma= lista.reduce(
        (valorAcumulado = 0 , nuevoElemento) => {
            return valorAcumulado + nuevoElemento; 
        }
        );
    let promedio = suma / lista.length;

    return promedio;
}