//Código del cuadrado

console.group("Cuadrados")

//const ladoCuadrado = 5;
//console.log("Los lados del cuadro miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrada (lado){
    return lado * lado;
} 
//console.log("El area del cuadrado es: " + areaCuadrada + "cm^2");

console.groupEnd();

//Código del triangulo
console.group("Triangulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, "
//     + baseTriangulo
//     + "cm"
//     );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
} 
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return (base * altura) / 2;
} 
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del triangulo
console.group("Circulos");

//Radio
//const radioCirculo = 4;
// console.log("El radio del circulo es de: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
    return radio *2;
} 
// console.log("El diametro del circulo es de: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
// console.log("El valor de PI es: " + PI);

//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm");
//Area
function areaCirculo (radio){
    return (radio * radio) * PI;
} 
// console.log("El area del circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();



//Aqui se interactua con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    alert(area);

}

//Triangulo

function triangulo(lado1, lado2, base, altura){
    const perimetroT = lado1 + lado2 + base;
    const areaT = (base * altura) / 2;

    console.group("Triangulo");
    console.log(`El perímetro del triangulo es: ${perimetroT}cm`)
    console.log(`El área del triangulo es: ${areaT}cm^2`)
    console.groupEnd();
}

function triangulo2(){
    const lado1 = document.getElementById("tLado1");
    const tLado1 = parseFloat(lado1.value);

    const lado2 = document.getElementById("tLado2");
    const tLado2 = parseFloat(lado2.value);

    const base = document.getElementById("tBase");
    const tBase = parseFloat(base.value);

    const altura = document.getElementById("tAltura");
    const tAltura = parseFloat(altura.value);
    
    const tPerimetro = tLado1 + tLado2 + tBase;
    const tArea = (tBase*tAltura)/2;

    alert(`El perímetro del triangulo es: ${tPerimetro}cm y el área es de ${tArea}cm^2`);

}

triangulo(6, 6, 4, 5.5);

//Circulo

function circulo(radio){
    let diametroCi = radio*2;
    const PI = Math.PI;
    let perimetroCi = diametroCi * PI;
    let areaCi = PI * Math.pow(radio,2);

    console.group("Circulo");
    console.log(`El perímetro del circulo es: ${perimetroCi}cm`);
    console.log(`El área del circulo es: ${areaCi}cm^2`);
    console.groupEnd();
}

circulo(4);

function circulo2(){
    let radio = document.getElementById("cRadio");
    let cRadio = parseFloat(radio.value);
    const PI = Math.PI;

    let diametroCi = 2 * cRadio;
    let perimetroCi = diametroCi * PI;
    let areaCi = PI * (cRadio**2);

    alert(`El perímetro del circulo es: ${perimetroCi}cm y el área es: ${areaCi}cm^2`);
}
