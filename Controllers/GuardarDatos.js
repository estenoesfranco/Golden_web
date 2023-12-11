function GuardarDatos() {
    // Obtener los valores de los campos de entrada
    const Titulo = document.getElementById("inputTitulo").value;
    const Nota = document.getElementById("inputNota").value;
    const hora = document.getElementById("inputHorayfecha").value;

    display = block ("staticBackdrop")
    // Imprimir en la consola los datos recopilados
    console.log("Titulo:", Titulo);
    console.log("Nota:", Nota);
    console.log("Fecha y Hora:", hora);
}

