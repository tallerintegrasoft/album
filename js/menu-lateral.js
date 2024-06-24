
let estaAbiertoNav = true;

let url_404 = "../404/404.html";

const arreglo = [
    { titulo: "Inicio", link: "../inicio/inicio.html" },
    { titulo: "Catacumba", link: "../catacumba/catacumba.html" },
    { titulo: "Babu", link: "../babu/babu.html" },
    { 
        titulo: "Países",
        opciones: [
            { titulo: "Chile", link: url_404 },
            { titulo: "Argentina", link: url_404 },
            { 
                titulo: "Bolivia (Con sus Departamentos)",
                opciones: [
                    { titulo: "La Paz", link: url_404 },
                    { titulo: "Beni", link: url_404 },
                    { titulo: "Cochabamba", link: url_404 }
                ]
            }
        ]
    },
    { 
        titulo: "Piedras",
        opciones: [
            { titulo: "Jade", link: url_404 },
            { titulo: "Agata", link: url_404 },
            { titulo: "Esmeralda", link: url_404 },
        ]
    }
];

function menuLateral(datos = {}) 
{
    let cadena = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Album</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="../inicio/inicio.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../catacumba/catacumba.html">Catacumba</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../babu/babu.html">Babu</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    `;
    
    document.querySelector(datos.querySelector).innerHTML = cadena; 
}
