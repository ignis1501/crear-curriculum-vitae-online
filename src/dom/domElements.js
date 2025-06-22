const app = document.getElementById('app');
const dadesPersonalsForm = document.getElementById('dades-personals-form');
const dadesProfesionalsForm = document.getElementById('div-form-profesio');
const dadesEstudisForm = document.getElementById('div-form-estudis');
const obtenirDadesButton = document.querySelector('button[name="obtenirDades"]');
const mostrarOcultarFormsButton = document.querySelector('button[name="mostrarOcultarForms"]');
const divFormulariDades = document.querySelector('div[name="formularis"]');
/* const formDadesPersonals = document.getElementById('dades-personals-form');
const formDadesEstudis = document.querySelectorAll('div[name="div-form-estudis"] form');
const formDadesProfesionals = document.querySelectorAll('div[name="div-form-profesio"] form'); */



export default { dadesPersonalsForm, dadesProfesionalsForm, dadesEstudisForm, obtenirDadesButton, mostrarOcultarFormsButton, divFormulariDades };