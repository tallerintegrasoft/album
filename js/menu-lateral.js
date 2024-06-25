
let estaAbiertoNav = true;

let url_404 = "../404/404.html";

function menuLateral(datos = {}) 
{
    if (localStorage.getItem("autorizado_album") == null)
        return;
    
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
                        <a class="nav-link" href="../login/login.html">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../catacumba/catacumba.html">Catacumba</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../babu/babu.html">Babu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"
                        onclick="(() => { localStorage.removeItem('autorizado_album'); window.location.href = '../login/login.html'; })();">Cerrar Sesión</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    document.querySelector(datos.querySelector).innerHTML = cadena; 
}
