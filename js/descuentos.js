// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//     precioOriginal, 
//     descuento, 
//     porcentajePrecioConDescuento, 
//     precioConDescuento
// });

//Se realiza la funcion osea el calculo matematico
function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

//Se crea la funcion para cuando el usuario vaya a ejecutar
function onClickButtonPriceDiscount(){
    
    //Capturamos los valores ingresados por el usuario en este caso el precio del producto
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    //Capturamos los valores ingresados por el usuario en este caso el descuento del producto
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    //hacemos uso del calculo matematico o metodo ya hecho en la linea 15
    const precioConDescuento= calcularPrecioConDescuento(priceValue, discountValue);

    //Construimos resultP para mostrar el valor dinamicamente cada vez que el usuario ejecute
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

}
