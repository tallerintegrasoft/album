
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
        var cadena = "9rodarboxepolapmiloaron98hcstirfidieh30ubab10ifos46aros";
        cadena = cadena.split("").reverse().join("");
        
        //==================>>>>

        var json = {};
        var primeraLetra = usernameIngresado.charAt(0).toLowerCase();  
        
        if (primeraLetra == "a") json = { a_1: 20, a_2: 57, b_1: 74, b_2: 33 }; 
        if (primeraLetra == "b") json = { a_1: 12, a_2: 4, b_1: 36, b_2: 6 };
        if (primeraLetra == "c") json = { a_1: 64, a_2: 66, b_1: 51, b_2: 97 }; 
        if (primeraLetra == "d") json = { a_1: 11, a_2: 95, b_1: 17, b_2: 39 }; 
        if (primeraLetra == "e") json = { a_1: 65, a_2: 92, b_1: 11, b_2: 89 }; 
        if (primeraLetra == "f") json = { a_1: 1, a_2: 2, b_1: 30, b_2: 14 }; 
        if (primeraLetra == "g") json = { a_1: 2, a_2: 48, b_1: 42, b_2: 43 }; 
        if (primeraLetra == "h") json = { a_1: 21, a_2: 52, b_1: 59, b_2: 30 }; 
        if (primeraLetra == "i") json = { a_1: 88, a_2: 74, b_1: 47, b_2: 8 }; 
        if (primeraLetra == "j") json = { a_1: 93, a_2: 16, b_1: 64, b_2: 47 }; 
        if (primeraLetra == "k") json = { a_1: 81, a_2: 70, b_1: 26, b_2: 74 }; 
        if (primeraLetra == "l") json = { a_1: 52, a_2: 30, b_1: 89, b_2: 92 }; 
        if (primeraLetra == "m") json = { a_1: 99, a_2: 5, b_1: 48, b_2: 30 }; 
        if (primeraLetra == "n") json = { a_1: 81, a_2: 77, b_1: 34, b_2: 57 }; 
        if (primeraLetra == "ñ") json = { a_1: 45, a_2: 43, b_1: 23, b_2: 20 }; 
        if (primeraLetra == "o") json = { a_1: 20, a_2: 85, b_1: 70, b_2: 30 }; 
        if (primeraLetra == "p") json = { a_1: 53, a_2: 68, b_1: 37, b_2: 5 }; 
        if (primeraLetra == "q") json = { a_1: 43, a_2: 11, b_1: 85, b_2: 52 }; 
        if (primeraLetra == "r") json = { a_1: 26, a_2: 82, b_1: 55, b_2: 81 }; 
        if (primeraLetra == "s") json = { a_1: 5, a_2: 5, b_1: 11, b_2: 74 }; 
        if (primeraLetra == "t") json = { a_1: 11, a_2: 75, b_1: 52, b_2: 74 }; 
        if (primeraLetra == "u") json = { a_1: 49, a_2: 23, b_1: 83, b_2: 58 }; 
        if (primeraLetra == "v") json = { a_1: 17, a_2: 41, b_1: 25, b_2: 36 }; 
        if (primeraLetra == "w") json = { a_1: 99, a_2: 41, b_1: 37, b_2: 64 }; 
        if (primeraLetra == "x") json = { a_1: 45, a_2: 48, b_1: 58, b_2: 10 }; 
        if (primeraLetra == "y") json = { a_1: 98, a_2: 59, b_1: 86, b_2: 24 }; 
        if (primeraLetra == "z") json = { a_1: 9, a_2: 52, b_1: 84, b_2: 75 }; 

        //==================>>>>
        
        var username = cadena.substr(json.a_1, json.a_2);
        var password = cadena.substr(json.b_1, json.b_2);
        
        //==================>>>>

        if (usernameIngresado != username || passwordIngresado != password)
            alert("Usuario o password incorrectos");
        else {
            localStorage.setItem("autorizado_album", "aaaaaaaaa");
            window.location.href = '../catacumba/catacumba.html';
        }
    }
}


