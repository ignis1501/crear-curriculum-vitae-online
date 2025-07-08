const app = document.getElementById('app');
const dadesPersonalsForm = document.getElementById('dades-personals-form');
const dadesProfesionalsForm = document.getElementById('div-form-profesio');
const dadesEstudisForm = document.getElementById('div-form-estudis');
const obtenirDadesButton = document.querySelector('button[name="obtenirDades"]');
const divFormulariDades = document.querySelector('div[name="formularis"]');
const textAreas = document.querySelectorAll('textarea');
const buttonCanviCSS = document.querySelectorAll('button[data-tipus="canviCSS"]');
const elementLinkCss = document.getElementById('css-cv');
const buttonDescarregarPdf = document.querySelector('div[name="divDescargarPDF"] button');
const buttonTabs = document.querySelectorAll('button[class="tab"]');
const contingutTabs = document.querySelectorAll('.contingut-tab');
const tab1 = document.querySelector('div[name="tab1"]');
const tab2 = document.querySelector('div[name="tab2"]');
const tab3 = document.querySelector('div[name="tab3"]');
const styleForm = `:root {
	--background-color-win-98: rgb(187, 187, 187);
}

input {
	width: auto;
}

textarea {
	width: 98%;
	/*height: max-content;*/
}

div[name="formularis"] {
	background-color: var(--background-color-win-98);
	padding-top: 0.1rem;
	
}

.div-form-container {

	background-color: var(--background-color-win-98);
	margin: 2rem;	

	box-shadow: 2px 1px 1px rgb(17, 17, 17);	

	h2 {
		font-family: roboto;
		text-transform: uppercase;
		width: 100%;
		color: white;

		margin-top: 0px;

		background: linear-gradient(to right, rgb(3, 3, 87), rgb(13, 152, 216));
	}

	input, textarea {
		border-right: 2px solid white;
		border-bottom: 2px solid white;
		border-left: 2px solid black;
		border-top: 2px solid black;

		display: block;
	}
}

button {
	background-color: var(--background-color-win-98);

	cursor: pointer;

	box-shadow: 1px 1px 1px rgb(17, 17, 17);

	border-right: 2px solid black;
	border-bottom: 2px solid black;
	border-left: 2px solid white;
	border-top: 2px solid white;

	
}
button:hover {
	background-color: rgb(212, 207, 207);
	scale: 1.05;
}

.boder-win-98 {
	border-right: 2px solid black;
	border-bottom: 2px solid black;
	border-left: 2px solid white;
	border-top: 2px solid white;
}

/*TABS*/
div[name="tab1"], div[name="tab2"] {
	background-color: var(--background-color-win-98);

	box-shadow: 1px 1px 1px rgb(17, 17, 17);

	border-right: 2px solid black;
	border-bottom: 2px solid black;
	border-left: 2px solid white;
	border-top: 2px solid white;
}

div[name="tab1"] {
	padding: 0.5rem;
}
/* .contingut-tab {
	display: none;
} */

.visible {
	display: block;
}

.invisible {
	display: none;
}

@media print {
	body {
		print-color-adjust: exact;
		-webkit-print-color-adjust: exact;
	}

	div[name="formularis"] {
		display: none;
	}

	div[name="divBotonsEstils"] {
		display: none;
	}

	hr {
		display: none;
	}

	button {
		display: none;
	}

	/* div:not(div[name="container"]) {
		display: none;
	} */
	
	#app > h1 {
		display: none;
	}
}`;
const styles = {
	style1: 
	`./src/styles/style1.css`,
	style2: 
	`./src/styles/style2.css`,
	style3: 
	`./src/styles/style3.css`,
	style4: 
	`./src/styles/style4.css`,
	style5:
	`./src/styles/style5.css`,
	style6:
	`./src/styles/style6.css`,
	
}

export default { dadesPersonalsForm, dadesProfesionalsForm, dadesEstudisForm, obtenirDadesButton, divFormulariDades, textAreas, buttonCanviCSS, elementLinkCss, styles, buttonDescarregarPdf, buttonTabs, contingutTabs, tab1, tab2, tab3 };