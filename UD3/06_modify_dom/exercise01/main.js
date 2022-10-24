window.onload = function(e) {
    console.log('documento cargado')

    document.getElementsByTagName('h2')[0].innerText = 'Changed from JS!!'
    document.querySelectorAll("article.first").forEach(item => item.style.color = "green");

    document.querySelectorAll("p")[0].style.background = "black";
    document.querySelectorAll(".buttons button").forEach(item => item.style.color = "blue");
}