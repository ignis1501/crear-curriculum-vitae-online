import DomElements from './dom/domElements.js'

/* let dadesPersonals = {}
let dadesEstudis = {}
let dadesProfesionals = {} */

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

/* const quitarEstudis = (event) => {
	event.preventDefault()
	let divsFormEstudis = document.querySelectorAll('div[name="div-form-estudis"] form');
	(divsFormEstudis.length > 1)
		?	divsFormEstudis[divsFormEstudis.length-1].remove()
		:	alert('No se puede eliminar el último elemento')
} */

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

/* const quitarProfesio = (event) => {
	event.preventDefault();
	event.target.parentNode.parentNode.remove()

} */

const obtenirDadesFormularis = (form) => {
	const formData = new FormData(form);
	//console.log("formPersonals formData", formData);
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

/* const obtenirDadesFormularisCompostos = (form) => {
	const dades = [];
	//console.log(dades.length, 'dades.length');
	//console.log(dades, 'dades en entrar a compostos');
	//console.log('form.length', form.length);
	for (let i = 0; i < form.length; i++) {
		const dada = {};
		const formData = new FormData(form[i]);
		//console.log(formData, 'FormData');
		console.log('formDatalength', Array.from(formData.values()).length);
		if (Object.entries(Object.fromEntries(formData)).length !== 0) {
			for (const [key, value] of formData.entries()) {
				
				if ((!value) || (value === '')) {
					console.log('value', value);
					continue;
				}
				console.log('value', value);
				let valor = sanititzarValor(value);
				dada[key] = valor;
				
				//console.log(dada, 'dada');
			}
			dades.push(dada);			
		} else {
			console.log('formData buit');
		}
	}
	//console.log('obtenirDadesCompostFin dades', dades);

	return dades
} */

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

	const formDadesPersonals = document.getElementById('dades-personals-form');
	dadesPersonals = obtenirDadesFormularis(formDadesPersonals);
	/* console.log('dadesPersonals length', Object.keys(dadesPersonals).length);
	if (Object.keys(dadesPersonals).length !== 0) {
		afegirCustomElement('dades-personals');
		enviarCustomEvent('dades-personals', dadesPersonals);
	} */

	const formDadesEstudis = document.querySelectorAll('div[name="div-form-estudis"] form');
	dadesEstudis = crearObjecteDades(formDadesEstudis);
	/* console.log('dadesEstudis length', dadesEstudis.length);
	if (dadesEstudis.length !== 0) {
		afegirCustomElement('dades-estudis');
		enviarCustomEvent('dades-estudis', dadesEstudis);
	} */	

	const formDadesProfesionals = document.querySelectorAll('div[name="div-form-profesio"] form');
	dadesProfesionals = crearObjecteDades(formDadesProfesionals);
	/* console.log('dadesProfesionals length', dadesProfesionals.length);
	if (dadesProfesionals.length !== 0) {
		afegirCustomElement('dades-profesionals');
		enviarCustomEvent('dades-profesionals', dadesProfesionals);
	} */

	const dades = { 
		dadesPersonals: dadesPersonals,
		dadesEstudis: dadesEstudis,
		dadesProfesionals:dadesProfesionals
	};

	afegirCustomElement('curriculum-vitae');
	enviarCustomEvent('curriculum-vitae', dades);

	/* afegirCustomElement('dades-personals');
	afegirCustomElement('dades-estudis');
	afegirCustomElement('dades-profesionals');

	enviarCustomEvent('dades-personals', dadesPersonals);
	enviarCustomEvent('dades-estudis', dadesEstudis);
	enviarCustomEvent('dades-profesionals', dadesProfesionals); */
	
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
	//console.log("elementEvent", elementEvent);
	//console.log("enviarANomEvent", enviarANomEvent);

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

	//console.log("detailEvent[enviarANomEvent].nomEvent", detailEvent[enviarANomEvent].nomEvent);
	
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


//export default { eliminarElementAnterior }
