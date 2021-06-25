
//Codigo del cuadrado

console.group("Cuadrado");
const ladoCuadrado = prompt("Introduce una medida para el lado del cuadrado: ");
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

let perimetroCuadrado = function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado*4;
}

console.log(`El perimetro es ${perimetroCuadrado(ladoCuadrado)} cm`);

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado**2;
}

console.log(`El area del cuadrado es: ${areaCuadrado(ladoCuadrado)} cm^2`)

console.groupEnd();

// Codigo del cuadrado



//Codigo del triangulo


console.group("Triangulo");
const lado1 = 6;
const lado2 = 6;
const base = 4;

console.log(`Los lados del trinagulo miden: ${lado1}cm, ${lado2}cm, ${base}cm`);

const perimetroTriangulo = lado1+lado2+base;

console.log(`El perimetro del triangulo es de ${perimetroTriangulo}cm`);

const alturaTriangulo = Math.sqrt((base/2)**2+6**2);

const areaTriangulo = (base*alturaTriangulo)/2;

console.log(areaTriangulo);

console.groupEnd();

//Circunferencia

console.group("Circunferencia");

const radio = 4;
const pi = Math.PI ;

const perimetroCirculo = 2*pi*radio;

const areaCirculo = pi*(radio**2);

console.log(`El perimetro de la circunferencia es ${perimetroCirculo}cm`);
console.log(`El area del circulo es de ${areaCirculo}cm^2`);
console.groupEnd();

