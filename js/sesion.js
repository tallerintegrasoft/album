let blabla = localStorage.getItem("autorizado_album");

if (blabla == null) {
    console.log("NO ha iniciado sesion");
    alert("No Autorizado");
    window.location.href = '../login/login.html';
}
else {
    console.log("SÍ ha iniciado sesion");
}

// localStorage.removeItem("autorizado_album") 

// localStorage.removeItem('autorizado_album')