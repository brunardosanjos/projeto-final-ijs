const { Usuario } = require('../models/Usuario');

describe('Quando testar a classe usuário', () => {
	let usuario;

	beforeEach(() => {
		usuario = new Usuario('Bruna', 'bruna@gmail.com');
	});
	test('Então deve criar um novo usuário com nome e email', () => {
		expect(usuario).toBeInstanceOf(Usuario);
	});
	test('deve permitir acessar as propriedades de nome e email', () => {
		expect(usuario.nome).toBe('Bruna');
		expect(usuario.email).toBe('bruna@gmail.com');
	});
});
