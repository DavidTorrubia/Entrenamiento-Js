let parrafos = document.getElementsByTagName("p");
let enlaces = document.getElementsByTagName("a");

window.onload = function(e) {
    console.log('documento cargado')
}

function hide(parrafo){
    if (parrafos[parrafo].style.display != "none"){
        parrafos[parrafo].style.display = "none";
        enlaces[parrafo].innerText = "Mostrar contenidos"
    } else {
        parrafos[parrafo].style.display = "block";
        enlaces[parrafo].innerText = "Ocultar contenidos"
    }
}