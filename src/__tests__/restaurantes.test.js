const { Restaurantes } = require('../models/Restaurantes');
const { Endereco } = require('../models/Endereco');

describe('Restaurantes', () => {
	let endereco;
	let restaurante;

	beforeEach(() => {
		endereco = new Endereco('Graças', '70', '0050700', 'zona norte');
		restaurante = new Restaurantes('Organico', endereco, 'Italiana');
	});

	it('deve criar um novo Restaurantes com nome, inclusivo, culinaria e endereco', () => {
		expect(restaurante).toBeInstanceOf(Restaurantes);
		expect(restaurante.nome).toBe('Organico');
		expect(restaurante.inclusivo).toBe(true);
		expect(restaurante.culinaria).toBe('Italiana');
		expect(restaurante.endereco).toBe(endereco);
	});

	it('deve permitir acessar os métodos getNome, getInclusivo, getCulinaria e checarEndereco', () => {
		expect(restaurante.getNome()).toBe('Organico');
		expect(restaurante.getInclusivo()).toBe(true);
		expect(restaurante.getCulinaria()).toBe('Italiana');
	});

	it('deve verificar se o objeto endereco é uma instância de Endereco', () => {
		const endereco = new Endereco('Graças', '70', '0050700', 'zona norte');
		const restaurante = new Restaurantes('Nirá', endereco, 'fusion');

		expect(restaurante.endereco).toBeInstanceOf(Endereco);
	});

	it('deve permitir alterar o nome do restaurante através do método setNome', () => {
		restaurante.setNome('Novo Nome');
		expect(restaurante.getNome()).toBe('Novo Nome');
	});

	it('deve lançar um erro quando um nome inválido é passado para setNome', () => {
		expect(() => restaurante.setNome(123)).toThrowError(new Error('Nome inválido'));
	});

	it('deve permitir alterar o valor de inclusivo através do método setInclusivo', () => {
		restaurante.setInclusivo(false);
		expect(restaurante.getInclusivo()).toBe(false);
	});

	it('deve lançar um erro quando um valor inválido é passado para setInclusivo', () => {
		expect(() => restaurante.setInclusivo('não')).toThrowError(new Error('Valor de inclusivo inválido'));
	});

	it('deve permitir alterar a culinária do restaurante através do método setCulinaria', () => {
		restaurante.setCulinaria('Brasileira');
		expect(restaurante.getCulinaria()).toBe('Brasileira');
	});

	it('deve lançar um erro quando uma culinária inválida é passada para setCulinaria', () => {
		expect(() => restaurante.setCulinaria(123)).toThrowError(new Error('Culinária inválida'));
	});
});
