const { Endereco } = require('./Endereco');

class Restaurantes {
	nome;
	inclusivo;
	culinaria;
	endereco;
	static createdRestaurantes = [];

	constructor(nome, endereco, culinaria) {
		this.nome = nome;
		this.inclusivo = true;
		this.endereco = endereco;
		this.culinaria = culinaria;
		this.constructor.createdRestaurantes.push(this);

		if (typeof nome !== 'string') {
			throw new Error('Nome inválido');
		} else if (typeof culinaria !== 'string') {
			throw new Error('Culinária inválida');
		} else if (!(endereco instanceof Endereco)) {
			throw new Error('Endereço não é uma instância de Endereco');
		}
	}

	getNome() {
		return this.nome;
	}

	setNome(nome) {
		if (typeof nome === 'string') {
			this.nome = nome;
		} else {
			throw new Error('Nome inválido');
		}
	}

	getInclusivo() {
		return this.inclusivo;
	}

	setInclusivo(inclusivo) {
		if (typeof inclusivo === 'boolean') {
			this.inclusivo = inclusivo;
		} else {
			throw new Error('Valor de inclusivo inválido');
		}
	}

	getCulinaria() {
		return this.culinaria;
	}

	setCulinaria(culinaria) {
		if (typeof culinaria === 'string') {
			this.culinaria = culinaria;
		} else {
			throw new Error('Culinária inválida');
		}
	}

	checarEndereco(endereco) {
		if (endereco instanceof Endereco) {
			return this.endereco;
		} else {
			throw new Error('Endereço não é uma instância de Endereco');
		}
	}
}

module.exports = { Restaurantes };
