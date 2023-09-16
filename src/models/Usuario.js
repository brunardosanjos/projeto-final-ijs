class Usuario {
	nome;
	email;

	constructor(nome, email) {
		this.nome = nome;
		this.email = email;

		if (typeof nome !== 'string' || nome.length === 0) {
			throw new Error('Nome inválido');
		}
		if (typeof email !== 'string' || !email.includes('@') || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			throw new Error('Email inválido');
		}
	}

	atualizarNome(novoNome) {
		if (typeof novoNome !== 'string' || novoNome.length === 0) {
			throw new Error('Nome inválido');
		}
		this.nome = novoNome;
	}

	atualizarEmail(novoEmail) {
		if (typeof novoEmail !== 'string' || !novoEmail.includes('@') || !novoEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			throw new Error('Email inválido');
		}
		this.email = novoEmail;
	}
}

module.exports = { Usuario };
