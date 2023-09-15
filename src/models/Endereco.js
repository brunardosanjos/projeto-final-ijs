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
  }
}

module.exports = { Endereco };
