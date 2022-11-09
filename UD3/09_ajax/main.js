var xhttp = new XMLHttpRequest();
window.onload = function () {
  console.log("document loaded");
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let employees = JSON.parse(this.responseText).data;
      let tabla = document.getElementById("Tabla");
      employees.forEach((item) => {
        tabla.innerHTML += `<tr><td>${item.employee_name}</td><td>${item.employee_salary}</td><td>${item.employee_age}</td></tr>`;
      });
    }
  };
  xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
  xhttp.send();
};
function recharge() {
    xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
}

