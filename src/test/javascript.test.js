import chalk from 'chalk';
import jsdom from 'jsdom';
import { eliminarElementAnterior } from '../index.js';
//const chalk = require('chalk');

console.log(`Test ${chalk.green("OK")}`);
console.log(chalk.red("¡Error!"));

const { JSDOM } = jsdom;

const dom = new JSDOM (`<!doctype html>
	<html lang="en">
	  <head>
		<meta charset="UTF-8" />
		<link rel="icon" type="image/svg+xml" href="/vite.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vite App</title>
	  </head>
	  <body>
		<div id="app">
		<div name="formularis">
		<h2>Datos Personales</h2>
		<form id="dades-personals-form">
			<div name="divNom" class="dades-personals">
				<input type="text" name="nombre" data-tipus="dades-personals" placeholder="Nombre completo"/>
			</div>
			<div name="divTelefon" class="dades-personals">
				<input type="text" name="teléfono" data-tipus="dades-personals" placeholder="teléfono"/>
			</div>
			<div name="divEmail" class="dades-personals">
				<input type="email" name="email" data-tipus="dades-personals" placeholder="email"/>
			</div>
			<div name="divLinkedin" class="dades-personals">
				<input type="text" name="linkedin" data-tipus="dades-personals" placeholder="linkedin"/><button name="eliminarInput">Eliminar</button>
			</div>
			<div>
				<button name="afegirDada" title="Añadir dato" >+</button>
			</div>
		</form>
			
		<h2>Datos Académicos</h2>
		<div id="div-form-estudis" name="div-form-estudis">			
			<form name="dades-estudis-form">
				<div name="divEstudis" class="dades-estudis">
					<input name="data-estudis" placeholder="Fecha estudios"/>
					<input name="nom-estudis" placeholder="Titulo estudios"/>
					<input name="centre-estudis" placeholder="Centro estudios"/>
				</div>
				<button name="eliminarSeccio">Eliminar</button>			
			</form>
			<div>
				<button name="afegirEstudis" title="Añadir Estudios">+</button>
			</div>
		</div>
			
			
		<h2>Datos Profesionales</h2>	
		<div id="div-form-profesio" name="div-form-profesio" class="dades-profesionals">
			<form id="dades-profesionals-form">
				<input type="text" name="data-profesional" placeholder="Fechas"/>
				<input type="text" name="nom-profesional" placeholder="Puesto"/>
				<input type="text" name="centre-profesional" placeholder="Empresa"/>
				<textarea name="detalls-profesional" placeholder="Detalles"></textarea>				
				<button name="eliminarSeccio">Eliminar</button>		
			</form>
			<div>
				<button name="afegirProfesio" title="Añadir Experiencia">+</button>
			</div>		
		</div>
		
		
		<div>
			<button name="obtenirDades">Obtenir dades</button>
		</div>

	</div>

	<div>
		<button name="mostrarOcultarForms">Mostrar/Ocultar entrada de datos</button>
	</div>
		</div>
		<script type="module" src="/src/main.js"></script>
		<script type="module" src="./src/index.js"></script>
		<script type="module" src="./src/test/javascript.test.js"></script>
		<script src="./src/webcomponents/DadesPersonals.js"></script>
	  </body>
	</html>`)

function testEliminarInput() {
	const eliminarInputButton = dom.window.document.querySelector('button[name="eliminarInput"]');
	console.log(eliminarInputButton)

	const formDades = dom.window.document.getElementById('dades-personals-form');
	console.log(formDades);
	console.log(formDades.childElementCount);
	let fillsInicials = formDades.childElementCount;
	eliminarElementAnterior(eliminarElementAnterior, true);
	//eliminarInputButton.click();
	let fillsFinals = formDades.childElementCount;

	if (fillsInicials === fillsFinals+1) {
		console.log(`Test eliminar input ${chalk.green("OK")}`)
	} else {
		console.log(`Test eliminar input ${chalk.red("¡Error!")}`)
	}

}

testEliminarInput();