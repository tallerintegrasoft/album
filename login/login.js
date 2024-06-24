
window.onload = () => 
{ 
    menuLateral({ querySelector: '#menu-lateral' });  
}; 

function entrar() 
{
    let usernameIngresado = document.querySelector("#username").value;
    let passwordIngresado = document.querySelector("#password").value;

    if (usernameIngresado != "" || passwordIngresado != "") 
    {
        let cadena = "9rodarboxepolapmiloaron98hcstirfidieh30ubab10ifos46aros";
        cadena = cadena.split("").reverse().join("");
        let username = cadena.substr(12, 4);
        let password = cadena.substr(36, 6);

        if (usernameIngresado != username || passwordIngresado != password)
          return alert("Usuario o password incorrectos");
        
        localStorage.setItem("autorizado_album", "aaaaaaaaa");
        window.location.href = '../catacumba/catacumba.html';
    }
}


