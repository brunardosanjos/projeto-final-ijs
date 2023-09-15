const { Restaurantes } = require('./models/Restaurantes');
const { Endereco } = require('./models/Endereco');

//endereco
const gracas = new Endereco('Graças', 126, 5080060, 'Zona Norte');
console.log(gracas);

//restaurantes
const organico22 = new Restaurantes('organico22', gracas, 'italiana');
console.log(organico22);
