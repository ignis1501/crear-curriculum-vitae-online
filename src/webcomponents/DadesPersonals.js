class DadesPersonals extends HTMLElement {
	/* static get observedAttributes() {
		return [dadesPersonals];
	} */

	constructor() {
		super();
		//this.dades = null;
	}

	/* attributeChangedCallback(attrName, oldValue, newValue) {
		console.log('attrName', attrName);
		if (attrName === dadesPersonals) {
		//this.shadowRoot.getElementById('valor').textContent = newValue;
		} else if (attrName === 'otro-atributo') {
		// Realizar acciones con el atributo 'otro-atributo'
		console.log(`Atributo otro-atributo cambió a: ${newValue}`);
		}
	} */

	/* handleEvent(event) {
		console.log('entra event DadesPersonals')
    if (event.type === "enviar-dades-personals") {
      this.dades = event.detail;
	  console.log(event.detail);
      this.render();
    }
  } */

	connectedCallback() {
		let dades = {};
		//console.log('connectedCallback')
		this.addEventListener('enviar-dades-personals', (evento) => {

			console.log('Objeto recibido:', evento.detail); // Muestra { mensaje: 'Hola desde el custom element' }
			dades = evento.detail.dades;
			console.log('dades', dades)
			//TODO para control si dades es undefined, error console
			if (typeof dades === 'object' && dades !== null) {
				if (Object.keys(dades).length) {
					//console.log('fer render', Object.keys(dades).length);
					//TODO per obtenir les dades amb el for i guardar a const
					let dadesHTML = ''
					for (const [key, value] of Object.entries(dades)) {
						console.log(`${key}: ${value}`);
						dadesHTML += `<div name=div${key}><p name=${key}>${value}</p></div>`
						}
					//console.log(dadesHTML);
					this.render(dadesHTML);
				} else {
					console.log('DadesPersonals.js/connectedCallback/addEventListener => dades es un object buit');
					//TODO function per eliminar CustomElement si dades es buit i existeix element al DOM
					const DadesPersonalsElement = document.querySelector('dades-personals');
					let existeixDadesPersonalsHTML = !!DadesPersonalsElement;
					//console.log(existeixDadesPersonalsHTML)
					if (existeixDadesPersonalsHTML)	DadesPersonalsElement.remove()
				}
			} else {
				console.log('DadesPersonals.js/connectedCallback/addEventListener => dades no es un object o es null')
			}			

		});	
		
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

customElements.define("dades-personals", DadesPersonals)