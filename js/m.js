function calcularPesoIdeal() {
    var edad = document.getElementById("txt_edad").value;
    var pesoActual = document.getElementById("txt_peso_actual").value;

    if (edad === "" || pesoActual === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    edad = parseInt(edad);
    pesoActual = parseFloat(pesoActual);

    // Fórmula modificada
    var pesoIdeal;

    if (edad < 18) {
        // Si es menor de edad, usamos esta fórmula base
        pesoIdeal = (edad * 2) + 8;
    } else {
        // Si es adulto, fórmula diferente
        pesoIdeal = (edad * 0.3) + 50;
    }

    document.getElementById("cnt_peso_ideal").innerHTML = "Tu peso ideal es: " + pesoIdeal.toFixed(2) + " kg";

    var estado = "";
    if (pesoActual < pesoIdeal - 3) {
        estado = "Bajo peso";
        document.getElementById("cnt_estado_peso").innerHTML = estado;
        document.getElementById("cnt_estado_imagen").innerHTML = "😟";
    } else if (pesoActual > pesoIdeal + 3) {
        estado = "Sobrepeso";
        document.getElementById("cnt_estado_peso").innerHTML = estado;
        document.getElementById("cnt_estado_imagen").innerHTML = "😅";
    } else {
        estado = "Peso ideal";
        document.getElementById("cnt_estado_peso").innerHTML = estado;
        document.getElementById("cnt_estado_imagen").innerHTML = "😊";
    }
}
