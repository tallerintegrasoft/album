// let operacion = ""; 
// this.objeto = {}; 
// let paginaActual = 0; 
// let totalPaginas = 0; 
// let util = new UtilidadesService(); 
// let http = new HttpService(); 

this.rutaGeneral = "../img/as0dfg34/Babu";
this.categorias = [];

window.onload = () => 
{ 
	menuLateral({ querySelector: '#menu-lateral' });  
	llenarDatos();
	mostrarDatos();
}; 

function clickCategoria(index) 
{
	let categoria = this.categorias[index];
	categoria.abierto = !categoria.abierto;
	mostrarDatos();
}

function mostrarDatos() 
{
	let cadena = this.categorias.map((categoria, indexCategoria) => 
	{
		let contenido = "";

		if (categoria.abierto) 
		{
			contenido = `<tr>
				<td>
					${categoria.fotos.map((foto, indexFoto) => 
					{
						return `<img src="${this.rutaGeneral}/${categoria.nombreCarpeta}/${foto.ruta}" class="foto-mini" 
						onclick="verFoto(this)" loading="lazy" />`;
					}).join("")}
				</td>
			</tr>`;
		}

		return `<table border="2" style="width: 100%">
			<thead style="background-color: #595959; color: white;">
				<tr style="cursor: pointer">
					<th onclick="clickCategoria(${indexCategoria})" style="padding: 0.5em; text-align: center;">
						${categoria.nombre}
					</th>
				</tr>
			</thead>
			<tbody>${contenido}</tbody>
		</table>

		<br/>`;
	}).join("");

	document.querySelector("#probando").innerHTML = cadena;
}

function verFoto(img) {
	window.open(img.src, "_blank");
}

function llenarDatos() 
{
    this.categorias.push({
		nombre: "Babularda",
		nombreCarpeta: "Babularda",
		abierto: false,
		fotos: [
		  { ruta: "1.png" }, { ruta: "2.jpg" },{ ruta: "3.jpg" },{ ruta: "4.jpg" },{ ruta: "5.png" },{ ruta: "6.png" },{ ruta: "7.png" },
		  { ruta: "8.png" },{ ruta: "9.png" },{ ruta: "10.png" },{ ruta: "11.png" },{ ruta: "12.png" },
		  { ruta: "13.jpg" },{ ruta: "14.jpg" },{ ruta: "15.jpg" },{ ruta: "16.jpg" }
		]
	});
}

