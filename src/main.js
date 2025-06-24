//import './style.css'
import './styles/style1.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

/* async function loadTemplate() {
  try {
    const response = await fetch('/index.html');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    document.getElementById('app').innerHTML = html;
  } catch (error) {
    console.error('Error al cargar el template:', error);
  }
}

loadTemplate(); */
console.log('main');

document.querySelector('#app').innerHTML = `
	<div name="formularis">
		<h2>Datos Personales</h2>
		<form id="dades-personals-form">
			<div name="divNom" class="dades-personals">
				<input type="text" name="nom" data-tipus="dades-personals" placeholder="Nombre completo"/>
			</div>
			<div name="divTelefon" class="dades-personals">
				<input type="text" name="teléfono" data-tipus="dades-personals" placeholder="teléfono"/>
			</div>
			<div name="divEmail" class="dades-personals">
				<input type="email" name="email" data-tipus="dades-personals" placeholder="email"/>
			</div>
			<div name="divLinkedin" class="dades-personals">
				<input type="text" name="linkedin" data-tipus="dades-personals" placeholder="linkedin"/><button name="eliminarInput">Eliminar</button>
			</div>
			<div>
				<button name="afegirDada" title="Añadir dato" >+</button>
			</div>
		</form>
			
		<h2>Datos Académicos</h2>
		<div id="div-form-estudis" name="div-form-estudis">			
			<form name="dades-estudis-form">
				<div name="divEstudis" class="dades-estudis">
					<input type="text" name="data-estudis" placeholder="Fecha estudios"/>
					<input type="text" name="nom-estudis" placeholder="Titulo estudios"/>
					<input type="text" name="centre-estudis" placeholder="Centro estudios"/>
				</div>
				<button name="eliminarSeccio">Eliminar</button>			
			</form>
			<div>
				<button name="afegirEstudis" title="Añadir Estudios">+</button>
			</div>
		</div>
			
			
		<h2>Datos Profesionales</h2>	
		<div id="div-form-profesio" name="div-form-profesio" class="dades-profesionals">
			<form id="dades-profesionals-form">
				<input type="text" name="data-profesional" placeholder="Fechas"/>
				<input type="text" name="nom-profesional" placeholder="Puesto"/>
				<input type="text" name="centre-profesional" placeholder="Empresa"/>
				<textarea name="detalls-profesional" placeholder="Detalles"></textarea>				
				<button name="eliminarSeccio">Eliminar</button>		
			</form>
			<div>
				<button name="afegirProfesio" title="Añadir Experiencia">+</button>
			</div>		
		</div>
		
		
		<div>
			<button name="obtenirDades">Obtenir dades</button>
		</div>

	</div>

	<div>
		<button name="mostrarOcultarForms">Mostrar/Ocultar entrada de datos</button>
	</div>

	<hr><hr>
	<div name="container">
		<h1 name="titol">Irene Martinez Vinaixa</h1>
		<div name="dades-personals">
			<div name="nom" class="dades-personals"><p>Irene Martinez Vinaixa</p></div>
			<div name="telefon" class="dades-personals"><p>666666666</p></div>
			<div name="email" class="dades-personals"><p>ivinaixa@gmail.com</p></div>
			<div name="linkedin" class="dades-personals"><p>@ivinaixa</p></div>
			<div name="linkedin" class="dades-personals"><p>@ivinaixa</p></div>
		</div>		

		<div name="dades-profesionals" class="dades-profesionals">
			<div name="profesio0" class="dada-profesio">
				<div name="divdata-profesional">
					<p name="data-profesional">Agosto 2020 - Actualmente</p>
				</div>
				<div name="divnom-profesional">
					<p name="nom-profesional">Gestor Backoffice</p>
				</div>
				<div name="divcentre-profesional">
					<p name="centre-profesional">Goldenline SL</p>
				</div>
				<div name="divdetalls-profesional">
					<p name="detalls-profesional">- Revisión de documentación.
					- Revisión de los expedientes de los clientes.
					- Atención a clientes de B2B y B2C.</p>
				</div>
			</div>	
			<div name="profesio1" class="dada-profesio">
				<div name="divdata-profesional">
					<p name="data-profesional">Agosto 2020 - Actualmente</p>
				</div>
				<div name="divnom-profesional">
					<p name="nom-profesional">Gestor Backoffice</p>
				</div>
				<div name="divcentre-profesional">
					<p name="centre-profesional">Goldenline SL</p>
				</div>
				<div name="divdetalls-profesional">
					<p name="detalls-profesional">- Revisión de documentación.
					- Revisión de los expedientes de los clientes.
					- Atención a clientes de B2B y B2C.</p>
				</div>
			</div>	
		</div>

		<div name="dades-estudis" class="dades-estudis>
			<div name="estudis0">
				<div name="divdata-estudis">
					<p name="data-estudis">Diciembre 2025</p>
				</div>
				<div name="divtitol-estudis">
					<p name="titol-estudis">Auxiliar administrativo</p>
				</div>
				<div name="divcentre-estudis">
					<p name="centre-estudis">IOC</p>
				</div>
			</div>	
		</div>
	</div>
	
`

//setupCounter(document.querySelector('#counter'))
