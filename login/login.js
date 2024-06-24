
window.onload = () => 
{ 
    menuLateral({ querySelector: '#menu-lateral' });  
}; 

function entrar() 
{
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (username = "" || password != "") {
        localStorage.setItem("autorizado_album", "aaaaaaaaa");
        window.location.href = '../catacumba/catacumba.html';
    }
}


