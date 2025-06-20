//import './style.css'
import './stylePerDefecte.css'
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


document.querySelector('#app').innerHTML = `
  <div name="formularis">
			<form id="dades-personals-form">
			<div name="divNom" class="dades-personals">
				<input type="text" name="nombre" data-tipus="dades-personals" placeholder="Nombre completo"/>
			</div>
			<div name="divTelefon" class="dades-personals">
				<input type="text" name="teléfono" data-tipus="dades-personals" placeholder="teléfono"/>
			</div>
			<div name="divEmail" class="dades-personals">
				<input type="email" name="email" data-tipus="dades-personals" placeholder="email"/>
			</div>
			<div name="divLinkedin" class="dades-personals">
				<input type="text" name="linkedin" data-tipus="dades-personals" placeholder="linkedin"/><button onClick="eliminarElementAnterior(event, true)">Eliminar</button>
			</div>
			<div>
				<button title="Añadir dato" onClick="afegirDadaPersonal(event)">+</button>
				<button title="Eliminar dato" onClick="quitarDadaPersonal(event)">-</button>
			</div>
		</form>
		
		<div name="div-form-estudis">
			<form name="dades-estudis-form">
				<div name="divEstudis" class="dades-estudis">
					<input name="data-estudis" placeholder="Fecha estudios"/>
					<input name="nom-estudis" placeholder="Titulo estudios"/>
					<input name="centre-estudis" placeholder="Centro estudios"/>
				</div>
				<button onClick="eliminarElementAnterior(event, false)">Eliminar</button>			
			</form>
			<div>
				<button title="Añadir Estudios"  onClick="afegirEstudis(event)">+</button>
				<button title="Eliminar Estudios"  onClick="quitarEstudis(event)">-</button>
			</div>
		</div>
		
		
		
		<div name="div-form-profesio" class="dades-profesionals">
			<form id="dades-profesionals-form">
				<input type="text" name="data-profesional" placeholder="Fechas"/>
				<input type="text" name="nom-profesional" placeholder="Puesto"/>
				<input type="text" name="centre-profesional" placeholder="Empresa"/>
				<textarea name="detalls-profesional" placeholder="Detalles"></textarea>
				<ul>
				</ul>
				<button onClick="crearLista(event)">Crear lista</button>
				<button onClick="eliminarElementAnterior(event, false)">Eliminar</button>			
			</form>
			<div>
				<button title="Añadir Experiencia"  onClick="afegirProfesio(event)">+</button>
				<button title="Eliminar Experiencia"  onClick="quitarProfesio(event)">-</button>
			</div>		
		</div>
		
		
		<div>
			<button onClick="obtenirDades()">Obtenir dades</button>
		</div>

	</div>
	<div>
		<button onClick="switchFormulariDades()">Mostrar/Ocultar entrada de datos</button>
	</div>
	<script src="index.js"></script>
	<script type="module" src="./test/javascript.test.js"></script>
	<script src="./webcomponents/DadesPersonals.js"></script>
`

//setupCounter(document.querySelector('#counter'))
