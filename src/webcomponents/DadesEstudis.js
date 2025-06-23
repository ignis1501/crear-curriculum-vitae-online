class DadesEstudis extends HTMLElement {
	
	constructor() {
		super();
	}

	connectedCallback() {
		let dades = {};
		/**
		 * Event listener que escolta el customEvent 'enviar-dades-estudis' i monta el DOM amb les dades 
		 * @param evento => dades enviades pel customEvent a index.js
		 */
		this.addEventListener('enviar-dades-estudis', (evento) => {

			console.log('Objeto recibido:', evento.detail);
			dades = evento.detail.dades;
			console.log('dades', dades)
			if (typeof dades === 'object' && dades !== null) {//revisar si dades isObject i !null
				if (Object.keys(dades).length) {					
					const dadesHTML = crearDadesHtml(dades);
					//console.log("dadesHTML, dins customElement", dadesHTML);
					this.render(dadesHTML);
				} else {
					console.log('DadesEstudis.js/connectedCallback/addEventListener => dades es un object buit');
					//eliminar CustomElement si dades es buit i existeix element al DOM
					eliminarCE();
				}
			} else {
				console.log('DadesEstudis.js/connectedCallback/addEventListener => dades no es un object o es null')
			}			

		});	

		/**
		 * function que recorre les dades rebudes i retorna el HTML
		 * @param {*} dades 
		 * @returns dadesHTML
		 */
		const crearDadesHtml = (dades) => {
			/* let dadesHTML = ''
			for (const [key, value] of Object.entries(dades)) {
				console.log(`${key}: ${value}`);
				dadesHTML += `<div name=div${key}><p name=${key}>${value}</p></div>`
			}

			return dadesHTML; */

			console.log('dades dins DadesEstudis CE', dades);
		}

		/**
		 * function eliminar el Custom Element quant les dades son buides
		 */
		const eliminarCE = () => {
			const DadesEstudisElement = document.querySelector('dades-estudis');
			let existeixDadesEstudisHTML = !!DadesEstudisElement;

			if (existeixDadesEstudisHTML)	DadesEstudisElement.remove();
		}
		
	}

	render(dadesHTML) {
		this.innerHTML = `			
			<h2>Dades personals</h2>
			<div>
				${dadesHTML}
			</div>		
		`
	}
}

customElements.define("dades-estudis", DadesEstudis)