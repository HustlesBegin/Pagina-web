function resetForRun() {
    functions = {
      // Pre-create the main function
      '#main#' : new AstNode('function', {name : '#main#'})
    };
  }
  
  // The whole program tree
  var finalprogram;
  // Function map
  var functions = {
    // Pre-create the main function
    '#main#' : new AstNode('function', {name : '#main#'})
  };
  // Execution stack
  var executionstack = new DataStructures.stack();
  executionstack.push({});

const lenguaje = require('./lenguaje.js');

const sourceCode = `
    procedimiento saludar(nombre) {
        dimelo "Hola, " + nombre + "!";
    }

    // Llamada a la función
    saludar("Juan");
`;

let output = lenguaje.parse(sourceCode);
console.log(output);