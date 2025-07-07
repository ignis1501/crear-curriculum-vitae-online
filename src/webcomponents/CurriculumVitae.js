class CurriculumVitae extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.addEventListener('enviar-curriculum-vitae', (event) => {
			const dades = event.detail.dades;
			//convertir les dades en el objectes HTML per renderitzar
			const dadesPersonals = (Object.entries(dades.dadesPersonals).length !== 0) ? dadesPersonalsHtml(dades.dadesPersonals) : ''
			const dadesEstudis = (Object.entries(dades.dadesEstudis).length !== 0) ? dadesEstudisHtml(dades.dadesEstudis) : ''
			const dadesProfesionals = (Object.entries(dades.dadesProfesionals).length !== 0) ? dadesProfesionalsHtml(dades.dadesProfesionals) : ''
			const dadesResumProfesional = (Object.entries(dades.resumProfesional).length !== 0) ? resumProfesionalHtml(dades.resumProfesional) : ''
			const dadesHabilitats= (Object.entries(dades.habilitats).length !== 0) ? habilitatsHtml(dades.habilitats) : ''

			this.render({ dadesPersonals, dadesEstudis, dadesProfesionals, dadesResumProfesional, dadesHabilitats });
		});
		//this.render()
		const dadesPersonalsHtml = (dades) => {
			let dadesHTML = '';
			let nom = '';
			for (const [key, value] of Object.entries(dades)) {
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

		const resumProfesionalHtml = (dades) => {
			let dadesHTML = '';
			for (const [key, value] of Object.entries(dades)) {
				(key === "nom")
					?	nom = value
					:	dadesHTML += `<div name=div${key}><p name=${key}>${value}</p></div>`

			}

			return `${dadesHTML}`
		}

		const habilitatsHtml = (dades) => {
			let dadesHTML = '';
			dades["habilitats-profesionals"].map((dada) => {
				dadesHTML += `<div name=divhabilitats-profesionals><p name=habilitat-${dada}>${dada}</p></div>`
			})

			return `<div name="divhabilitats">
						<h2>Habilidades</h2>
						${dadesHTML}
					</div>`
		}

		const dadesEstudisHtml = (dades) => {
			let dadesHTML = ''
			for (const [key, value] of Object.entries(dades)) {
				dadesHTML += `<div name=estudis${key} class="dada-estudis">`;
				console.log(key);
				for (const [subKey, subValue] of Object.entries(value)) {
					dadesHTML += `<div name=div${subKey}><p name=${subKey}>${subValue}</p></div>`
				}
				dadesHTML += `</div>`
			}

			return  `
					<div name="dades-estudis">			
						<h2>Formación Académica</h2>
						<div name="dada-estudis">
							${dadesHTML}
						</div>
					</div>
					`
		}

		const dadesProfesionalsHtml = (dades) => {
			let dadesHTML = '';
			for (const [key, value] of Object.entries(dades)) {
				dadesHTML += `<div name=profesio${key} class="dada-profesio">`;
				for (const [subKey, subValue] of Object.entries(value)) {
					dadesHTML += `<div name=div${subKey}><p name=${subKey}>${subValue}</p></div>`
				}
				dadesHTML += `</div>`
			}

			return `		
					<div name="dades-profesionals"> 
						<h2>Experiencia Laboral</h2>
						<div name="dada-profesio">
							${dadesHTML}
						</div>
					</div>
					`
		}
	}

	
	render({ dadesPersonals, dadesEstudis, dadesProfesionals, dadesResumProfesional, dadesHabilitats }) {
		this.innerHTML = `${dadesPersonals}${dadesResumProfesional}${dadesHabilitats}${dadesEstudis}${dadesProfesionals}`
	}
}
customElements.define('curriculum-vitae', CurriculumVitae)