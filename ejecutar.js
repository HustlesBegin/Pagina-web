const lenguaje = require('./lenguaje.js');

const sourceCode = `
    procedimiento saludar(nombre) {
        dimelo "Hola, " + nombre + "!";
    }

    // Llamada a la función
    saludar("Juan");
`;

let output = lenguaje.parse('dimelo "Hola";');
console.log(output);