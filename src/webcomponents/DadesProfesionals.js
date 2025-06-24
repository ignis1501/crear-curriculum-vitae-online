class DadesProfesionals extends HTMLElement {
	
	constructor() {
		super();
	}

	connectedCallback() {
		let dades = {};
		/**
		 * Event listener que escolta el customEvent 'enviar-dades-personals' i monta el DOM amb les dades 
		 * @param evento => dades enviades pel customEvent a index.js
		 */
		this.addEventListener('enviar-dades-profesionals', (evento) => {

			console.log('Objeto recibido:', evento.detail);
			dades = evento.detail.dades;
		
			if (typeof dades === 'object' && dades !== null) {//revisar si dades isObject i !null
				if (Object.keys(dades).length) {					
					const dadesHTML = crearDadesHtml(dades);
					//console.log("dadesHTML, dins customElement", dadesHTML);
					this.render(dadesHTML);
				} else {
					console.log('DadesProfesionals.js/connectedCallback/addEventListener => dades es un object buit');
					//eliminar CustomElement si dades es buit i existeix element al DOM
					eliminarCE();
				}
			} else {
				console.log('DadesProfesionals.js/connectedCallback/addEventListener => dades no es un object o es null')
			}			

		});	

		/**
		 * function que recorre les dades rebudes i retorna el HTML
		 * @param {*} dades 
		 * @returns dadesHTML
		 */
		const crearDadesHtml = (dades) => {
			let dadesHTML = '';
			console.log("dadesProfesionals buit", Object.values(dades).length)
			for (const [key, value] of Object.entries(dades)) {
				dadesHTML += `<div name=profesio${key}>`;
				console.log(key);
				console.log(key.length);
				for (const [subKey, subValue] of Object.entries(value)) {
					dadesHTML += `<div name=div${subKey}><p name=${subKey}>${subValue}</p></div>`
				}
				dadesHTML += `</div>`
				/* console.log(`${key}: ${value}`);
				dadesHTML += `<div name=div${key}><p name=${key}>${value}</p></div>` */
			}
			console.log('dades creades profesio HTML', dadesHTML);

			return dadesHTML;
		}

		/**
		 * function eliminar el Custom Element quant les dades son buides
		 */
		const eliminarCE = () => {
			const DadesProfesionalsElement = document.querySelector('dades-profesionals');
			let existeixDadesProfesionalsHTML = !!DadesProfesionalsElement;

			if (existeixDadesProfesionalsHTML)	DadesProfesionalsElement.remove();
		}
		
	}

	render(dadesHTML) {
		this.innerHTML = `			
			<h2>Datos profesionales</h2>
			<div>
				${dadesHTML}
			</div>		
		`
	}
}

customElements.define("dades-profesionals", DadesProfesionals)