const app = document.getElementById('app');
const dadesPersonalsForm = document.getElementById('dades-personals-form');
const dadesProfesionalsForm = document.getElementById('div-form-profesio');
const dadesEstudisForm = document.getElementById('div-form-estudis');
const obtenirDadesButton = document.querySelector('button[name="obtenirDades"]');
//const mostrarOcultarFormsButton = document.querySelector('button[name="mostrarOcultarForms"]');
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
const styles = {
	style1: 
	`
	curriculum-vitae {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 5px 5px;

	font-family: Cambria, Garamond, Georgia, Times, 'Times New Roman', serif;

	overflow: auto;
	width: 100%;

	>div {
		padding: 0.5rem;
	}

	p {
		font-size: 1rem;
	}

	h2 {
		font-size: 1.5rem;
		text-transform: uppercase;
	}
}



div[name="divresum-profesional"] {
	grid-column-start: 1;
	grid-column-end: 4;
	grid-row-start: 4;

	text-align: center;
  	align-content: center;

	border-bottom: 2px solid rgb(107, 89, 62);

}

div[name="divTitol"]{
	grid-column-start: 1;
	grid-column-end: span 4;
	grid-row-start: 1;

	display: grid;
	justify-content: center;

	background-color: rgb(107, 89, 62);

	border-radius: 16px;

	h1 {
		
		color:rgba(255, 255, 255, 0.74);
		font-weight: 900;

		text-transform: uppercase;
		font-size: 2rem;	

	}
}
	
div[name="dades-personals"] {
		
	grid-column-start: 1;
	grid-column-end: span 4;
	grid-row-start: 2;
	grid-row-end: 2;
	background-color: rgb(107, 89, 62);

	height: fit-content;
	text-align: center;
	margin-top: -2rem;
	

	border-radius: 16px;

	h2 {
		display: none;
	}

	div {
		display: inline-flex;
		margin-right: 10px;

		p {
			color: white;
		}
	}
}

div[name="divhabilitats"] {
	grid-column-start: 1;
	grid-column-end: 4;
	grid-row-start: 3;
	border-radius: 16px;

	border-bottom: 2px solid rgb(107, 89, 62);

	div {
		display: inline flow-root list-item;
		margin: 1rem;
	}
}
	
div[name="dades-profesionals"] {
	grid-column-start: 1;
	grid-column-end: 4;
	grid-row-start: 5;

	>div {
		border-bottom: 2px solid rgb(107, 89, 62);
	}
}
	

.dada-profesio {

	padding: 10px;

	border-bottom: 2px solid rgb(107, 89, 62);

	div[name="divnom-profesional"] {
		background: rgba(85, 76, 76, 0.3);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 253, 253, 0.700);

		margin: 0.3rem;
		>p {
		font-weight: 900;
		text-align: center;
		}
	}

	din[name="divdetalls-profesionals"] {
		grid-row-start: 1;
	}
}

.dada-profesio:nth-child(odd) {
	background-color: rgba(174, 176, 179, 0.212);
	border-radius: 20px;
}

div[name="dades-estudis"] {
	grid-column-start: 1;
	grid-column-end: 4;
	grid-row-start: 6;

	>div {
		border-bottom: 2px solid rgb(107, 89, 62);
	}
}
	
div[name="dada-estudis"] {
	>div {

		padding: 10px;

		div[name="divdata-estudis"] {
			grid-column-start: 1;
			grid-column-end: 2;
		}

		div[name="divnom-estudis"] {
			grid-column-start: 2;
			grid-column-end: 3;

			background: rgba(85, 76, 76, 0.3);
			border-radius: 16px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(5px);
			border: 1px solid rgba(255, 253, 253, 0.700);

			margin: 0.3rem;
			>p {
				font-weight: 900;
				text-align: center;
			}
		}

		div[name="divcentre-estudis"] {
			grid-column-start: 1;
			grid-column-end: 2;
		}
	}
	
}

.dada-estudis:nth-child(odd) {
	background-color: rgba(169, 172, 175, 0.212);
	border-radius: 20px;
	}
	`,
	style2: 
	`
	curriculum-vitae {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 5px 5px;

		font-family: Cambria, Garamond, Georgia, Times, 'Times New Roman', serif;

		overflow: auto;
		width: 100%;

		>div {
			padding: 0.5rem;
		}

		p {
			font-size: 1rem;
		}

		h2 {
			font-size: 1.5rem;
			text-transform: uppercase;
		}
	}



	div[name="divresum-profesional"] {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 2;

		text-align: center;
		align-content: center;

	}

	div[name="divTitol"]{
		grid-column-start: 2;
		grid-column-end: span 4;

		display: grid;
		justify-content: end;

		border-top: 2px double rgb(23, 11, 128);
		border-bottom: 2px double rgb(23, 11, 128);
		padding: 20px 0 20px 0;

		border-radius: 16px;

		h1 {
			
			color:rgba(0, 0, 0, 0.74);
			font-weight: 900;
			text-decoration: underline;

			text-transform: uppercase;
			font-size: 2rem;	

		}
	}
		
	div[name="dades-personals"] {
			
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 1;
		grid-row-end: 1;

		border-radius: 16px;

		h2 {
			display: none;
		}
	}

	div[name="divhabilitats"] {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 3;
		border-radius: 16px;
	}
		
	div[name="dades-profesionals"] {
		grid-column-start: 2;
		grid-column-end: 4;
		grid-row-start: 2;

		>div {
			border-bottom: 2px solid rgb(32, 31, 31);
		}
	}
		

	.dada-profesio {
		display: grid;/*treure'l dona un efecte interesant*/
		grid-template-columns: 1fr 2fr;

		padding: 10px;

		border-bottom: 2px solid black;

		div[name="divnom-profesional"] {
			background: rgba(85, 76, 76, 0.3);
			border-radius: 16px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(5px);
			border: 1px solid rgba(255, 253, 253, 0.700);

			margin: 0.3rem;
			>p {
			font-weight: 900;
			text-align: center;
			}
		}

		din[name="divdetalls-profesionals"] {
			grid-row-start: 1;
		}
	}

	.dada-profesio:nth-child(odd) {
		background-color: rgba(174, 176, 179, 0.212);
		border-radius: 20px;
	}

	div[name="dades-estudis"] {
		grid-column-start: 2;
		grid-column-end: 5;
		grid-row-start: 3;

		>div {
			border-bottom: 2px solid rgb(51, 49, 49);
		}
	}
		
	div[name="dada-estudis"] {
		>div {
			display: grid;
			grid-template-columns: 1fr 2fr;

			padding: 10px;

			div[name="divdata-estudis"] {
				grid-column-start: 1;
				grid-column-end: 2;
			}

			div[name="divnom-estudis"] {
				grid-column-start: 2;
				grid-column-end: 3;

				background: rgba(85, 76, 76, 0.3);
				border-radius: 16px;
				box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(5px);
				border: 1px solid rgba(255, 253, 253, 0.700);

				margin: 0.3rem;
				>p {
					font-weight: 900;
					text-align: center;
				}
			}

			div[name="divcentre-estudis"] {
				grid-column-start: 1;
				grid-column-end: 2;
			}
		}
		
	}

	.dada-estudis:nth-child(odd) {
		background-color: rgba(169, 172, 175, 0.212);
		border-radius: 20px;
	}
	`,
	style3: 
	`
		curriculum-vitae {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 5px 5px;

			font-family: Cambria, Garamond, Georgia, Times, 'Times New Roman', serif;

			overflow: auto;
			width: 100%;

			>div {
				padding: 0.5rem;
			}

			p {
				font-size: 1rem;
			}

			h2 {
				font-size: 1.5rem;
				text-transform: uppercase;
				color:brown;
			}
		}



		div[name="divresum-profesional"] {
			grid-column-start: 1;
			grid-column-end: 4;
			grid-row-start: 2;
			/*grid-row-end: 4;*/

			text-align: center;
			align-content: center;

			border-top: 2px double rgb(23, 11, 128);
			border-bottom: 2px double rgb(23, 11, 128);
			padding: 20px 0 20px 0;
			border-radius: 20px;

		}

		div[name="divTitol"]{
			grid-column-start: 2;
			grid-column-end: span 4;

			display: grid;
			justify-content: end;

			border-top: 2px double rgb(23, 11, 128);
			border-bottom: 2px double rgb(23, 11, 128);
			padding: 20px 0 20px 0;

			border-radius: 16px;

			h1 {
				
				color:rgba(134, 6, 6, 0.74);
				font-weight: 900;
				text-decoration: underline;

				text-transform: uppercase;
				font-size: 2rem;
				
				

			}
		}
			
		div[name="dades-personals"] {
				
			grid-column-start: 1;
			grid-column-end: 1;
			grid-row-start: 1;
			grid-row-end: 1;

			border-radius: 16px;

			h2 {
				display: none;
			}
		}

		div[name="divhabilitats"] {
			grid-column-start: 1;
			grid-column-end: 4;
			grid-row-start: 4;

			border-radius: 16px;

			>div {
				display: inline-flex;
				margin-right: 1rem;
			}

			border-top: 2px double rgb(23, 11, 128);
			border-bottom: 2px double rgb(23, 11, 128);
			padding: 20px 0 20px 0;
			border-radius: 20px;

		}
			
		div[name="dades-profesionals"] {
			grid-column-start: 1;
			grid-column-end: 4;
			grid-row-start: 3;
			/*grid-row-end: 4;*/

			border-top: 2px double rgb(23, 11, 128);
			border-bottom: 2px double rgb(23, 11, 128);
			padding: 20px 0 20px 0;
			border-radius: 20px;
		}
			

		.dada-profesio {
			display: grid;/*treure'l dona un efecte interesant*/
			grid-template-columns: 1fr 2fr;

			>div {
				padding: 6px;
			}


			div[name="divnom-profesional"] {
				background: rgba(85, 76, 76, 0.3);
				border-radius: 16px;
				box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(5px);
				border: 1px solid rgba(255, 253, 253, 0.700);

				margin: 0.3rem;
				>p {
				font-weight: 900;
				text-align: center;
				color:brown;
				}
			}
		}

		.dada-profesio:nth-child(odd) {
			background-color: rgba(169, 172, 175, 0.212);
			border-radius: 20px;
		}

		div[name="dades-estudis"] {
			grid-column-start: 1;
			grid-column-end: 4;
			grid-row-start: 5;

			border-top: 2px double rgb(23, 11, 128);
			border-bottom: 2px double rgb(23, 11, 128);
			padding: 20px 0 20px 0;
			border-radius: 20px;
		}
			
		div[name="dada-estudis"] {
			>div {
				display: grid;
				grid-template-columns: 1fr 2fr;


				padding: 10px;


				div[name="divdata-estudis"] {
					grid-column-start: 1;
					grid-column-end: 2;
				}

				div[name="divnom-estudis"] {
					grid-column-start: 2;
					grid-column-end: 3;

					background: rgba(85, 76, 76, 0.3);
					border-radius: 16px;
					box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
					backdrop-filter: blur(5px);
					border: 1px solid rgba(255, 253, 253, 0.700);

					color:brown;

					margin: 0.3rem;
					>p {
						font-weight: 900;
						text-align: center;
					}
				}

				div[name="divcentre-estudis"] {
					grid-column-start: 1;
					grid-column-end: 2;
				}		
			}	
		}

		.dada-estudis:nth-child(odd) {
			background-color: rgba(169, 172, 175, 0.212);
			border-radius: 20px;
		}

	`,
	style4: 
	`
	curriculum-vitae {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 5px 5px;

		font-family: Cambria, Garamond, Georgia, Times, 'Times New Roman', serif;

		overflow: auto;
		width: 100%;

		>div {
			padding: 0.5rem;
		}

		p {
			font-size: 1rem;
		}

		h2 {
			font-size: 1.5rem;
			text-transform: uppercase;
		}
	}



	div[name="divresum-profesional"] {
		grid-column-start: 1;
		grid-column-end: 4;
		grid-row-start: 2;
		grid-row-end: 2;

		background-color: rgba(64, 161, 206, 0.719);
	}

	div[name="divTitol"]{
		grid-column-start: 1;
		grid-column-end: span 4;

		display: grid;
		justify-content: end;

		border-top: 2px double rgb(23, 11, 128);
		border-bottom: 2px double rgb(23, 11, 128);
		padding: 20px 0 20px 0;

		background-color: rgb(74, 167, 211);
		border-radius: 16px;

		h1 {
			
			color:rgba(0, 0, 0, 0.74);
			font-weight: 900;
			text-decoration: underline;

			text-transform: uppercase;
			font-size: 2rem;
			
			

		}
	}
		
	div[name="dades-personals"] {
			
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 3;
		grid-row-end: 3;

		background-color: rgba(116, 200, 240, 0.719);
		border-radius: 16px;


		>div {
			text-align: center;
		}
	}

	div[name="divhabilitats"] {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 4;
		grid-row-end: 6;

		background-color: rgba(116, 200, 240, 0.719);
		border-radius: 16px;
	}
		
	div[name="dades-profesionals"] {
		grid-column-start: 2;
		grid-column-end: 4;
		grid-row-start: 3;
		grid-row-end: 5;

		background-color: rgba(137, 43, 226, 0.267);

		>div {
			border-bottom: 2px solid rgb(32, 31, 31);
		}
	}
		

	.dada-profesio {
		display: grid;/*treure'l dona un efecte interesant*/
		grid-template-columns: 1fr 2fr;

		padding: 10px;

		border-bottom: 2px solid black;

		div[name="divnom-profesional"] {
			background: rgba(85, 76, 76, 0.3);
			border-radius: 16px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(5px);
			border: 1px solid rgba(255, 253, 253, 0.700);

			margin: 0.3rem;
			>p {
			font-weight: 900;
			text-align: center;
			}
		}

		din[name="divdetalls-profesionals"] {
			grid-row-start: 1;
		}
	}

	div[name="dades-estudis"] {
		grid-column-start: 2;
		grid-column-end: 5;
		grid-row-start: 5;
		grid-row-end: 6;

		background-color: rgba(128, 255, 0, 0.226);

	}
		
	div[name="dada-estudis"] {
		>div {
			display: grid;
			grid-template-columns: 1fr 2fr;

			padding: 10px;
			
			border-bottom: 2px solid rgb(51, 49, 49);

			div[name="divdata-estudis"] {
				grid-column-start: 1;
				grid-column-end: 2;
			}

			div[name="divnom-estudis"] {
				grid-column-start: 2;
				grid-column-end: 3;

				background: rgba(85, 76, 76, 0.3);
				border-radius: 16px;
				box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(5px);
				border: 1px solid rgba(255, 253, 253, 0.700);

				margin: 0.3rem;
				>p {
					font-weight: 900;
					text-align: center;
				}
			}

			div[name="divcentre-estudis"] {
				grid-column-start: 1;
				grid-column-end: 2;
			}
		}
		
	}
	`,
	style5:
	`
		curriculum-vitae {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 5px 5px;

	font-family: Cambria, Garamond, Georgia, Times, 'Times New Roman', serif;

	overflow: auto;
	width: 100%;

	>div {
		padding: 0.5rem;
	}

	p {
		font-size: 1rem;
	}

	h2 {
		font-size: 1.5rem;
		text-transform: uppercase;
	}
}



div[name="divresum-profesional"] {
	grid-column-start: 2;
	grid-column-end: 4;
	grid-row-start: 2;

}

div[name="divTitol"]{
	grid-column-start: 1;
	grid-column-end: span 4;

	display: grid;
	justify-content: end;

	background-color: rgb(88, 40, 6);


	h1 {
		
		color: white;
		font-weight: 900;

		text-transform: uppercase;
		font-size: 2rem;	

	}
}
	
div[name="dades-personals"] {
		
	grid-column-start: 1;
	grid-column-end: 1;
	grid-row-start: 2;
	grid-row-end: 3;

	background-color: chocolate;

	margin-top: -5px;

	p {
		margin-left: 1rem;
	}

	h2 {
		display: none;
	}
}

div[name="divhabilitats"] {
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 3;

	background-color: chocolate;

	border-top: 2px solid white;

	margin-top: -2rem;

	p {
		margin-left: 1rem;
	}
}
	
div[name="dades-profesionals"] {
	grid-column-start: 2;
	grid-column-end: 4;
	grid-row-start: 3;

	>div {
		border-bottom: 2px solid rgb(32, 31, 31);
	}

	
}
	

.dada-profesio {
	display: grid;/*treure'l dona un efecte interesant*/
	grid-template-columns: 1fr 2fr;

	padding: 10px;

	border-bottom: 2px solid black;

	div[name="divnom-profesional"] {
		background: rgba(85, 76, 76, 0.3);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 253, 253, 0.700);

		margin: 0.3rem;
		>p {
		font-weight: 900;
		text-align: center;
		}
	}

	din[name="divdetalls-profesionals"] {
		grid-row-start: 1;
	}
}

.dada-profesio:nth-child(odd) {
	background-color: rgba(174, 176, 179, 0.212);
	border-radius: 20px;
}

div[name="dades-estudis"] {
	grid-column-start: 2;
	grid-column-end: 4;
	grid-row-start: 4;

	>div {
		border-bottom: 2px solid rgb(51, 49, 49);
	}
}
	
div[name="dada-estudis"] {
	>div {
		display: grid;
		grid-template-columns: 1fr 2fr;

		padding: 10px;

		div[name="divdata-estudis"] {
			grid-column-start: 1;
			grid-column-end: 2;
		}

		div[name="divnom-estudis"] {
			grid-column-start: 2;
			grid-column-end: 3;

			background: rgba(85, 76, 76, 0.3);
			border-radius: 16px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(5px);
			border: 1px solid rgba(255, 253, 253, 0.700);

			margin: 0.3rem;
			>p {
				font-weight: 900;
				text-align: center;
			}
		}

		div[name="divcentre-estudis"] {
			grid-column-start: 1;
			grid-column-end: 2;
		}
	}
	
}

.dada-estudis:nth-child(odd) {
	background-color: rgba(169, 172, 175, 0.212);
	border-radius: 20px;
}
	`,
	style6:
	`
	curriculum-vitae {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 5px 5px;

	font-family: Cambria, Garamond, Georgia, Times, 'Times New Roman', serif;

	overflow: auto;
	width: 100%;

	>div {
		padding: 0.5rem;
	}

	p {
		font-size: 1rem;
	}

	h2 {
		font-size: 1.5rem;
		text-transform: uppercase;
	}
}



div[name="divresum-profesional"] {
	grid-column-start: 3;
	grid-column-end: 4;
	grid-row-start: 3;

}

div[name="divTitol"]{
	grid-column-start: 2;
	grid-column-end: span 4;

	display: grid;
	justify-content: end;

	h1 {
		
		color:rgb(82, 11, 11);
		font-weight: 900;

		text-transform: uppercase;
		font-size: 2rem;	

	}
}
	
div[name="dades-personals"] {
		
	grid-column-start: 3;
	grid-column-end: 4;
	grid-row-start: 2;
	grid-row-end: 3;

	margin-top: -2rem;

	p {
		color:rgb(82, 11, 11);
	}

	h2 {
		display: none;
	}
}

div[name="divhabilitats"] {
	grid-column-start: 1;
	grid-column-end: 1;
	grid-row-start: 3;

	background: linear-gradient(rgb(131, 92, 7), rgb(218, 14, 14));

	h2, p {
		color: white;
	}

	h2 {
		text-decoration: underline;
	}
}
	
div[name="dades-profesionals"] {
	grid-column-start: 2;
	grid-column-end: 4;
	grid-row-start: 4;

}
	

.dada-profesio {

	padding: 10px;

	div[name="divnom-profesional"] {
		background: rgba(85, 76, 76, 0.3);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgb(82, 11, 11);
		backdrop-filter: blur(5px);
		border: 1px solid rgb(82, 11, 11);

		margin: 0.3rem;
		>p {
		font-weight: 900;
		text-align: center;
		}
	}

	din[name="divdetalls-profesionals"] {
		grid-row-start: 1;
	}
}

.dada-profesio:nth-child(odd) {
	background-color: rgba(174, 176, 179, 0.212);
	border-radius: 20px;
}

div[name="dades-estudis"] {
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 4;

	background: linear-gradient(rgb(218, 14, 14),rgb(100, 6, 6));
	margin-top: -1rem;

	>div {
		border-bottom: 2px solid rgb(255, 253, 253);
	}

	h2, p {
		color: white;
	}

	h2 {
		text-decoration: underline;
	}
}
	
div[name="dada-estudis"] {
	>div {
		display: grid;
		grid-template-columns: 1fr 2fr;

		padding: 10px;

		div[name="divdata-estudis"] {
			grid-column-start: 1;
			grid-column-end: 2;
		}

		div[name="divnom-estudis"] {
			grid-column-start: 2;
			grid-column-end: 3;

			background: rgba(85, 76, 76, 0.3);
			border-radius: 16px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(5px);
			border: 1px solid rgba(255, 253, 253, 0.700);

			margin: 0.3rem;
			>p {
				font-weight: 900;
				text-align: center;
			}
		}

		div[name="divcentre-estudis"] {
			grid-column-start: 1;
			grid-column-end: 2;
		}
	}
	
}

.dada-estudis:nth-child(odd) {
	background-color: rgba(169, 172, 175, 0.212);
	border-radius: 20px;
}
	`,
	
}
/* const formDadesPersonals = document.getElementById('dades-personals-form');
const formDadesEstudis = document.querySelectorAll('div[name="div-form-estudis"] form');
const formDadesProfesionals = document.querySelectorAll('div[name="div-form-profesio"] form'); */



export default { dadesPersonalsForm, dadesProfesionalsForm, dadesEstudisForm, obtenirDadesButton, divFormulariDades, textAreas, buttonCanviCSS, elementLinkCss, styles, buttonDescarregarPdf, buttonTabs, contingutTabs, tab1, tab2, tab3 };