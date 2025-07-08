import { defineConfig } from 'vite';

 export default defineConfig({
      base: '/crear-curriculum-vitae-online/', // Reemplaza con el nombre de tu repositorio
	  build: {
		/*assetsDir: 'assets/styles',*/
		minify: false,//no minify per problemas amb les variables (revisar)
		cssCodeSplit: true,//no agrupar arxius css
	  },
	  css: {

	  }
    })