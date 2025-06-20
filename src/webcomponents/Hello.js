class Hello extends HTMLElement {
    constructor() {
        super();
        /**TUTO crea un Shadow DOM per a l'element, això encapsula el css, els style no afecten a elements fora del Shadow ni es veuen afectats per CSS externs */
        this.attachShadow({ mode: "open" });



    }


    connectedCallback() {
        this.render();

    }

    render() {
        this.shadowRoot.innerHTML = /* html */`
        
        <style>
			h1 {
				font-size: 2rem;
			}
		</style>
        <h1>Hello friend</h1>
      `;
    }

}

customElements.define("hello-wc", Hello);