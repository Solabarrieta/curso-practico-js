
//Codigo del cuadrado

/* console.group("Cuadrado");
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);
 */
let perimetroCuadrado = function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado*4;
}

/* console.log(`El perimetro es ${perimetroCuadrado(ladoCuadrado)} cm`);
 */
function areaCuadrado(ladoCuadrado){
    return ladoCuadrado**2;
}

/* console.log(`El area del cuadrado es: ${areaCuadrado(ladoCuadrado)} cm^2`)
 */
/* console.groupEnd();
 */
// Codigo del cuadrado



//Codigo del triangulo


/* console.group("Triangulo");
const lado1 = 6;
const lado2 = 6;
const base = 4;

console.log(`Los lados del trinagulo miden: ${lado1}cm, ${lado2}cm, ${base}cm`);
 */
function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

/* console.log(`El perimetro del triangulo es de ${perimetroTriangulo}cm`);
 */

function alturaTriangulo(base,lado1){
    return Math.sqrt((base/2)**2+lado1**2);
}


function areaTriangulo(base,lado1){
    const altura = alturaTriangulo(base,lado1);
    return (base*altura)/2;
}

/* console.log(areaTriangulo);

console.groupEnd();
 */
//Circunferencia

/* console.group("Circunferencia");
 */
const radio = 4;
const pi = Math.PI ;

function perimetroCirculo (radio){
    return 2*pi*radio;
}

function areaCirculo(radio){
    return pi*(radio**2);
}

/* console.log(`El perimetro de la circunferencia es ${perimetroCirculo}cm`);
console.log(`El area del circulo es de ${areaCirculo}cm^2`);
console.groupEnd();
 */


//Interaccion con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo(){
    let lado1 = parseInt(document.getElementById("InputTriangulo").value);
    let lado2 = parseInt(document.getElementById("InputLado2").value);
    let base = parseInt(document.getElementById("InputTrianguloBase").value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    alert(perimetro);
}

function calcularAreaTriangulo(){
    const lado1 = parseInt(document.getElementById("InputTriangulo").value);
    const base = parseInt(document.getElementById("InputTrianguloBase").value);


    const area = areaTriangulo(base, lado1);
    alert(area);
}

function calcularPerimetroCirculo(){
    let input = document.getElementById("InputCirculo")
    let radio = parseInt(input.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    let radio = parseInt(document.getElementById("InputCirculo").value);

    const area = areaCirculo(radio);

    alert(area);
}