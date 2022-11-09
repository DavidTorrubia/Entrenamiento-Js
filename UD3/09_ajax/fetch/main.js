window.onload = function () {
  console.log("document loaded");

  fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let tabla = document.getElementById("Tabla");
      response.data.forEach(item => {
        tabla.innerHTML += `<tr><td>${item.id}</td><td>${item.employee_name}</td><td>${item.employee_salary}</td><td>${item.employee_age}</td></tr>`;
      });
    });
};
