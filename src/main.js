/* import './styles/style1.css'
import './styles/styleForms.css' */


console.log('main');

document.querySelector('#app').innerHTML = `
	<h1>Crea tu Currículum Personalizado y Optimizado para ATS: Mejora tus Candidaturas para los Mejores Trabajos</h1>

	<div class="tab-container">
		<button class="tab" data-tab="tab1">Información y Consejos</button>
		<button class="tab" data-tab="tab2">Instroducción de datos</button>
		<button class="tab" data-tab="tab3">Selección de plantilla</button>
	</div>

	<div name="tab1" class="contingut-tab">
		<h2>
            Crea tu <strong>currículum</strong>
        </h2>
        <p>
            En el entorno tan competitivo que nos encontramos, tener un currículum que resalte marca la diferencia entre
            conseguir la entrevista o ser ignorado. En nuestra platagorma de creación de <strong>currículums online</strong>, te ayudamos
            a personalizar y optimizar tu currículum para que se adapte perfectamente a las expectativas de los
            reclutadores y los sistemas de seguimiento de candidatos (ATS).
        </p>
        <h3>Creación de Currículum Online: La Solución Rápida y Eficaz</h3>
        <p>
            Nuestra plataforma de creación de currículum online te ofrece todas las herramientas necesarias para diseñas
            un currículum atractivo, <strong>profesional y optimizado para los ATS</strong>. Puedes crear un currículum que aumente tus
            probabilidades de ser seleccionado.
        </p>
        <h4>¿Cómo Funciona?</h4>
        <ol>
            <li>
                <strong>Rellena tu información:</strong> Agrega tus datos personales, experiencia laboral, habilidades y
                logros. Los botones <button>+</button> te permiten añadir apartados dentro de una sección.
            </li>
            <li>
                <strong>Personaliza el Currículum:</strong> Ajusta tu currículum a las especificaciones del puesto al
                que estás optando.
            </li>
            <li>
                <strong>Optimiza para ATS:</strong> Nuestra herramienta te facilita las secciones para que puedas
                personalizar tu información y ajustarla al puesto.
            </li>
            <li>
                <strong>Cargar datos:</strong> Una vez estén todos los datos rellenados, pulsa en
                <button>Actualizar Datos</button>
            </li>
            <li>
                <strong>Selecciona tu plantilla:</strong> Y ya sólo te queda seleccionar que aspecto quieres que tenga
                tu curriculum, selecciona la plantilla e imprime los que más te gusten con toda libertad.
            </li>
        </ol>
        <h4>¿Por Qué Elegirnos?</h4>
        <ul>
            <li>Plantillas modernas y atractivas que destacan entre los reclutadores.</li>
            <li>
                Facilidad de uso: Diseñado para que puedas crear tu currículum en minutos, incluso si no tienes
                experiencia previa.
            </li>
        </ul>
        <h3>¿Por Qué Es Crucial Personalizar Tu Currículum?</h3>
        <p>
            Cada puesto de trabajo es único, y para tener las máximas opciones tu currículum debe estar personalizado y
            enfocado para cada puesto. <strong>Personalizar tu currículum</strong> no sólo te permite resaltar tus habilidades y
            experiencia más relevantes, sino que te permite adaptarlo a las especificaciones del puesto. Esto aumenta
            significativamente tus posibilidades de captar la atención de los reclutadores.
        </p>
        <h4>Ventajas de un Currículum Personalizado:</h4>
        <ul>
            <li>
                <b>Enfoque en lo que importa:</b> Destacar tus habilidades y experiencia relevantes según las
                necesidades del empleador.
            </li>
            <li>
                <b>Aumento de la visibilidad:</b> Un currículum adaptado tiene más posibilidades de pasar los filtros
                automáticos de los ATS.
            </li>
            <li>
                <b>Mayor posibilidad de obtener entrevistas:</b> Un currículum que resuene con los reclutadores tiene
                más probabilidades de ser notado.
            </li>
        </ul>
        <h3>Optimiza tu Currículum para los ATS: El Secreto para Superar la Criba Inicial</h3>
        <p>
            Los <strong>sistemas de seguimiento de candidatos (ATS)</strong> son herramientas utilizadas por las empresas para gestionar
            las solicitudes de empleo. Estos programas escanean los currículums en busca de palabras clave, habilidades
            y experiencias relevantes para determinar si tu perfil es adecuado para el puesto. Un currículum mal
            optimizado puede ser descartado automáticamente, incluso si eres un candidato ideal.
        </p>
        <h4>¿Cómo Optimizar tu Currículum para los ATS?</h4>
        <ol>
            <li>
                <strong>Usa palabras clave relevantes</strong>: Los ATS buscan términos específicos relacionados con el
                trabajo, cómo habilidades, herramientas y software. Personaliza tu currículum para incluir las mejores
                palabras clave para el puesto al que postulas.
            </li>
            <li>
                <strong>Fomato limpio y sencillo</strong>: Evita imágenes, tablas o formatos complicados que puedan
                dificultar la lectura del ATS, "menos es más".
            </li>
            <li>
                <strong>Usa un lenguaje claro</strong>: Asegúrate que tu currículum esté escrito de manera clara y
                coherente, utilizando los términos exactos que se encuentran en la descripción del puesto.
            </li>
            <li>
                <strong>Enfócate en logros medibles</strong>: Los ATS también valoran los resultados cuantificables.
                Asegúrate de destacar los logros más relevantes con cifras y estadísticas.
            </li>
        </ol>

        <h3>Aumenta tus Posibilidades de Éxito con un Currículum Perfecto</h3>
        <p>
            No dejes que tu currículum sea ignorado por los reclutadores. Con una personalización adecuada y una
            optimización para ATS, puedes asegurarte que tu perfil sea visible y destacado. Utiliza nuestra <strong>herramienta
            de creación de currículums online</strong> y da el siguiente paso hacia tu próximo trabajo.
        </p>
        <h4>Comienza Ahora y Eleva tu Carrera Profesional</h4>
        <p>
            No esperes más, crea tu currículum online hoy mismo y prepárate para aplicar a los trabajos de tus sueños.
            ¡Es hora de que tu currículum trabaje para tí!
        </p>
	</div>
	<div name="tab2" class="contingut-tab invisible">
		<div name="formularis">
			<div class="div-form-container boder-win-98">
				<h2>Datos Personales del <strong>curriculum</strong></h2>
				<form id="dades-personals-form">
					<div name="divNom" class="dades-personals">
						<input type="text" name="nom" data-tipus="dades-personals" placeholder="Nombre completo" />
					</div>
					<div name="divTelefon" class="dades-personals">
						<input type="text" name="teléfono" data-tipus="dades-personals"
							placeholder="Teléfono de contacto" />
					</div>
					<div name="divEmail" class="dades-personals">
						<input type="email" name="email" data-tipus="dades-personals" placeholder="Email de contacto" />
					</div>
					<div>
						<button name="afegirDada" title="Añadir dato">+</button>
					</div>
				</form>
			</div>

			<div class="div-form-container boder-win-98">
				<h2>Presentación / Resumen profesional para el <strong>CV</strong></h2>
				<form id="resum-profesional">
					<div name="resum-profesional">
						<textarea name="resum-profesional"
							placeholder="En esta sección puedes llevar a cabo un pequeño resumen de tu trayectoría profesional o realizar una presentación personalizada para el puesto al que quieres aspirar."></textarea>
					</div>
				</form>
			</div>

			<div class="div-form-container boder-win-98">
				<h2>Habilidades / Aptitudes que quieras destacar en tu <strong>Curriculum Vitae</strong></h2>
				<form id="habilitats-profesionals">
					<div name="habilitats-profesionals">
						<textarea name="habilitats-profesionals"
							placeholder="En esta sección tienes la opción de enumerar aquellas habilidades que posees y te pueden ayudar a destacar en el puesto que persigues."></textarea>
					</div>
				</form>
				<p>* Separa las habilidades por saltos de línea (ENTER).</p>
			</div>

			<div class="div-form-container boder-win-98">
				<h2>Datos Académicos para el <strong>CV</strong></h2>
				<div id="div-form-estudis" name="div-form-estudis">
					<form name="dades-estudis-form">
						<div name="divEstudis" class="dades-estudis">
							<input type="text" name="data-estudis" placeholder="Fecha inicio - Fecha fin" />
							<input type="text" name="nom-estudis" placeholder="Titulo estudios" />
							<input type="text" name="centre-estudis" placeholder="Centro estudios" />
						</div>
						<button name="eliminarSeccio">Eliminar</button>
					</form>
					<div>
						<button name="afegirEstudis" title="Añadir Estudios">+</button>
					</div>
				</div>
			</div>


			<div class="div-form-container boder-win-98">
				<h2>Datos Profesionales más destacados para tu Curriculum</h2>
				<div id="div-form-profesio" name="div-form-profesio" class="dades-profesionals">
					<form id="dades-profesionals-form">
						<input type="text" name="data-profesional" placeholder="Fechas inicio - Fecha fin" />
						<input type="text" name="nom-profesional" placeholder="Puesto" />
						<input type="text" name="centre-profesional" placeholder="Empresa" />
						<textarea name="detalls-profesional"
							placeholder="En esta sección puedes añadir tantos detalles cómo creas convenientes sobre tus funciones, cometidos o las habilidades que has tenido que usar en este puesto de trabajo"></textarea>
						<button name="eliminarSeccio">Eliminar</button>
					</form>
					<div>
						<button name="afegirProfesio" title="Añadir Experiencia">+</button>
					</div>
				</div>
			</div>


			<div>
				<button name="obtenirDades">Actualizar Datos</button>
			</div>

		</div>		
		
	</div>
	<div name="tab3" class="contingut-tab invisible">
		<div name="divBotonsEstils">
			<h3>Selecciona el estilo de Curriculum</h3>
			<div>
				<button name="style1" data-tipus="canviCSS">1</button>
				<button name="style2" data-tipus="canviCSS">2</button>
				<button name="style3" data-tipus="canviCSS">3</button>
				<button name="style4" data-tipus="canviCSS">4</button>
				<button name="style5" data-tipus="canviCSS">5</button>
				<button name="style6" data-tipus="canviCSS">6</button>
			</div>
		</div>
		<div id="container" name="container"></div>
		<div name="divDescargarPDF">
			<button>Descargar PDF</button>
		</div>
	</div>
	
	
`

//setupCounter(document.querySelector('#counter'))
