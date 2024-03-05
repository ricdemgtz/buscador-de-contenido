let elementoSelect = document.getElementById("selePeliculas");
let elementoInput = document.getElementById("buscadorPeliculas");
let elementoLista = document.getElementById("listaPeliculas");
let archivo = "peliculas.json";


//ESCUCHADORES DE EVENTOS
elementoSelect.addEventListener("change", cambioSelector);
elementoSelect.addEventListener("nombreSelect", function () {
    alert("Se modifico el archivo base a " + archivo.value)
});
elementoInput.addEventListener('keydown', verificarCampo);




//FUNCIONES
function cambioSelector() {
    archivo = elementoSelect.value;
    let evento = new CustomEvent("nombreSelect");
    elementoSelect.dispatchEvent(evento);
}
function verificarCampo(event) {
    if ((event.keyCode < 65 || event.keyCode > 90) && event.keyCode != 8 && event.keyCode != 32) {
        event.preventDefault();
    };
};

function busqueda() {
    elementoLista.innerText = " ";

    fetch(archivo)
        .then(respuesta => respuesta.json())
        .then((salida) => {
            for (let item of salida.data) {
                if (item.nombre.startsWith(elementoInput.value.toUpperCase())) {
                    let li = document.createElement("li");
                    let p = document.createElement("p");
                    p.id = item.nombre;
                    p.style.display = "none";

                    p.innerHTML = item.sinopsis;
                    li.innerHTML = item.nombre;

                    li.appendChild(p);
                    elementoLista.appendChild(li);;

                    li.addEventListener("mouseover", function (){
                        p.style.display = "block";
                    })
                    li.addEventListener("mouseout", function () {
                        p.style.display = "none";
                    })
                } else {
                    console.log("No hay resultados para tu busqueda")
                }
            }
        })
        .catch(function(error){
            console.log(error)
        })
}

