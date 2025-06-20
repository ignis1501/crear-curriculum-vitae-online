const sanititzarValor = (valor) => {

	//Escapar HTML
	valor = valor
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;")
	
	//eliminar etiquetes HTML
	valor = valor.replace(/<[^>]*>?/gm, '');

	return valor;
				
}

export default { sanititzarValor }