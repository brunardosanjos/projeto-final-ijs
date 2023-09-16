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
});
