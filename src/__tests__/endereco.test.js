const { Endereco } = require('../models/Endereco');

describe('Quando testar a classe endereço', () => {
	beforeEach(() => {
		endereco = new Endereco('Graças', '70', '0050700', 'zona norte');
	});

	test('Deve criar um novo endereço', () => {
		expect(endereco).toBeInstanceOf(Endereco);
	});

	test('Deve permitir acessar as propriedades do endereço', () => {
		expect(endereco.bairro).toBe('Graças');
		expect(endereco.numero).toBe('70');
		expect(endereco.cep).toBe('0050700');
		expect(endereco.regiao).toBe('zona norte');
	});

	test('Não deve permitir criar um endereço com bairro inválido', () => {
		expect(() => {
			new Endereco('', '70', '0050700', 'zona norte');
		}).toThrowError(new Error('Bairro inválido'));
	});

	test('Não deve permitir criar um endereço com número inválido', () => {
		expect(() => {
			new Endereco('Graças', '', '0050700', 'zona norte');
		}).toThrowError(new Error('Número inválido'));
	});

	test('Não deve permitir criar um endereço com CEP inválido', () => {
		expect(() => {
			new Endereco('Graças', '70', '', 'zona norte');
		}).toThrowError(new Error('CEP inválido'));
	});

	test('Não deve permitir criar um endereço com região inválida', () => {
		expect(() => {
			new Endereco('Graças', '70', '0050700', '');
		}).toThrowError(new Error('Região inválida'));
	});

	test('Não deve permitir criar um endereço com bairro nulo', () => {
		expect(() => {
			new Endereco(null, '70', '0050700', 'zona norte');
		}).toThrowError(new Error('Bairro inválido'));
	});
});
