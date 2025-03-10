let numRandom = Math.floor(Math.random() * (20 - 1 + 1) + 1);
let intentos = 20;

function botonReinicia() {
    document.getElementById("reinicia").disabled = true;
    
    document.getElementById("interrogante").textContent = "?";
    numRandom = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    intentos = 20;
    document.getElementById("jugadas").textContent = intentos;
    document.getElementById("numerousuario").value = "";
    document.getElementById("textocambiar").textContent = "Comienza la partida...";
    document.getElementById("puntos").textContent = "0";
    document.getElementById("numerousuario").disabled = false;
    document.body.style.backgroundColor = 'white';
}

function botonPrueba() {
    let jugada = parseInt(document.getElementById("numerousuario").value);
    
    console.log("Numero aleatorio: ", numRandom);
    console.log("Número ingresado:", jugada);

    if (jugada == numRandom) {
        alert("Has ganado.");
        document.getElementById("textocambiar").textContent = "El número es correcto.";
        document.getElementById("puntos").textContent = intentos;
        document.getElementById("interrogante").textContent = numRandom;
        document.getElementById("reinicia").disabled = false;
        document.getElementById("numerousuario").disabled = true;
        document.body.style.backgroundColor = 'green';
    } else if (jugada > numRandom) {
        document.getElementById("textocambiar").textContent = "El número es muy grande.";
        document.getElementById("jugadas").textContent = --intentos
    } else if (jugada < numRandom) {
        document.getElementById("textocambiar").textContent = "El número es muy pequeño.";
        document.getElementById("jugadas").textContent = --intentos
    }

    if (intentos <= 0) {
        alert("Has perdido.")
        document.body.style.backgroundColor = 'red';
        document.getElementById("interrogante").textContent = numRandom;
        document.getElementById("textocambiar").textContent = "No te quedan mas intentos.";
        document.getElementById("puntos").textContent = intentos;
        document.getElementById("reinicia").disabled = false;
        document.getElementById("numerousuario").disabled = true;
    }
}