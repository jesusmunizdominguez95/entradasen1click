// ============================================
// CALCULADORA DE ENTRADAS
// ============================================

// Cogemos el botón de calcular y le añadimos un "vigilante" de click
document.getElementById("btn-calcular").addEventListener("click", function() {

    // Leemos el precio del tipo de entrada seleccionado (viene como texto, lo convertimos a número)
    const precioPorEntrada = parseFloat(document.getElementById("tipo-entrada").value);

    // Leemos la cantidad de entradas (también viene como texto, usamos parseInt)
    const cantidad = parseInt(document.getElementById("cantidad").value);

    // Zona donde vamos a mostrar el resultado
    const resultado = document.getElementById("resultado");

    // Comprobamos que la cantidad es válida (que sea un número entre 1 y 10)
    if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
        resultado.innerHTML = "⚠️ Por favor, introduce una cantidad válida (entre 1 y 10).";
        resultado.style.color = "#e63946";
        return; // Salimos de la función si el dato no es correcto
    }

    // Calculamos el precio sin IVA
    const precioSinIVA = precioPorEntrada * cantidad;

    // Calculamos el IVA (21%)
    const iva = precioSinIVA * 0.21;

    // Precio total con IVA
    const precioTotal = precioSinIVA + iva;

    // Mostramos el resultado usando innerHTML
    resultado.style.color = "#f1f1f1";
    resultado.innerHTML =
        "🎟️ <strong>Entradas:</strong> " + cantidad + "<br>" +
        "💶 <strong>Precio sin IVA:</strong> " + precioSinIVA.toFixed(2) + "€<br>" +
        "📊 <strong>IVA (21%):</strong> " + iva.toFixed(2) + "€<br>" +
        "✅ <strong>Total a pagar:</strong> " + precioTotal.toFixed(2) + "€";
});


// ============================================
// FORMULARIO DE CONTACTO
// ============================================

// Vigilante de click en el botón de enviar
document.getElementById("btn-enviar").addEventListener("click", function() {

    // Leemos los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const email  = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Zona del mensaje de confirmación
    const msgContacto = document.getElementById("msg-contacto");

    // Comprobamos que ningún campo esté vacío
    if (nombre === "" || email === "" || mensaje === "") {
        msgContacto.style.color = "#e63946";
        msgContacto.innerHTML = "⚠️ Por favor, rellena todos los campos.";
        return;
    }

    // Si todo está bien, mostramos un mensaje de éxito
    msgContacto.style.color = "#4caf50";
    msgContacto.innerHTML = "✅ ¡Mensaje enviado! Gracias, " + nombre + ".";

    // Limpiamos el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
});
