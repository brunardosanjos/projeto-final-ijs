const { Endereco } = require("./Endereco");

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
  }

  getNome() {
    return this.nome;
  }

  getInclusivo() {
    return this.inclusivo;
  }

  getCulinaria() {
    return this.culinaria;
  }

  checarEndereco(endereco) {
    if (endereco instanceof Endereco) {
      return this.Endereco;
    }
  }
}

module.exports = { Restaurantes };
