const salarios = brawlStars.map(
    (brawler) => {
        return brawler.salary;
    }
);

const salariosSorted = salarios.sort(
    (a,b) => {
        return a-b;
    }
);

function esPar(num) {
    return (num%2===0);
}

//Mediana general
function medianaSalarios(lista){
    let mediana = 0;
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){
        let valor1 = lista[mitad];
        let valor2 = lista[mitad-1];
        mediana = (valor1 + valor2)/2;
    }else{
        mediana = lista[mitad]
    }
    return mediana;
}

const medianaGeneralBrawlers = medianaSalarios(salariosSorted);

//Mediana top 10%

const spliceStart = (salariosSorted.length*90)/100; 

const spliceCount = salariosSorted.length-spliceStart;

const salarios10 = salariosSorted.splice(spliceStart,spliceCount);

const medianaTop10Brawlers = medianaSalarios(salarios10);


console.log(
    medianaGeneralBrawlers, 
    medianaTop10Brawlers
    );

console.log(salariosSorted, salarios10);
