function getIva() {
    
    const amountInput = parseFloat(document.getElementById("value_1").value);
    const iva_input = parseFloat(document.getElementById("value_2").value);
    const iva = amountInput * iva_input;
    
    const result = document.getElementById("result");
    result.textContent = `El IVA del monto ingresado es: $${iva} M.N.`;
}