// let operacion = ""; 
// this.objeto = {}; 
// let paginaActual = 0; 
// let totalPaginas = 0; 
// let util = new UtilidadesService(); 
// let http = new HttpService(); 

this.rutaGeneral = "../img/as0dfg34/Catacumba";
this.categorias = [];
this.links = [ "w-5rRt-qVdh", "E5siBK3Tg_g", "N-opNPvR0DgA8", "4w6bxlK34sU", "QT8mHCqWXnZ" ];

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

	cadena += this.links.map(x => 
	{
		return `<div onclick="irLink(blablabla('|eb#ut+o*||@sptth') + blablabla('${x}'))" 
		style="cursor: pointer; color: blue;">${blablabla(x)}</div> <br/>`;
	}).join("");

	document.querySelector("#probando").innerHTML = cadena;
}

function blablabla(cadena) {
    cadena = cadena
    .replaceAll("*", "y")
    .replaceAll("#", ".")
    .replaceAll("+", "u");

    return cadena.split("").reverse().join("");
}

function  irLink(link) {
    link = link
      .replaceAll("|", "/")
      .replaceAll("@", ":");

    window.open(link, "_blank");
  }

function verFoto(img) {
	window.open(img.src, "_blank");
}

function llenarDatos() 
{
	//============================>>>>

	this.categorias.push({
		nombre: "2025",
		nombreCarpeta: "2025",
		abierto: false,
		fotos: [
		  { ruta: "1.jpg" }, { ruta: "2.jpg" }, { ruta: "3.jpg" }, { ruta: "4.jpg" }, { ruta: "5.jpg" }, { ruta: "6.jpg" }, { ruta: "7.jpg" }, { ruta: "8.jpg" },
		  { ruta: "9.jpg" }, { ruta: "10.jpg" }, { ruta: "11.jpg" }, { ruta: "12.jpg" }, { ruta: "13.jpg" }, { ruta: "14.jpg" }, { ruta: "15.jpg" }, { ruta: "16.jpg" },
		  { ruta: "17.jpg" }, { ruta: "18.jpg" }, { ruta: "19.jpg" }, { ruta: "20.jpg" }, { ruta: "21.jpg" },
		  { ruta: "22.jpg" }, { ruta: "23.jpg" }, { ruta: "24.jpg" }, { ruta: "25.jpg" }, { ruta: "26.jpg" }, { ruta: "27.jpg" }, { ruta: "28.jpg" }
		]
	});

	//============================>>>>

	this.categorias.push({
		nombre: "2024",
		nombreCarpeta: "2024",
		abierto: false,
		fotos: [
		  { ruta: "1.jpg" }, { ruta: "2.jpg" }, { ruta: "3.jpg" }, { ruta: "4.jpg" }, { ruta: "5.jpg" }, { ruta: "6.jpg" }, { ruta: "7.jpg" }, { ruta: "8.jpg" },
		  { ruta: "9.jpg" }, { ruta: "10.jpg" }, { ruta: "11.jpg" }, { ruta: "12.jpg" }, { ruta: "13.jpg" }, { ruta: "14.jpg" }, { ruta: "15.jpg" }, { ruta: "16.jpg" },
		  { ruta: "17.jpeg" }, { ruta: "18.jpg" }, { ruta: "19.jpg" }, { ruta: "20.jpg" }
		]
	});

	//============================>>>>

  this.categorias.push({
	nombre: "Matrimonio",
	nombreCarpeta: "Matri",
	abierto: false,
	fotos: [
	  { ruta: "1.png" },{ ruta: "2.png" },{ ruta: "3.png" },{ ruta: "4.png" },{ ruta: "5.png" },{ ruta: "6.png" },{ ruta: "7.png" },{ ruta: "8.png" },
	  { ruta: "9.png" },{ ruta: "10.png" },{ ruta: "11.png" },{ ruta: "12.png" },{ ruta: "13.png" },{ ruta: "14.png" },{ ruta: "15.png" },{ ruta: "16.png" },
	  { ruta: "17.png" },{ ruta: "18.png" },{ ruta: "19.png" },{ ruta: "20.png" },{ ruta: "21.png" },{ ruta: "22.png" },{ ruta: "23.png" },{ ruta: "24.png" },
	  { ruta: "25.png" },{ ruta: "26.png" },{ ruta: "27.png" },{ ruta: "28.png" },{ ruta: "29.png" },{ ruta: "30.png" },{ ruta: "31.png" },{ ruta: "32.png" },
	  { ruta: "33.png" },{ ruta: "34.png" },{ ruta: "35.png" }
	]
  });

  this.categorias.push({
	nombre: "Luna de Miel",
	nombreCarpeta: "Luna_de_Miel",
	abierto: false,
	fotos: [
	  //{ ruta: "1.png" },  // DISPONIBLE
	  { ruta: "2.png" },{ ruta: "3.png" },{ ruta: "4.png" },{ ruta: "5.png" },{ ruta: "6.png" },{ ruta: "7.png" },{ ruta: "8.png" },
	  { ruta: "9.png" },{ ruta: "10.png" },{ ruta: "11.png" },{ ruta: "12.png" },
	  //{ ruta: "13.png" },{ ruta: "14.png" },{ ruta: "15.png" },  // DISPONIBLE
	  { ruta: "16.png" },
	  //{ ruta: "17.png" },{ ruta: "18.png" },{ ruta: "19.png" },  // DISPONIBLE
	  { ruta: "20.png" },{ ruta: "21.png" },{ ruta: "22.png" },{ ruta: "23.png" },{ ruta: "24.png" },
	  { ruta: "25.png" },{ ruta: "26.png" },{ ruta: "27.png" },{ ruta: "28.png" },{ ruta: "29.png" },{ ruta: "30.png" }
	]
  });

  this.categorias.push({
	nombre: "Casual",
	nombreCarpeta: "Casual",
	abierto: false,
	fotos: [
	  { ruta: "1.png" },{ ruta: "2.png" },{ ruta: "3.png" },{ ruta: "4.png" },{ ruta: "5.png" },{ ruta: "6.png" },
	  { ruta: "7.png" }, { ruta: "8.png" },
	  { ruta: "9.png" },{ ruta: "10.png" },{ ruta: "11.png" },  
	  { ruta: "12.png" }, 
	  { ruta: "13.png" }, { ruta: "14.png" }, { ruta: "15.png" }, { ruta: "16.png" }, { ruta: "17.png" }, { ruta: "18.png" }, { ruta: "19.png" }, { ruta: "20.png" },
	  { ruta: "21.png" }, { ruta: "22.png" },{ ruta: "23.png" },{ ruta: "24.png" },{ ruta: "25.png" },{ ruta: "26.png" },{ ruta: "27.png" },{ ruta: "28.png" },
	  { ruta: "29.png" }, { ruta: "30.png" }, { ruta: "31.png" }, { ruta: "32.png" },

	  { ruta: "33.png" },{ ruta: "34.png" },{ ruta: "35.png" },{ ruta: "36.png" },{ ruta: "37.png" },{ ruta: "38.png" },{ ruta: "39.png" },
	  { ruta: "40.png" },{ ruta: "41.png" },{ ruta: "42.png" },{ ruta: "43.png" },{ ruta: "44.png" },{ ruta: "45.png" },{ ruta: "46.png" },

	  { ruta: "47.png" },{ ruta: "48.png" },{ ruta: "49.png" },{ ruta: "50.png" },{ ruta: "51.png" },{ ruta: "52.png" },{ ruta: "53.png" },{ ruta: "54.png" },
	  { ruta: "55.png" },
	  { ruta: "56.png" }, { ruta: "57.png" }, { ruta: "58.png" }, { ruta: "59.png" }, { ruta: "60.png" }
	]
  });

  this.categorias.push({
	nombre: "Gifs",
	nombreCarpeta: "Gifs",
	abierto: false,
	fotos: [
	  { ruta: "1.gif" }, { ruta: "2.gif" }, { ruta: "3.gif" }, { ruta: "4.gif" }, { ruta: "5.gif" },
	  { ruta: "6.gif" }, { ruta: "7.gif" }, { ruta: "8.gif" }, { ruta: "9.gif" }, { ruta: "10.gif" }
	]
  });

  this.categorias.push({
    nombre: "Bath",
    nombreCarpeta: "Bath",
    abierto: false,
    fotos: [
      { ruta: "1.png" },{ ruta: "2.png" },{ ruta: "3.png" },{ ruta: "4.png" }, { ruta: "5.png" }, { ruta: "6.png" }, { ruta: "7.png" }, { ruta: "8.png" },
      { ruta: "9.png" }, { ruta: "10.png" }, { ruta: "11.png" }, { ruta: "12.png" }, { ruta: "13.png" }, { ruta: "14.png" }, { ruta: "15.png" },
      { ruta: "16.png" }, { ruta: "17.png" },
      { ruta: "18.png" },{ ruta: "19.png" },{ ruta: "20.png" }, { ruta: "21.png" },{ ruta: "22.png" },{ ruta: "23.png" },
      { ruta: "24.png" },{ ruta: "25.png" },{ ruta: "26.png" }, { ruta: "27.png" }, { ruta: "28.png" },
      { ruta: "29.jpg" }, { ruta: "30.jpg" }
    ]
  });

  this.categorias.push({
	nombre: "Europa",
	nombreCarpeta: "Europa",
	abierto: false,
	fotos: [
	  { ruta: "1.png" },{ ruta: "2.png" },{ ruta: "3.png" },{ ruta: "4.png" },{ ruta: "5.png" },{ ruta: "6.png" }, { ruta: "7.png" }, { ruta: "8.png" },
	  { ruta: "9.jpg" }
	]
  });

  this.categorias.push({
	nombre: "Pre 2020",
	nombreCarpeta: "Pre_2020",
	abierto: false,
	fotos: [
	  { ruta: "1.png" },{ ruta: "2.png" },{ ruta: "3.png" },{ ruta: "4.png" },{ ruta: "5.png" },{ ruta: "6.png" },{ ruta: "7.png" },{ ruta: "8.png" },
	  { ruta: "9.png" },{ ruta: "10.png" },{ ruta: "11.png" },{ ruta: "12.png" },{ ruta: "13.png" },{ ruta: "14.png" },{ ruta: "15.png" },
	  { ruta: "16.png" },{ ruta: "17.png" },{ ruta: "18.png" },{ ruta: "19.png" },{ ruta: "20.png" },{ ruta: "21.png" },{ ruta: "22.png" },{ ruta: "23.png" },
	  { ruta: "24.png" },{ ruta: "25.png" },{ ruta: "26.png" },{ ruta: "27.png" },{ ruta: "28.png" },{ ruta: "29.png" },{ ruta: "30.png" },{ ruta: "31.png" },
	  { ruta: "32.png" },{ ruta: "33.png" },{ ruta: "34.png" },{ ruta: "35.png" },{ ruta: "36.png" },{ ruta: "37.png" },{ ruta: "38.png" },{ ruta: "39.png" },
	  { ruta: "40.png" },{ ruta: "41.png" },{ ruta: "42.png" },{ ruta: "43.png" },{ ruta: "44.png" },{ ruta: "45.png" },{ ruta: "46.png" },{ ruta: "47.png" },
	  { ruta: "48.png" }
	]
  });

  this.categorias.push({
	nombre: "Office",
	nombreCarpeta: "Office",
	abierto: false,
	fotos: [
	  { ruta: "1.jpg" }
	]
  });
}

function construirRuta(cadena)
{
	// construirRuta("ZnXWqCHm8TQ");
	return cadena.split('').reverse().join('');
}

