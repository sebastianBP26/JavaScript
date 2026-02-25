function getIva(){

    // Obtenemos los valores del input
    const amountInput = parseFloat(document.getElementById("value_1").value);
    const iva = 0.16 * amountInput
    const total = amountInput + iva;

    // Ubicamos los valores
    const amount_value = document.getElementById("amount_value");   
    const iva_value = document.getElementById("iva_value");
    const total_value = document.getElementById("total_value");

    // Asignamos los valores a cada elemento
    amount_value.textContent = `Monto: $${amountInput} M.N.`;
    iva_value.textContent = `IVA: ${iva.toFixed(2)} M.N.`;
    total_value.textContent = `Total: $${total.toFixed(2)} M.N.`;

}