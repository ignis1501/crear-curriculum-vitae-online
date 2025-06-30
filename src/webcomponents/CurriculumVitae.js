class CurriculumVitae extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.addEventListener('enviar-curriculum-vitae', (event) => {
			console.log('Objeto recibido CV:', event.detail);
			console.log(event.detail.dades);
			const dades = event.detail.dades;
			//convertir les dades en el objectes HTML per renderitzar
			const dadesPersonals = (Object.entries(dades.dadesPersonals).length !== 0) ? dadesPersonalsHtml(dades.dadesPersonals) : ''
			const dadesEstudis = (Object.entries(dades.dadesEstudis).length !== 0) ? dadesEstudisHtml(dades.dadesEstudis) : ''
			const dadesProfesionals = (Object.entries(dades.dadesProfesionals).length !== 0) ? dadesProfesionalsHtml(dades.dadesProfesionals) : ''

			console.log(dadesPersonals);
			

			this.render({ dadesPersonals, dadesEstudis, dadesProfesionals });
		});
		//this.render()
		const dadesPersonalsHtml = (dades) => {
			console.log('dadesPersonalsHtml', dades);
			let dadesHTML = '';
			let nom = '';
			for (const [key, value] of Object.entries(dades)) {
				//console.log(`${key}: ${value}`);
				(key === "nom")
					?	nom = value
					:	dadesHTML += `<div name=div${key}><p name=${key}>${value}</p></div>`

			}

			return `
			<div name="divTitol"><h1 name="nom">${nom}</h1></div>
			<div name="dades-personals">
			<h2>Contacto</h2>
				<div>
					${dadesHTML}
				</div>
			</div>
		`
		}

		const dadesEstudisHtml = (dades) => {
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

			return  `
					<div name="dades-estudis">			
						<h2>Formación Académica</h2>
						<div name="dada-estudis">
							${dadesHTML}
						</div>
					</div>
					`

			//console.log('dades dins DadesEstudis CE', dades);
		}

		const dadesProfesionalsHtml = (dades) => {
			let dadesHTML = '';
			console.log("dadesProfesionals buit", Object.values(dades).length)
			for (const [key, value] of Object.entries(dades)) {
				dadesHTML += `<div name=profesio${key} class="dada-profesio">`;
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

			return `		
					<div name="dades-profesionals"> 
						<h2>Experciencia Laboral</h2>
						<div name="dada-profesio">
							${dadesHTML}
						</div>
					</div>
					`
		}
	}

	
	render({ dadesPersonals, dadesEstudis, dadesProfesionals }) {
		this.innerHTML = `${dadesPersonals}${dadesEstudis}${dadesProfesionals}`
	}
}
customElements.define('curriculum-vitae', CurriculumVitae)