const { Restaurantes } = require('./models/Restaurantes');
const { Endereco } = require('./models/Endereco');
const { Usuario } = require('./models/Usuario');

//endereco
const gracas = new Endereco('Graças', 126, 5080060, 'Zona Norte');
console.log(gracas);

//restaurantes
const organico22 = new Restaurantes('organico22', gracas, 'italiana');
console.log(organico22);

//usuario
const bruna = new Usuario('Bruna', 'bruna@gmail.com');
console.log(bruna);
