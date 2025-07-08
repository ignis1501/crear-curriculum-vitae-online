import DomElements from './dom/domElements.js';

console.log('index');

/**LISTENERS */
DomElements.dadesPersonalsForm.addEventListener('click', (event) => {
	event.preventDefault();
	if (event.target.name === 'eliminarInput') eliminarElementAnterior(event)
	if (event.target.name === 'afegirDada') afegirDadaPersonal(event)
})

DomElements.dadesProfesionalsForm.addEventListener('click', (event) => {
	event.preventDefault();
	if (event.target.name === 'afegirProfesio') afegirProfesio(event)
	if (event.target.name === 'eliminarSeccio') eliminarElementAnterior(event)
})

DomElements.dadesEstudisForm.addEventListener('click', (event) => {
	event.preventDefault();
	if (event.target.name === 'afegirEstudis') afegirEstudis(event)
	if (event.target.name === 'eliminarSeccio') eliminarElementAnterior(event)
})

DomElements.obtenirDadesButton.addEventListener('click', () => {
	obtenirDades();
})

DomElements.textAreas.forEach((textArea) => {
	
	textArea.addEventListener('keyup', () => {
		textArea.style.height = 'auto';
		textArea.style.height = (textArea.scrollHeight) + 'px';
	})
})

DomElements.buttonCanviCSS.forEach((botoCanviCss) => {	

	botoCanviCss.addEventListener('click', () => {
		const headStyles = document.querySelector('head link[title="css-dinamic"]');
		const estil = botoCanviCss.name;
		const style = DomElements.styles[estil];
		headStyles.href = style;
	})
})

DomElements.buttonDescarregarPdf.addEventListener('click', () => {
	window.print();
})

DomElements.buttonTabs.forEach((boto) => {
	boto.addEventListener('click', () => {
		const tab = document.querySelector(`div[name="${boto.dataset.tab}"]`);
		ocultarTabs();
		mostrarTab(tab);
	})
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
	const dades = {}
	for (const [key, value] of formData.entries()) {
		if ((!value) || (value === '')) {
			continue;
		}
		let valor = sanititzarValor(value);
		if (key === 'habilitats-profesionals') {
			valor = valor.split('<br>');
		}
		dades[key] = valor
	}

	return dades
}

const crearObjecteDades = (formDades) => {
	const dades = [];
	formDades.forEach((form) => {
		const dada = obtenirDadesFormularis(form);
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

	const formHabilitats = document.getElementById('habilitats-profesionals');
	habilitats = obtenirDadesFormularis(formHabilitats);

	

	const dades = { 
		dadesPersonals: dadesPersonals,
		dadesEstudis: dadesEstudis,
		dadesProfesionals:dadesProfesionals,
		resumProfesional: resumProfesional,
		habilitats: habilitats
	};

	afegirCustomElement('curriculum-vitae');
	enviarCustomEvent('curriculum-vitae', dades);

	ocultarTabs();
	mostrarTab(DomElements.tab3);
	
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

const ocultarTabs = () => {
	DomElements.contingutTabs.forEach((element) => {
		element.classList.add("invisible");
	})
}

const mostrarTab = (tab) => {
	tab.classList.remove('invisible');
}

export const eliminarElementAnterior = (event) => {	
	event.target.parentNode.remove();//eliminar el node pare
}
