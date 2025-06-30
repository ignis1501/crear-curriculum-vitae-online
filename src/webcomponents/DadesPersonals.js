class DadesPersonals extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let dades = {};
		let nom = '';
		/**
		 * Event listener que escolta el customEvent 'enviar-dades-personals' i monta el DOM amb les dades 
		 * @param evento => dades enviades pel customEvent a index.js
		 */
		this.addEventListener('enviar-dades-personals', (evento) => {

			//console.log('Objeto recibido:', evento.detail);
			dades = evento.detail.dades;
			//console.log('dades', dades)
			//TODO CONTROL DE DADES UNDEFINED
			if (typeof dades === 'object' && dades !== null) {//revisar si dades isObject i !null
				if (Object.keys(dades).length) {					
					const dadesHTML = crearDadesHtml(dades);
					//console.log("dadesHTML, dins customElement", dadesHTML);
					this.render(dadesHTML);
				} else {
					console.log('DadesPersonals.js/connectedCallback/addEventListener => dades es un object buit');
					//eliminar CustomElement si dades es buit i existeix element al DOM
					eliminarCE();
				}
			} else {
				//console.log('DadesPersonals.js/connectedCallback/addEventListener => dades no es un object o es null')
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
				//console.log(`${key}: ${value}`);
				(key === "nom")
					?	nom = value
					:	dadesHTML += `<div name=div${key}><p name=${key}>${value}</p></div>`

			}

			return { dades:dadesHTML, nom: nom };
		}

		/**
		 * function eliminar el Custom Element quant les dades son buides
		 */
		const eliminarCE = () => {
			const DadesPersonalsElement = document.querySelector('dades-personals');
			let existeixDadesPersonalsHTML = !!DadesPersonalsElement;

			if (existeixDadesPersonalsHTML)	DadesPersonalsElement.remove();
		}
		
	}

	render({dades, nom}) {
		this.innerHTML = `
			<div name="divTitol"><h1 name="nom">${nom}</h1></div>
			<div name="dades-personals">
			<h2>Contacto</h2>
				<div>
					${dades}
				</div>
			</div>
		`
	}
}

customElements.define("dades-personals", DadesPersonals)