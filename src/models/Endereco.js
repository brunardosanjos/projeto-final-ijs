class Endereco {
	bairro;
	numero;
	cep;
	regiao;

	constructor(bairro, numero, cep, regiao) {
		this.bairro = bairro;
		this.numero = numero;
		this.cep = cep;
		this.regiao = regiao;

		if (typeof bairro !== 'string' || bairro.length === 0) {
			throw new Error('Bairro inválido');
		}
		if (typeof numero !== 'string' || numero.length === 0) {
			throw new Error('Número inválido');
		}
		if (typeof cep !== 'string' || cep.length === 0) {
			throw new Error('CEP inválido');
		}
		if (typeof regiao !== 'string' || regiao.length === 0) {
			throw new Error('Região inválida');
		}
	}
}

module.exports = { Endereco };
