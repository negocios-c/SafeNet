const formulario = document.getElementById("formulario");

const mensaje = document.getElementById("mensaje");

const lista = document.getElementById("lista-experiencias");


mostrarExperiencias();


formulario.addEventListener("submit", function(e){

    e.preventDefault();


    const nombre =
    document.getElementById("nombre").value;

    const email =
    document.getElementById("email").value;

    const tipo =
    document.getElementById("tipo").value;

    const experiencia =
    document.getElementById("experiencia").value;


    let testimonios =
    JSON.parse(localStorage.getItem("testimonios")) || [];


    const nuevo = {

        nombre: nombre,

        email: email,

        tipo: tipo,

        experiencia: experiencia,

        fecha: new Date().toLocaleString()

    };


    testimonios.push(nuevo);


    localStorage.setItem(

        "testimonios",

        JSON.stringify(testimonios)

    );


    mensaje.innerHTML =
    "✅ Experiencia enviada correctamente";


    formulario.reset();


    mostrarExperiencias();

});


function mostrarExperiencias(){

    let testimonios =
    JSON.parse(localStorage.getItem("testimonios")) || [];


    lista.innerHTML = "";


    testimonios.forEach(function(item){

        lista.innerHTML += `

        <article>

            <h3>${item.nombre}</h3>

            <p><strong>${item.tipo}</strong></p>

            <p>${item.experiencia}</p>

            <small>${item.fecha}</small>

        </article>

        `;

    });

}


/* BORRAR TODO */


function borrarTodo(){

    localStorage.clear();

    location.reload();

}