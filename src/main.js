//import './style.css'
import './styles/style1.css'
import './styles/styleForms.css'
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
				<input type="text" name="teléfono" data-tipus="dades-personals" placeholder="Teléfono de contacto"/>
			</div>
			<div name="divEmail" class="dades-personals">
				<input type="email" name="email" data-tipus="dades-personals" placeholder="Email de contacto"/>
			</div>
			<div name="divLinkedin" class="dades-personals">
				<input type="text" name="linkedin" data-tipus="dades-personals" placeholder="Perfil Linkedin"/><button name="eliminarInput">Eliminar</button>
			</div>
			<div>
				<button name="afegirDada" title="Añadir dato" >+</button>
			</div>
		</form>

		<h2>Presentación / Resumen profesional</h2>
		<form id="resum-profesional">
			<div name="resum-profesional">
				<textarea name="resum-profesional" placeholder="En esta sección puedes llevar a cabo un pequeño resumen de tu trayectoría profesional o realizar una presentación personalizada para el puesto al que quieres aspirar."></textarea>	
			</div>
		</form>

		<h2>Habilidades / Aptitudes</h2>
		<form id="habilitats-profesionals">
			<div name="habilitats-profesionals">
				<textarea name="habilitats-profesionals" placeholder="En esta sección tienes la opción de enumerar aquellas habilidades que posees y te pueden ayudar a destacar en el puesto que persigues."></textarea>	
			</div>			
		</form>
		<p>* Separa las habilidades por saltos de línea (ENTER).</p>
			
		<h2>Datos Académicos</h2>
		<div id="div-form-estudis" name="div-form-estudis">			
			<form name="dades-estudis-form">
				<div name="divEstudis" class="dades-estudis">
					<input type="text" name="data-estudis" placeholder="Fecha inicio - Fecha fin"/>
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
				<input type="text" name="data-profesional" placeholder="Fechas inicio - Fecha fin"/>
				<input type="text" name="nom-profesional" placeholder="Puesto"/>
				<input type="text" name="centre-profesional" placeholder="Empresa"/>
				<textarea name="detalls-profesional" placeholder="En esta sección puedes añadir tantos detalles cómo creas convenientes sobre tus funciones, cometidos o las habilidades que has tenido que usar en este puesto de trabajo"></textarea>				
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
	<div id="container" name="container"></div>
	
	
`

//setupCounter(document.querySelector('#counter'))
