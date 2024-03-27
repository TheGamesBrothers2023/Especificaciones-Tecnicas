function calcularPrecio() {
    var pantalla = parseFloat(document.getElementById('pantalla').value);
    var ram = parseInt(document.getElementById('ram').value);
    var almacenamiento = parseInt(document.getElementById('almacenamiento').value);

    // Cálculo del precio en dólares
    var precioUSD = pantalla * 10 + ram * 5 + almacenamiento * 3;

    // Tipo de cambio dólar a peso chileno (CLP)
    var tipoCambio = 800; // Este es un valor de ejemplo, debes cambiarlo por el tipo de cambio actual

    // Cálculo del precio en pesos chilenos
    var precioCLP = precioUSD * tipoCambio;

    document.getElementById('precioCalculado').innerHTML = '<p>Precio estimado: $' + precioCLP.toFixed(2) + ' CLP</p>';
    document.getElementById('botonComprar').style.display = 'block';

    return false; // Evitar el envío del formulario
}


    function comprar() {
        window.location.href = "../enviar/index.html";
    }