import DomElements from './dom/domElements.js'

let dadesPersonals = {}
let dadesEstudis = {}
let dadesProfesionals = {}

console.log('index');

/**ELEMENTS DOM *//**TODO TOTS FORA DE LES FUNCTIONS */
/* const dadesPersonalsForm = document.getElementById('dades-personals-form');
const dadesProfesionalsForm = document.getElementById('div-form-profesio');
const dadesEstudisForm = document.getElementById('div-form-estudis');
const obtenirDadesButton = document.querySelector('button[name="obtenirDades"]');
const mostrarOcultarFormsButton = document.querySelector('button[name="mostrarOcultarForms"]'); */

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
	switchFormulariDades();
})

/* afegirProfesioButton.addEventListener('click', (event) => {
	afegirProfesio(event);
}) */

/* eliminarProfesioButton.addEventListener('click', (event) => {
	eliminarElementAnterior(event, false);
}) */


const afegirDadaPersonal = (event) => {
	//event.preventDefault()	

	let divsDades = document.querySelectorAll('div[class="dades-personals"]');
	
	let htmlDadaPersonal = `<div name="divDada" class="dades-personals">
			<input type="text" name="dada${divsDades.length-3}" data-tipus="dades-personals" placeholder="dada"/><button name="eliminarInput">Eliminar</button>
		</div>`
	divsDades[divsDades.length-1].insertAdjacentHTML("afterEnd", htmlDadaPersonal);
}

const quitarDadaPersonal = (event) => {
	event.preventDefault()
	let divsDades = document.querySelectorAll('div[class="dades-personals"]');
	(divsDades.length > 3)
		?	divsDades[divsDades.length-1].remove()
		:	alert('No se pueden eliminar los elementos predeterminados')
	
}

const afegirEstudis = (event) => {
	event.preventDefault()

	const divEstudis = document.querySelector('div[name="div-form-estudis"]');
	const divEstudisForm = document.querySelectorAll('div[name="div-form-estudis"] form');
	let estudis = `
	<form name="dades-estudis-form">
		<div name="divEstudis" class="dades-estudis">
			<input name="data-estudis" placeholder="Fecha estudios"/>
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

const quitarEstudis = (event) => {
	event.preventDefault()
	let divsFormEstudis = document.querySelectorAll('div[name="div-form-estudis"] form');
	(divsFormEstudis.length > 1)
		?	divsFormEstudis[divsFormEstudis.length-1].remove()
		:	alert('No se puede eliminar el último elemento')
}

/* const crearLista = (event) => {
	event.preventDefault()
	let elementPrevi = event.target.previousElementSibling;
	let ul = `
		<li style="list-style: none;" name="li0">
			<input placeHolder="Titulo de la lista" type="text"/>
			
		</li>
		<button onClick="afegirLi(event)">+</button>
		<button onClick="eliminarLi(event)">-</button>
	`
	elementPrevi.insertAdjacentHTML("beforeEnd", ul);
	
	const form = document.getElementById('dades-procesionals-form');
	let dades = obtenirDadesFormularis(form);
}

const afegirLi = (event) => {
	event.preventDefault();
	const ul = event.target.parentNode;
	const nextLi = ul.querySelectorAll('li').length
	const li = `
	<li name=${nextLi} style="list-style: none;">
		<input placeHolder="Lista" type="text" name="elementLi${nextLi}"/>			
	</li>` 
	ul.insertAdjacentHTML("beforeEnd", li);
}

const eliminarLi = (event) => {
	event.preventDefault();

	const ul = event.target.parentNode;
	const lis = ul.querySelectorAll('li');
	if (lis.length === 0) {
		while (ul.firstChild) {
			ul.removeChild(ul.firstChild);
		  }
		return
	}
	lis[lis.length-1].remove();

	


} */

const afegirProfesio = (event) => {
	//event.preventDefault();

	const divProfesio = document.querySelector('div[name="div-form-profesio"]');
	const divFormProfesio = document.querySelectorAll('div[name="div-form-profesio"] form');
	const nouDivProfesio = `	
	<form name="dades-estudis-form">
		<input type="text" name="data-profesional" placeholder="Fechas"/>
		<input type="text" name="nom-profesional" placeholder="Puesto"/>
		<input type="text" name="centre-profesional" placeholder="Empresa"/>
		<textarea name="detalls-profesional" placeholder="Detalles"></textarea>
		<button name="eliminarSeccio">Eliminar</button>		
	<form>
	`;
	
	(divFormProfesio.length > 0)
		?	divFormProfesio[divFormProfesio.length -1].insertAdjacentHTML("afterend", nouDivProfesio)
		:	divProfesio.insertAdjacentHTML("afterbegin", nouDivProfesio)
}

const quitarProfesio = (event) => {
	event.preventDefault();
	event.target.parentNode.parentNode.remove()

}

const obtenirDadesFormularis = (form) => {
	const formData = new FormData(form);
	const dades = {}
	for (const [key, value] of formData.entries()) {
		if ((!value) || (value === '')) {
			continue;
		}
		let valor = sanititzarValor(value);
		dades[key] = valor
	}
	console.log('dadesPersonals', dades)

	return dades
}

const obtenirDadesFormularisCompostos = (form) => {
	const dades = []
	form.forEach((f, i) => {
		let dada = {}
		const formData = new FormData(f);
		
		for (const [key, value] of formData.entries()) {
			if ((!value) || (value === '')) {
				continue;
			}
			let valor = sanititzarValor(value);
			dada[key] = valor
			console.log('dada dins for', dada)
		}
		dades.push(dada)
	})

	return dades
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

	return valor;
				
}

const obtenirDades = () => {
	const formDadesPersonals = document.getElementById('dades-personals-form');
	dadesPersonals = obtenirDadesFormularis(formDadesPersonals);

	const formDadesEstudis = document.querySelectorAll('div[name="div-form-estudis"] form');
	dadesEstudis = obtenirDadesFormularisCompostos(formDadesEstudis);

	const formDadesProfesionals = document.querySelectorAll('div[name="div-form-profesio"] form');
	dadesProfesionals = obtenirDadesFormularisCompostos(formDadesProfesionals);

	const app = document.getElementById('app');

	afegirCustomElement('dades-personals');

	enviarCustomEvent('dades-personals');
	
}

const afegirCustomElement = (nom) => {
	//verificat si ja existex l'element al DOM (!!document) retorna true/false si existeix
	if (!(!!document.querySelector(nom))) {
		const customElement = document.createElement(nom);
		const app = document.getElementById('app');
	
		app.appendChild(customElement);
	}
	
}

const enviarCustomEvent = (enviarANomEvent) => {
	const elementEvent = document.querySelector(enviarANomEvent);

	const detailEvent = {
		'dades-personals': {
			nomEvent: `enviar-${enviarANomEvent}`,
			missatge: 'Dades personals',
			dades: dadesPersonals
		},
		'dades-estudis': {
			nomEvent: `enviar-${enviarANomEvent}`,
			missatge: 'Dades estudis',
			dades: dadesEstudis
		},
		'dades-profesionals': {
			nomEvent: `enviar-${enviarANomEvent}`,
			missatge: 'Dades Profesionals',
			dades: dadesProfesionals
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

const switchFormulariDades = () => {
	const divFormulariDades = document.querySelector('div[name="formularis"]');
	(divFormulariDades.style.display === 'none')
	?	divFormulariDades.style.display = ''
	:	divFormulariDades.style.display = 'none'
}

export const eliminarElementAnterior = (event) => {
	//event.preventDefault();
	/* if (input) {
		console.log(event.target.previousElementSibling); */
		//event.target.previousElementSibling.remove();//eliminar el germa anterior
		event.target.parentNode.remove();//eliminar el node pare
		//event.target.remove();//eliminar el mateix botó
	/* } else {
		console.log(event.target.parentNode);
		event.target.parentNode.remove();
	} */
}


//export default { eliminarElementAnterior }
