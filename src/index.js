import DomElements from './dom/domElements.js';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

console.log('index');

/**LISTENERS */
DomElements.dadesPersonalsForm.addEventListener('click', (event) => {
	event.preventDefault();
	//console.log(event.target)
	if (event.target.name === 'eliminarInput') eliminarElementAnterior(event)
	if (event.target.name === 'afegirDada') afegirDadaPersonal(event)
})

DomElements.dadesProfesionalsForm.addEventListener('click', (event) => {
	event.preventDefault();
	//console.log(event.target)
	if (event.target.name === 'afegirProfesio') afegirProfesio(event)
	if (event.target.name === 'eliminarSeccio') eliminarElementAnterior(event)
})

DomElements.dadesEstudisForm.addEventListener('click', (event) => {
	event.preventDefault();
	//console.log(event.target)
	if (event.target.name === 'afegirEstudis') afegirEstudis(event)
	if (event.target.name === 'eliminarSeccio') eliminarElementAnterior(event)
})

DomElements.obtenirDadesButton.addEventListener('click', () => {
	obtenirDades();
})

DomElements.mostrarOcultarFormsButton.addEventListener('click', () => {
	mostrarOcultarElement(DomElements.divFormulariDades);
})

DomElements.textAreas.forEach((textArea) => {
	
	textArea.addEventListener('keyup', () => {
		textArea.style.height = 'auto';
		textArea.style.height = (textArea.scrollHeight) + 'px';
	})
})

DomElements.buttonCanviCSS.forEach((botoCanviCss) => {	

	botoCanviCss.addEventListener('click', () => {
		const styles = document.querySelectorAll('head style');
		const estil = botoCanviCss.name;
		const style = DomElements.styles[estil];
		styles[0].textContent = style;
	})
})

DomElements.buttonDescarregarPdf.addEventListener('click', () => {
	generarPDF();
})

const afegirDadaPersonal = (event) => {

	let divsDades = document.querySelectorAll('div[class="dades-personals"]');
	
	let htmlDadaPersonal = `<div name="divDada" class="dades-personals">
			<input type="text" name="dada${divsDades.length-3}" data-tipus="dades-personals" placeholder="añade un dato personalizado."/><button name="eliminarInput">Eliminar</button>
		</div>`
	divsDades[divsDades.length-1].insertAdjacentHTML("afterEnd", htmlDadaPersonal);
}

/* const quitarDadaPersonal = (event) => {
	event.preventDefault()
	let divsDades = document.querySelectorAll('div[class="dades-personals"]');
	(divsDades.length > 3)
		?	divsDades[divsDades.length-1].remove()
		:	alert('No se pueden eliminar los elementos predeterminados')
	
} */

const afegirEstudis = (event) => {
	event.preventDefault()

	const divEstudis = document.querySelector('div[name="div-form-estudis"]');
	const divEstudisForm = document.querySelectorAll('div[name="div-form-estudis"] form');
	let estudis = `
	<form name="dades-estudis-form">
		<div name="divEstudis" class="dades-estudis">
			<input name="data-estudis" placeholder="Fecha inicio - Fecha fin"/>
			<input name="nom-estudis" placeholder="Titulo estudios"/>
			<input name="centre-estudis" placeholder="Centro estudios"/>
		</div>
		<button name="eliminarSeccio">Eliminar</button>
	</form>
	`; 
	
	(divEstudisForm.length > 0)
		?	divEstudisForm[divEstudisForm.length -1].insertAdjacentHTML("afterend", estudis)
		:	divEstudis.insertAdjacentHTML("afterbegin", estudis)

}

const afegirProfesio = (event) => {
	//event.preventDefault();

	const divProfesio = document.querySelector('div[name="div-form-profesio"]');
	const divFormProfesio = document.querySelectorAll('div[name="div-form-profesio"] form');
	const nouDivProfesio = `	
	<form name="dades-estudis-form">
		<input type="text" name="data-profesional" placeholder="Fecha inicio - Fecha fin"/>
		<input type="text" name="nom-profesional" placeholder="Puesto"/>
		<input type="text" name="centre-profesional" placeholder="Empresa"/>
		<textarea name="detalls-profesional" placeholder="En esta sección puedes añadir tantos detalles cómo creas convenientes sobre tus funciones, cometidos o las habilidades que has tenido que usar en este puesto de trabajo"></textarea>
		<button name="eliminarSeccio">Eliminar</button>		
	<form>
	`;
	
	(divFormProfesio.length > 0)
		?	divFormProfesio[divFormProfesio.length -1].insertAdjacentHTML("afterend", nouDivProfesio)
		:	divProfesio.insertAdjacentHTML("afterbegin", nouDivProfesio)
}


const obtenirDadesFormularis = (form) => {
	const formData = new FormData(form);
	//console.log("formPersonals formData", formData);
	const dades = {}
	for (const [key, value] of formData.entries()) {
		console.log('key', key);
		if ((!value) || (value === '')) {
			continue;
		}
		let valor = sanititzarValor(value);
		if (key === 'habilitats-profesionals') {
			valor = valor.split('<br>');
			console.log('valor split', valor);
		}
		dades[key] = valor
	}
	console.log('dadesPersonals', dades)

	return dades
}

const crearObjecteDades = (formDades) => {
	console.log("crearObjecteDades", formDades);
	const dades = [];
	formDades.forEach((form) => {
		const dada = obtenirDadesFormularis(form);
		console.log("crearObjecteDades form", form);
		if (Object.keys(dada).length !== 0) dades.push(dada);
	})

	return dades;
}

const sanititzarValor = (valor) => {

	//Escapar HTML
	valor = valor
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;")
			
	
	//eliminar etiquetes HTML
	valor = valor.replace(/<[^>]*>?/gm, '');
	valor = valor.replace(/\n/g, "<br>")

	return valor;
				
}

const obtenirDades = () => {
	let dadesPersonals = {};
	let dadesEstudis = {};
	let dadesProfesionals = {};
	let resumProfesional = {};
	let habilitats = {};

	const formDadesPersonals = document.getElementById('dades-personals-form');
	dadesPersonals = obtenirDadesFormularis(formDadesPersonals);

	const formDadesEstudis = document.querySelectorAll('div[name="div-form-estudis"] form');
	dadesEstudis = crearObjecteDades(formDadesEstudis);	

	const formDadesProfesionals = document.querySelectorAll('div[name="div-form-profesio"] form');
	dadesProfesionals = crearObjecteDades(formDadesProfesionals);

	const formResumProfesional = document.getElementById('resum-profesional');
	resumProfesional = obtenirDadesFormularis(formResumProfesional);
	console.log('resumProfesional', resumProfesional);

	const formHabilitats = document.getElementById('habilitats-profesionals');
	habilitats = obtenirDadesFormularis(formHabilitats);
	console.log('habilitats', habilitats);

	

	const dades = { 
		dadesPersonals: dadesPersonals,
		dadesEstudis: dadesEstudis,
		dadesProfesionals:dadesProfesionals,
		resumProfesional: resumProfesional,
		habilitats: habilitats
	};

	afegirCustomElement('curriculum-vitae');
	enviarCustomEvent('curriculum-vitae', dades);
	
}

const afegirCustomElement = (nom) => {
	//verificat si ja existex l'element al DOM (!!document) retorna true/false si existeix
	if (!(!!document.querySelector(nom))) {
		const customElement = document.createElement(nom);
		const app = document.getElementById('container');
	
		app.appendChild(customElement);
	}
	
}

const enviarCustomEvent = (enviarANomEvent, dades) => {
	const elementEvent = document.querySelector(enviarANomEvent);

	const detailEvent = {
		'dades-personals': {
			nomEvent: `enviar-${enviarANomEvent}`,
			missatge: 'Dades personals',
			dades: dades
		},
		'dades-estudis': {
			nomEvent: `enviar-${enviarANomEvent}`,
			missatge: 'Dades estudis',
			dades: dades
		},
		'dades-profesionals': {
			nomEvent: `enviar-${enviarANomEvent}`,
			missatge: 'Dades Profesionals',
			dades: dades
		},
		'curriculum-vitae': {
			nomEvent: `enviar-${enviarANomEvent}`,
			missatge: 'Dades Curriculum',
			dades: dades
		}
	}
	
	elementEvent.dispatchEvent(new CustomEvent(detailEvent[enviarANomEvent].nomEvent, {
		detail: {
			missatge: detailEvent[enviarANomEvent].missatge, 
			dades: detailEvent[enviarANomEvent].dades
		},
		bubbles: true, 
		composed: true
	}));
}

const mostrarOcultarElement = (element) => {
	(element.style.display === 'none')
	?	element.style.display = ''
	:	element.style.display = 'none'
}

export const eliminarElementAnterior = (event) => {	
	event.target.parentNode.remove();//eliminar el node pare
}

/**CREAR PDF */
//  1. Incluir las librerías

//  2. Capturar el contenido
function generarPDF() {
	const element = document.querySelector('div[name="container"]'); // Reemplaza con el ID de tu elemento
	//document.body.style.zoom = "100%";
	html2canvas(element, { scale: 3 }).then(canvas => {
		const imgData = canvas.toDataURL('image/png', 1.0);

		//  3. Generar el PDF
		const pdf = new jsPDF();
		const imgWidth = 210; // Ancho de la página A4 en mm
		const pageHeight = 297; // Alto de la página A4 en mm
		const imgHeight = canvas.height * imgWidth / canvas.width;
		let heightLeft = imgHeight;
		let position = 0;

		pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
		heightLeft -= pageHeight;

		while (heightLeft >= 0) {
			position = heightLeft - imgHeight;
			pdf.addPage();
			pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
			heightLeft -= pageHeight;
		}

		//  4. Descargar el PDF
		pdf.save('cv-exportado.pdf');
	});
}