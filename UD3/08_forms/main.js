window.onload = function () {
  checkbox1 = document.getElementById("condiciones");
  checkbox2 = document.getElementById("privacidad");
  submit = document.getElementById("submit");
  combo = document.getElementById("opciones");
  radio = document.getElementById("pregunta_si");
  submit.style.display = "none"
  combo.style.display = "none"
};

function display(){
    if (checkbox2.checked && checkbox1.checked) {
        submit.style.display = "block";
    } else {
        submit.style.display = "none";
    }
}

function display2(){
    if (radio.checked) {
        combo.style.display = "block";
    } else {
        combo.style.display = "none";
    }
}

function advise(){
    submit.style.display = "none"
    if (!document.getElementById("names").value && !document.getElementById("surnames").value){
        alert("El nombre de usuario y los apellidos son obligatorios");
    }
    else if (!document.getElementById("names").value){
        alert("El nombre de usuario es obligatorio");
    }
    else if (!document.getElementById("surnames").value) {
        alert("El apellido de usuario es obligatorio");
    }
}
function changeValue(e) {}
