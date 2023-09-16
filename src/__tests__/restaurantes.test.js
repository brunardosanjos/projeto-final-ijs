const { Restaurantes } = require('../models/Restaurantes');
const { Endereco } = require('../models/Endereco');

describe('Restaurantes', () => {
	beforeEach(() => {
		endereco = new Endereco('Graças', '70', '0050700', 'zona norte');
		restaurante = new Restaurantes('Organico', 'Graças', 'Italiana');
	});

	it('deve criar um novo Restaurantes com nome, inclusivo, culinaria e endereco', () => {
		expect(restaurante).toBeInstanceOf(Restaurantes);
		expect(restaurante.nome).toBe('Organico');
		expect(restaurante.inclusivo).toBe(true);
		expect(restaurante.culinaria).toBe('Italiana');
		expect(restaurante.endereco).toBe('Graças', '70', '0050700', 'zona norte');
	});

	it('deve permitir acessar os métodos getNome, getInclusivo, getCulinaria e checarEndereco', () => {
		expect(restaurante.getNome()).toBe('Organico');
		expect(restaurante.getInclusivo()).toBe(true);
		expect(restaurante.getCulinaria()).toBe('Italiana');
	});
});

describe('Restaurantes', () => {
	// Teste para verificar se o objeto é uma instância de Endereco
	it('deve verificar se o objeto endereco é uma instância de Endereco', () => {
		const endereco = new Endereco('Graças', '70', '0050700', 'zona norte');
		const restaurante = new Restaurantes('Nirá', endereco, 'fusion');

		expect(restaurante.endereco).toBeInstanceOf(Endereco);
	});
});
