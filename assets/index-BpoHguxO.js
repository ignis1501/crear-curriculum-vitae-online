(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/crear-curriculum-vitae-online/`,t={styles:{style1:`${e}styles/style1.css`,style2:`${e}styles/style2.css`,style3:`${e}styles/style3.css`,style4:`${e}styles/style4.css`,style5:`${e}styles/style5.css`,style6:`${e}styles/style6.css`,style7:`${e}styles/style7.css`,style8:`${e}styles/style8.css`,style9:`${e}styles/style9.css`,style10:`${e}styles/style10.css`,style11:`${e}styles/style11.css`,style12:`${e}styles/style12.css`,style13:`${e}styles/style13.css`,style14:`${e}styles/style14.css`,style15:`${e}styles/style15.css`,style16:`${e}styles/style16.css`,style16:`${e}styles/style16.css`,style17:`${e}styles/style17.css`,style18:`${e}styles/style18.css`,style19:`${e}styles/style19.css`,style20:`${e}styles/style20.css`,style21:`${e}styles/style21.css`,style22:`${e}styles/style22.css`,style23:`${e}styles/style23.css`,style24:`${e}styles/style24.css`,style25:`${e}styles/style25.css`,style26:`${e}styles/style26.css`,style27:`${e}styles/style27.css`,style28:`${e}styles/style28.css`,style29:`${e}styles/style29.css`,style30:`${e}styles/style30.css`,style31:`${e}styles/style31.css`,style32:`${e}styles/style32.css`,style33:`${e}styles/style33.css`,style34:`${e}styles/style34.css`,style35:`${e}styles/style35.css`,style36:`${e}styles/style36.css`,style37:`${e}styles/style37.css`,style38:`${e}styles/style38.css`,style39:`${e}styles/style39.css`,style40:`${e}styles/style40.css`,style41:`${e}styles/style41.css`,style42:`${e}styles/style42.css`,style43:`${e}styles/style43.css`,style44:`${e}styles/style44.css`,style45:`${e}styles/style45.css`,style46:`${e}styles/style46.css`,style47:`${e}styles/style47.css`,style48:`${e}styles/style48.css`,style49:`${e}styles/style49.css`,style50:`${e}styles/style50.css`,style51:`${e}styles/style51.css`,style52:`${e}styles/style52.css`,style53:`${e}styles/style53.css`,style54:`${e}styles/style54.css`,style55:`${e}styles/style55.css`}},n={estudis:{container:`[data-container="estudis"]`,template:`
			<form name="dades-estudis-form" class="form">
        <div class="dades-estudis">
          <iu-input name="data-estudis" placeholder="Fecha inicio - fin"></iu-input>
          <iu-input name="nom-estudis" placeholder="Título"></iu-input>
          <iu-input name="centre-estudis" placeholder="Centro"></iu-input>
        </div>
				<iu-button action="delete" data-delete="seccio">Eliminar</iu-button>
				<iu-button action="afegirEstudis" title="Añadir Estudios">+</iu-button>
      </form>
		`},profesio:{container:`[data-container="profesio"]`,template:`
      <form class="form">
        <iu-input name="data-profesional" placeholder="Fechas"></iu-input>
        <iu-input name="nom-profesional" placeholder="Puesto"></iu-input>
        <iu-input name="centre-profesional" placeholder="Empresa"></iu-input>
        <textarea name="detalls-profesional"></textarea>
				<iu-button action="delete" data-delete="seccio">Eliminar</iu-button>
				<iu-button action="afegirProfesio" title="Añadir Profesión">+</iu-button>
      </form>
    `}},r=e=>{let t=n[e];if(!t)return;let r=document.querySelector(t.container);if(!r)return;let i=r.querySelectorAll(`form`);i.length>0?i[i.length-1].insertAdjacentHTML(`afterend`,t.template):r.insertAdjacentHTML(`afterbegin`,t.template)},i=()=>{document.querySelector(`#dades-personals-dinamics`).insertAdjacentHTML(`beforeend`,`
		<div class="dades-personals dinamic">
			<iu-input placeholder="Añade un dato personalizado" name="dada-personal"></iu-input>
			<iu-button type="button" action="delete" data-delete="input">Eliminar</iu-button>
		</div>
	`)},a=e=>{e.preventDefault();let t=e.target.dataset.delete;if(!t)return;let n=e.target.closest({input:`.dades-personals`,seccio:`form`}[t]);n&&n.remove()};function o(){let e=[];return document.querySelectorAll(`.dades-personals.fixe iu-input input`).forEach(t=>{e.push({name:t.name,value:t.value})}),document.querySelectorAll(`.dades-personals.dinamic iu-input input`).forEach(t=>{e.push({name:`dada-personal`,value:t.value})}),e}function s(){let e=document.querySelector(`#resum-profesional`),t=``,n=e.querySelector(`div iu-textarea textarea`);return n&&(t=n.value),t}function c(){let e=document.querySelector(`#habilitats-profesionals`).querySelector(`iu-textarea textarea`);return e?e.value:``}function l(){let e=document.querySelectorAll(`[data-container="estudis"] form`),t=[];return e.forEach(e=>{let n={};e.querySelectorAll(`iu-input input`).forEach(e=>{n[e.name]=e.value}),t.push(n)}),t}function u(){let e=document.querySelectorAll(`[data-container="profesio"] form`),t=[];return e.forEach(e=>{let n={};e.querySelectorAll(`iu-input input`).forEach(e=>{n[e.name]=e.value});let r=e.querySelector(`textarea`);r&&(n[r.name]=r.value),t.push(n)}),t}function d(){let e={personals:o(),presentacio:s(),habilitats:c(),estudis:l(),profesio:u()};localStorage.setItem(`cv-data`,JSON.stringify(e))}function f(e){let t=document.querySelector(`#dades-personals-form`),n=document.querySelector(`#dades-personals-dinamics`);e.forEach(e=>{let r=t.querySelector(`.dades-personals.fixe iu-input[name="${e.name}"] input`);if(r){r.value=e.value;return}i();let a=n.querySelector(`.dades-personals.dinamic:last-child`);if(!a)return;let o=a.querySelector(`iu-input input`);o&&(o.value=e.value)})}function p(e){let t=document.querySelector(`#resum-profesional`).querySelector(`div iu-textarea textarea`);t.value=e}function m(e){let t=document.querySelector(`#habilitats-profesionals`).querySelector(`iu-textarea textarea`);t&&(t.value=e)}function h(e){let t=document.querySelector(`[data-container="estudis"]`);if(t.innerHTML=``,!e||e.length===0){r(`estudis`);return}e.forEach(e=>{r(`estudis`);let n=t.querySelector(`form:last-child`);n&&n.querySelectorAll(`iu-input input`).forEach(t=>{t.value=e[t.name]||``})})}function g(e){let t=document.querySelector(`[data-container="profesio"]`);if(t.innerHTML=``,!e||e.length===0){r(`profesio`);return}e.forEach(e=>{r(`profesio`);let n=t.querySelector(`form:last-child`);n&&(n.querySelectorAll(`iu-input input`).forEach(t=>{t.value=e[t.name]||``}),n.querySelectorAll(`textarea`).forEach(t=>{t.value=e[t.name]||``}))})}function _(){let e=localStorage.getItem(`cv-data`);if(!e)return;let t=JSON.parse(e);t.personals&&f(t.personals),t.presentacio&&p(t.presentacio),t.habilitats&&m(t.habilitats),t.estudis&&h(t.estudis),t.profesio&&g(t.profesio)}window.addEventListener(`DOMContentLoaded`,()=>{setTimeout(()=>{_()})});function v(){localStorage.removeItem(`cv-data`),location.reload()}document.addEventListener(`click`,e=>{let{dataset:n}=e.target;if(n.action)switch(n.action){case`print`:window.print();break;default:break}if(n.css){let e=document.querySelector(`head link[title="css-dinamic"]`),r=t.styles[n.css];e&&r?e.href=r:console.warn(`CSS no encontrado:`,n.css)}n.tab&&E(n.tab)}),document.addEventListener(`iu-button-click`,e=>{switch(e.detail.action){case`afegirDada`:i(e);break;case`afegirEstudis`:r(`estudis`);break;case`afegirProfesio`:r(`profesio`);break;case`delete`:a(e);break;case`obtenirDades`:C();break;case`borrarDades`:v();break}}),document.querySelector(`#galeria`).addEventListener(`plantilla-seleccionada`,e=>{let t=e.detail.plantilla;y(t),C(),E(`tab4`)}),document.addEventListener(`input`,e=>{e.target.tagName===`TEXTAREA`&&(e.target.style.height=`auto`,e.target.style.height=e.target.scrollHeight+`px`)});var y=e=>{let t=document.querySelector(`head link[title="css-dinamic"]`);t&&e.urlCss?t.href=e.urlCss:console.warn(`CSS no encontrado:`,e)},b=e=>{let t=new FormData(e),n={};for(let[e,r]of t.entries()){if(!r||r===``)continue;let t=S(r);e===`habilitats-profesionals`&&(t=t.split(`<br>`)),n[e]=t}return n},x=e=>[...document.querySelectorAll(`${e} form`)].map(b).filter(e=>Object.keys(e).length>0),S=e=>(e=e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`),e=e.replace(/<[^>]*>?/gm,``),e=e.replace(/\n/g,`<br>`),e),C=()=>{let e={dadesPersonals:b(document.getElementById(`dades-personals-form`)),dadesEstudis:x(n.estudis.container),dadesProfesionals:x(n.profesio.container),resumProfesional:b(document.getElementById(`resum-profesional`)),habilitats:b(document.getElementById(`habilitats-profesionals`))};w(`curriculum-vitae`),T(`curriculum-vitae`,e),d(),E(`tab3`)},w=e=>{if(!document.querySelector(e)){let t=document.createElement(e);document.getElementById(`container`).appendChild(t)}},T=(e,t)=>{let n=document.querySelector(e),r={"dades-personals":{nomEvent:`enviar-${e}`,missatge:`Dades personals`,dades:t},"dades-estudis":{nomEvent:`enviar-${e}`,missatge:`Dades estudis`,dades:t},"dades-profesionals":{nomEvent:`enviar-${e}`,missatge:`Dades Profesionals`,dades:t},"curriculum-vitae":{nomEvent:`enviar-${e}`,missatge:`Dades Curriculum`,dades:t}};n.dispatchEvent(new CustomEvent(r[e].nomEvent,{detail:{missatge:r[e].missatge,dades:r[e].dades},bubbles:!0,composed:!0}))},E=e=>{document.querySelectorAll(`[data-section]`).forEach(e=>e.classList.add(`invisible`));let t=document.querySelector(`[data-section="${e}"`);t&&t.classList.remove(`invisible`)},D=class extends HTMLElement{constructor(){super()}connectedCallback(){this.addEventListener(`enviar-curriculum-vitae`,e=>{let t=e.detail.dades,n=Object.entries(t.dadesPersonals).length===0?``:this.dadesPersonalsHtml(t.dadesPersonals),r=Object.entries(t.dadesEstudis).length===0?``:this.dadesEstudisHtml(t.dadesEstudis),i=Object.entries(t.dadesProfesionals).length===0?``:this.dadesProfesionalsHtml(t.dadesProfesionals),a=Object.entries(t.resumProfesional).length===0?``:this.resumProfesionalHtml(t.resumProfesional),o=Object.entries(t.habilitats).length===0?``:this.habilitatsHtml(t.habilitats);this.renderIncremental({dadesPersonals:n,dadesEstudis:r,dadesProfesionals:i,dadesResumProfesional:a,dadesHabilitats:o})})}renderIncremental({dadesPersonals:e,dadesEstudis:t,dadesProfesionals:n,dadesResumProfesional:r,dadesHabilitats:i}){e&&(this.updateSection(`divTitol`,e.titol),this.updateSection(`dades-personals`,e.personals)),t&&this.updateSection(`dades-estudis`,t),n&&this.updateSection(`dades-profesionals`,n),r&&this.updateSection(`resum-profesional`,r),i&&this.updateSection(`divhabilitats`,i)}updateSection(e,t){let n=this.querySelector(`[name="${e}"]`);n?n.innerHTML=t:this.insertAdjacentHTML(`beforeend`,t)}dadesPersonalsHtml(e){let t=``,n=``;for(let[r,i]of Object.entries(e))r===`nom`?n=i:t+=`<div name=div${r}><p name=${r}>${i}</p></div>`;return{titol:`<div name="divTitol"><h1 name="nom">${n}</h1></div>`,personals:`
			<div name="dades-personals">
				<h2>Contacto</h2>
				<div>${t}</div>
			</div>
		`}}resumProfesionalHtml(e){let t=``;for(let[n,r]of Object.entries(e))n===`nom`?nom=r:t+=`<div name=div${n}><p name=${n}>${r}</p></div>`;return`${t}`}habilitatsHtml(e){let t=``;return e[`habilitats-profesionals`].map(e=>{t+=`<div name=divhabilitats-profesionals><p name=habilitat-${e}>${e}</p></div>`}),`
			<div name="divhabilitats">
				<h2>Habilidades</h2>
				${t}
			</div>
		`}dadesEstudisHtml(e){let t=``;for(let[n,r]of Object.entries(e)){t+=`<div name=estudis${n} class="dada-estudis">`;for(let[e,n]of Object.entries(r))t+=`<div name=div${e}><p name=${e}>${n}</p></div>`;t+=`</div>`}return`
			<div name="dades-estudis">
				<h2>Formación Académica</h2>
				<div name="dada-estudis">
					${t}
				</div>
			</div>
		`}dadesProfesionalsHtml(e){let t=``;for(let[n,r]of Object.entries(e)){t+=`<div name=profesio${n} class="dada-profesio">`;for(let[e,n]of Object.entries(r))t+=`<div name=div${e}><p name=${e}>${n}</p></div>`;t+=`</div>`}return`
			<div name="dades-profesionals">
				<h2>Experiencia Laboral</h2>
				<div name="dada-profesio">
					${t}
				</div>
			</div>
		`}};customElements.define(`curriculum-vitae`,D);var O=class extends HTMLElement{constructor(){super(),this.button=document.createElement(`button`),this.button.type=`button`}connectedCallback(){let e=this.textContent.trim();this.innerHTML=``,this.button.textContent=e,this.appendChild(this.button),this.button.addEventListener(`click`,()=>{let e=this.getAttribute(`action`);this.dispatchEvent(new CustomEvent(`iu-button-click`,{detail:{action:e},bubbles:!0,composer:!0}))})}disconnectedCallback(){this.button.removeEventListener(`click`,this)}};customElements.define(`iu-button`,O);var k=class extends HTMLElement{constructor(){super(),this.input=document.createElement(`input`)}connectedCallback(){let e=this.getAttribute(`name`)||``,t=this.getAttribute(`placeholder`)||``,n=this.getAttribute(`type`)||`text`;this.input.name=e,this.input.type=n,this.input.placeholder=t;for(let e of this.getAttributeNames())e!==`name`&&e!==`placeholder`&&e!==`type`&&this.input.setAttribute(e,this.getAttribute(e));[...this.childNodes].forEach(e=>{e.nodeType===Node.TEXT_NODE&&e.remove()}),this.querySelector(`input`)||this.appendChild(this.input)}};customElements.define(`iu-input`,k);var A=class extends HTMLElement{constructor(){super(),this.textarea=document.createElement(`textarea`)}connectedCallback(){let e=this.getAttribute(`name`)||``,t=this.getAttribute(`placeholder`)||``;this.textarea.name=e,this.textarea.placeholder=t,this.appendChild(this.textarea)}};customElements.define(`iu-textarea`,A);var j=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          padding: 20px;
          font-family: "MS Sans Serif", sans-serif;
        }

        /* --- Barra de título Windows 98 --- */
        .win98-titlebar {
          background: #000080;
          color: white;
          padding: 4px 6px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 6px;
          border: 2px solid;
          border-color: #fff #000040 #000040 #fff;
          margin-bottom: 10px;
        }

        .win98-titlebar .icon {
          width: 16px;
          height: 16px;
          image-rendering: pixelated;
        }

        /* --- Controles --- */
        .controls {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }

        button {
          background: #c0c0c0;
          border: 2px solid;
          border-color: #fff #404040 #404040 #fff;
          padding: 4px 10px;
          cursor: pointer;
        }

        button.active {
          background: #000080;
          color: white;
          border-color: #fff #000040 #000040 #fff;
        }

        button:active {
          border-color: #404040 #fff #fff #404040;
        }

        select {
          background: #c0c0c0;
          border: 2px solid;
          border-color: #fff #404040 #404040 #fff;
          padding: 3px;
          cursor: pointer;
        }

        /* --- Carrusel Windows 98 --- */
        #carousel {
          background: #d4d0c8;
          border: 3px solid;
          border-color: #fff #404040 #404040 #fff;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          position: relative;
          min-height: 300px;
        }

        #carousel-img {
          max-width: 90%;
          max-height: 70vh;
          border: 2px solid #808080;
        }

        .arrow {
          background: #c0c0c0;
          border: 2px solid;
          border-color: #fff #404040 #404040 #fff;
          padding: 10px;
          cursor: pointer;
          font-size: 22px;
          user-select: none;
        }

        .arrow:active {
          border-color: #404040 #fff #fff #404040;
        }

        /* En móvil ocultamos flechas */
        @media (hover: none) {
          .arrow {
            display: none;
          }
        }

        /* En PC, priorizamos anchura grande */
        @media (min-width: 900px) {
          #carousel-img {
            width: 70vw;       /* ancho grande */
            height: auto;      /* que crezca en vertical */
            max-height: none;  /* sin límite de altura */
          }
        }

        @media (min-width: 1400px) {
          #carousel-img {
            width: 60vw;
          }
        }


      </style>

      <div class="win98-titlebar">
        <span>Selector de Plantillas</span>
      </div>

      <div class="controls">
        <button id="btn-todas">Mostrar todas</button>
        <select id="select-cat"></select>
      </div>

      <div id="carousel">
        <button class="arrow left">◀</button>
        <img id="carousel-img">
        <button class="arrow right">▶</button>
      </div>
    `}connectedCallback(){this.init()}async init(){this.plantillas=await(await fetch(`/crear-curriculum-vitae-online/data/plantilles.json`)).json(),this.currentIndex=0,this.viewerList=this.plantillas,this.select=this.shadowRoot.querySelector(`#select-cat`),this.btnTodas=this.shadowRoot.querySelector(`#btn-todas`);let e=document.createElement(`option`);e.value=``,e.textContent=`— Categorías —`,this.select.appendChild(e),[...new Set(this.plantillas.map(e=>e.categoria))].forEach(e=>{let t=document.createElement(`option`);t.value=e,t.textContent=e,this.select.appendChild(t)}),this.btnTodas.addEventListener(`click`,()=>{this.btnTodas.classList.add(`active`),this.select.value=``,this.viewerList=this.plantillas,this.currentIndex=0,this.render()}),this.select.addEventListener(`change`,()=>{this.btnTodas.classList.remove(`active`);let e=this.select.value;this.viewerList=this.plantillas.filter(t=>t.categoria===e),this.currentIndex=0,this.render()}),this.shadowRoot.querySelector(`.arrow.left`).addEventListener(`click`,()=>this.move(-1)),this.shadowRoot.querySelector(`.arrow.right`).addEventListener(`click`,()=>this.move(1)),this.enableSwipe(),this.shadowRoot.querySelector(`#carousel-img`).addEventListener(`click`,()=>this.seleccionarActual()),this.btnTodas.classList.add(`active`),this.render()}seleccionarActual(){let e=this.viewerList[this.currentIndex];e&&this.dispatchEvent(new CustomEvent(`plantilla-seleccionada`,{detail:{plantilla:e},bubbles:!0,composed:!0}))}move(e){this.currentIndex+=e,this.currentIndex<0&&(this.currentIndex=this.viewerList.length-1),this.currentIndex>=this.viewerList.length&&(this.currentIndex=0),this.render()}enableSwipe(){let e=this.shadowRoot.querySelector(`#carousel`),t=0;e.addEventListener(`touchstart`,e=>{t=e.touches[0].clientX}),e.addEventListener(`touchend`,e=>{let n=e.changedTouches[0].clientX-t;Math.abs(n)>50&&(n<0?this.move(1):this.move(-1))})}render(){let e=this.shadowRoot.querySelector(`#carousel-img`);if(this.viewerList.length===0){e.src=``;return}e.src=`/crear-curriculum-vitae-online/previews/style${this.viewerList[this.currentIndex].id}.webp`}};customElements.define(`plantilla-selector`,j);