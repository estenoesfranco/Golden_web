function GuardarDatos() {
    // Obtener los valores de los campos de entrada
    const nota = document.getElementById("inputNota").value;
    const fecha = document.getElementById("inputFecha").value;
    const hora = document.getElementById("inputHora").value;

    // Imprimir en la consola los datos recopilados
    console.log("Nota:", nota);
    console.log("Fecha:", fecha);
    console.log("Hora:", hora);
}
