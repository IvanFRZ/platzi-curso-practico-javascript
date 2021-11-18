// Código del cuadrado ------------------------------------------------------------
console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triangulo -----------------------------------------------------------
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código circulos ---------------------------------------------------------------------
console.group("Circulos");
//Radio
function diametroCirculo(radio) {
    return radio * 2
}
   
// PI
/* const PI = 3.1415 */
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
 
// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
