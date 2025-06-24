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
				if (Object.entries(Object.fromEntries(dades)).length !== 0) {					
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
			let dadesHTML = ''
			for (const [key, value] of Object.entries(dades)) {
				dadesHTML += `<div name=estudis${key}>`;
				console.log(key);
				for (const [subKey, subValue] of Object.entries(value)) {
					dadesHTML += `<div name=div${subKey}><p name=${subKey}>${subValue}</p></div>`
				}
				dadesHTML += `</div>`
				/* console.log(`${key}: ${value}`);
				dadesHTML += `<div name=div${key}><p name=${key}>${value}</p></div>` */
			}
			console.log('dades creades estudis HTML', dadesHTML);

			return dadesHTML;

			//console.log('dades dins DadesEstudis CE', dades);
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
			<h2>Datos académicos</h2>
			<div>
				${dadesHTML}
			</div>		
		`
	}
}

customElements.define("dades-estudis", DadesEstudis)