window.onload = function(e) {
    console.log('documento cargado')

    //Cambiar el título del segundo h2
    document.getElementsByTagName('h2')[1].innerText = 'Changed from JS!!'

    //Seleccionar el elemento con id == username
    console.log(document.getElementById("username"))

    //Cambiar el color de todos los .first que estén dentro de un artículo
    let initial = document.getElementsByTagName("article")
    let finalresult = [];
    for (i = 0; i < initial.length ; i++){
        finalresult= initial[i].getElementsByClassName("first")
    }
    for ( i = 0; i < finalresult.length; i++){
        finalresult[i].style.background = "yellow"
    }
    
    //Seleccionar todos lo elementos li con class == item
    let example = document.getElementsByTagName("li");
    let final = [];
    for (i = 0; i < example.length ; i++){
        for (a = 0; a < example[i].classList.length; a++){
            if (example[i].classList[a] == "item"){
                final.push(example[i])
            }
        }   
    }
    console.log(final)

    //Seleccionar todos lo buttons dentro de class == buttons
    let example2 = document.getElementsByClassName("buttons");
    let final2 = []
    for (i = 0; i < example2.length; i++) {
        for (a = 0; a < example2[i].children.length; a++){
            // console.log(example[i].children[a].tagName)
            if (example2[i].children[a].tagName == "BUTTON"){
                final2.push(example2[i].children[a])
            }
        }
    }
    console.log(final2)

    //Cambiar el código de fondo del primer párrafo
    let paragraphs = document.getElementsByTagName("p")
    paragraphs[0].style.background = "yellow";

    //Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
    final2.forEach( x => {
        x.style.color = "blue";
    })
}