import chalk from 'chalk';
//import jsdom from 'jsdom';
import DomElements from '../dom/domElements.js'
import { eliminarElementAnterior } from '../index.js';
//const chalk = require('chalk');

/* console.log(`Test ${chalk.green("OK")}`);
console.log(chalk.red("¡Error!")); */

//const { JSDOM } = jsdom;

/* const dom = new JSDOM (`<!doctype html>
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
	  </body>
	</html>`) */

/* const document = dom.window.document; 
const eliminarInputButton = document.querySelector('button[name="eliminarInput"]');
const dadesPersonalsDiv = document.getElementById('dades-personals-form');
dadesPersonalsDiv.addEventListener('click', (event) => {
	eliminarElementAnterior(event, true);
}) */

const missatgeConsolaOk = (missatgeOK) => {
	return `${chalk.green(missatgeOK)} ${chalk.whiteBright.bgGreen.bold("OK")}`
}
const missatgeConsolaError = (missatgeError) => {
	return `${chalk.red(missatgeError)} ${chalk.whiteBright.bgRed.bold("ERROR")}`
}


function testButtonsDadesPersonals() {
	//console.log(5 === 5 ? 'Tot correcte' : 'Error');
	const dadesPersonalForm = DomElements.dadesPersonalsForm;
	let buttonsEsborrarInputs = document.querySelectorAll('button[name="eliminarInput"]');
	const buttonAfegirInput = document.querySelector('button[name="afegirDada"]');

	console.log(chalk.blue("Test fills inicials Dades"));
	let fillsInicialsForm = dadesPersonalForm.childElementCount;
	console.log(fillsInicialsForm === 4 ? missatgeConsolaOk("Fills inicials correctes, 5") : missatgeConsolaError("Error fills inicials", fillsInicialsForm));

	/**BUTTON AFEGIR INPUT */
	console.log(chalk.blue("Test boto afegit input"));
	buttonAfegirInput.click();
	let fillsActuals = dadesPersonalForm.childElementCount;
	console.log(fillsActuals === 6 ? missatgeConsolaOk("Aumentar els fills en 1, en total 6") : missatgeConsolaError("Error aumentar els fills en 1"));

	/**BUTTON ELIMINAR INPUT */
	console.log(chalk.blue("Test boto eliminar input"));
	buttonsEsborrarInputs = document.querySelectorAll('button[name="eliminarInput"]');
	buttonsEsborrarInputs[buttonsEsborrarInputs.length - 1].click();
	fillsActuals = dadesPersonalForm.childElementCount;
	console.log(fillsActuals === 5 ? missatgeConsolaOk('Fill esborrat correctament') : missatgeConsolaError("Error en esborrar fill"));

/* 	console.log(missatgeConsolaOk('Proba missatge OK'));
	console.log(missatgeConsolaError('Proba missatge Error')); */


}

function testButtonsDadesAcademiques() {
	/**Casos
	 * *fills inicials
	 * *afegir fill
	 * *esborrar fill
	 * *esborrar tots els fills
	 * *afegir nou fill amb tots esborrats
	 */
	const estudisForm = DomElements.dadesEstudisForm;
	const buttonAfegitEstudis = document.querySelector('button[name="afegirEstudis"]');

	console.log(chalk.blue("Test fills inicials Estudis"));
	let fillsInicials = estudisForm.childElementCount;
	console.log((fillsInicials === 2) ? missatgeConsolaOk('Fills inicials correctes') : missatgeConsolaError('Error fills inicials'));

	console.log(chalk.blue("Test afegir fills Estudis"));
	fillsInicials = estudisForm.childElementCount;
	buttonAfegitEstudis.click();
	let fillsActuals = estudisForm.childElementCount;
	console.log((fillsInicials + 1 === fillsActuals) ? missatgeConsolaOk('Afegit fills correctament') : missatgeConsolaError('Error afegir fill'));

	console.log(chalk.blue("Test esborrar fill Estudis"));
	let botonsEliminarEstudis = document.querySelectorAll('div[name="div-form-estudis"] button[name="eliminarSeccio"]');
	fillsInicials = estudisForm.childElementCount;
	botonsEliminarEstudis[botonsEliminarEstudis.length - 1].click();
	fillsActuals = estudisForm.childElementCount;
	console.log((fillsInicials -1 === fillsActuals) ? missatgeConsolaOk('Eliminat fill correctament') : missatgeConsolaError('Error eliminar fill'));

	console.log(chalk.blue("Test afegir 3 fills Estudis"));
	fillsInicials = estudisForm.childElementCount;
	for(let i = 0; i < 3; i++) buttonAfegitEstudis.click();
	fillsActuals = estudisForm.childElementCount;
	console.log((fillsInicials + 3 === fillsActuals) ? missatgeConsolaOk('Afegit 3 fills correctament') : missatgeConsolaError('Error en afegir 3 fills'));

	console.log(chalk.blue("Test esborrar tots els fills Estudis"));
	botonsEliminarEstudis = document.querySelectorAll('div[name="div-form-estudis"] button[name="eliminarSeccio"]');
	let i = 0;
	while (i <= botonsEliminarEstudis.length -1) {
		botonsEliminarEstudis[i].click();
		i++;
	}
	fillsActuals = estudisForm.childElementCount;
	console.log((1 === fillsActuals) ? missatgeConsolaOk('Eliminats tots els fills') : missatgeConsolaError('Error eliminar tots els fills'));

	console.log(chalk.blue("Test afegir el primer fill Estudis"));
	fillsInicials = estudisForm.childElementCount;
	buttonAfegitEstudis.click();
	fillsActuals = estudisForm.childElementCount;
	console.log((fillsInicials + 1 === fillsActuals) ? missatgeConsolaOk('Afegit fills correctament') : missatgeConsolaError('Error afegir fill'));

}

function testButtonsDadesProfesionals() {
	/**Casos
	 * *fills inicials
	 * *afegir fill
	 * *esborrar fill
	 * *esborrar tots els fills
	 * *afegir nou fill amb tots esborrats
	 */
	const profesionalForm = DomElements.dadesProfesionalsForm;
	const buttonAfegirProfesio = document.querySelector('button[name="afegirProfesio"]');

	console.log(chalk.blue("Test fills inicials Profesionals"));
	let fillsInicials = profesionalForm.childElementCount;
	console.log((fillsInicials === 2) ? missatgeConsolaOk('Fills inicials correctes') : missatgeConsolaError('Error fills inicials'));

	console.log(chalk.blue("Test afegir fills Profesio"));
	fillsInicials = profesionalForm.childElementCount;
	buttonAfegirProfesio.click();
	let fillsActuals = profesionalForm.childElementCount;
	console.log((fillsInicials + 1 === fillsActuals) ? missatgeConsolaOk('Afegit fills correctament') : missatgeConsolaError('Error afegir fill'));

	console.log(chalk.blue("Test esborrar fill Profesio"));
	let botonsEliminarProfesio = document.querySelectorAll('div[name="div-form-profesio"] button[name="eliminarSeccio"]');
	fillsInicials = profesionalForm.childElementCount;
	botonsEliminarProfesio[botonsEliminarProfesio.length - 1].click();
	fillsActuals = profesionalForm.childElementCount;
	console.log((fillsInicials -1 === fillsActuals) ? missatgeConsolaOk('Eliminat fill correctament') : missatgeConsolaError('Error eliminar fill'));

	console.log(chalk.blue("Test afegir 3 fills Profesio"));
	fillsInicials = profesionalForm.childElementCount;
	for(let i = 0; i < 3; i++) buttonAfegirProfesio.click();
	fillsActuals = profesionalForm.childElementCount;
	console.log((fillsInicials + 3 === fillsActuals) ? missatgeConsolaOk('Afegit 3 fills correctament') : missatgeConsolaError('Error en afegir 3 fills'));

	console.log(chalk.blue("Test esborrar tots els fills Profesio"));
	botonsEliminarProfesio = document.querySelectorAll('div[name="div-form-profesio"] button[name="eliminarSeccio"]');
	let i = 0;
	while (i <= botonsEliminarProfesio.length -1) {
		botonsEliminarProfesio[i].click();
		i++;
	}
	fillsActuals = profesionalForm.childElementCount;
	console.log((1 === fillsActuals) ? missatgeConsolaOk('Eliminats tots els fills') : missatgeConsolaError('Error eliminar tots els fills'));

	console.log(chalk.blue("Test afegir el primer fill Profesio"));
	fillsInicials = profesionalForm.childElementCount;
	buttonAfegirProfesio.click();
	fillsActuals = profesionalForm.childElementCount;
	console.log((fillsInicials + 1 === fillsActuals) ? missatgeConsolaOk('Afegit fills correctament') : missatgeConsolaError('Error afegir fill'));

}

testButtonsDadesPersonals();
console.log(chalk.blue('---------------------------------'));
testButtonsDadesAcademiques();
console.log(chalk.blue('---------------------------------'));
testButtonsDadesProfesionals();