const { Usuario } = require('../models/Usuario');

describe('Quando testar a classe usuário', () => {
	beforeEach(() => {
		usuario = new Usuario('Bruna', 'bruna@gmail.com');
	});

	test('Então deve criar um novo usuário com nome e email', () => {
		expect(usuario).toBeInstanceOf(Usuario);
	});

	test('Deve permitir acessar as propriedades de nome e email', () => {
		expect(usuario.nome).toBe('Bruna');
		expect(usuario.email).toBe('bruna@gmail.com');
	});

	test('Deve permitir atualizar o nome do usuário', () => {
		const novoNome = 'Bruna Atualizada';
		usuario.atualizarNome(novoNome);
		expect(usuario.nome).toBe(novoNome);
	});

	test('Deve permitir atualizar o email do usuário', () => {
		const novoEmail = 'bruna.atualizada@gmail.com';
		usuario.atualizarEmail(novoEmail);
		expect(usuario.email).toBe(novoEmail);
	});
});
