
<h1 align="center"> Projeto Final {Reprograma} - 🏳️‍🌈 OPEN DOOR 🏳️‍🌈

## Imersão Javascript de Desenvolvedora Backend | Turma On25 da [{Reprograma}](https://www.reprograma.com.br/) 

## 🌈 Descrição

A aplicação é um sistema de gerenciamento de restaurantes projetado para promover a inclusão e o apoio à comunidade LGBTQIAP+. Ele permite aos usuários criar, gerenciar e compartilhar informações sobre restaurantes, endereços e usuários.

Este sistema é mais do que apenas uma plataforma de gerenciamento; é uma iniciativa para incentivar a comunidade LGBTQIAP+ a apoiar estabelecimentos que são de propriedade ou que apoiam ativamente a comunidade. Através deste sistema, buscamos criar um ambiente seguro e acolhedor, evitando situações desconfortáveis e promovendo o crescimento e a prosperidade de tais estabelecimentos.

Nosso objetivo é mais do que apenas fornecer um serviço; é criar uma comunidade inclusiva e acolhedora onde todos se sintam bem-vindos e apoiados.

</br>

## 🏳️‍⚧️ Instalação

Para usar esta aplicação, primeiro clone este repositório para o seu computador:

```bash
git clone https://github.com/brunardosanjos/projeto-final-ijs.git
```

Em seguida, navegue até a pasta do projeto e instale as dependências:

```bash
cd projeto-final-ijs
npm install ou npm i
```

</br>

## :woman_technologist: Tecnologias e Dependências Utilizadas



| Ferramenta | Descrição |
| --- | --- |
| javascript | Linguagem de programação. |
| node.js    | Ambiente de execução do javascript.|
| npm ou yarn ou pnpm| Gerenciador de pacotes.|
| jest| Jest é uma estrutura de teste JavaScript.|


<br>

## 🌈 Uso

### 🔸 Classe Restaurantes

A classe Restaurantes permite criar e gerenciar informações sobre restaurantes. Ela possui os seguintes métodos:

- `getNome()`: Retorna o nome do restaurante.
- `setNome(nome)`: Define o nome do restaurante.
- `getInclusivo()`: Retorna se o restaurante é inclusivo.
- `setInclusivo(inclusivo)`: Define se o restaurante é inclusivo.
- `getCulinaria()`: Retorna o tipo de culinária do restaurante.
- `setCulinaria(culinaria)`: Define o tipo de culinária do restaurante.
- `checarEndereco(endereco)`: Verifica se o endereço é uma instância da classe Endereco.

### 🔸 Classe Usuario

A classe Usuario permite criar e gerenciar informações sobre usuários. Ela possui os seguintes métodos:

- `atualizarNome(novoNome)`: Atualiza o nome do usuário.
- `atualizarEmail(novoEmail)`: Atualiza o email do usuário.

### 🔸 Classe Endereco

A classe Endereco permite criar e gerenciar informações sobre endereços.

</br>

## 🏳️‍⚧️ Testes

Esta aplicação inclui testes automatizados usando a biblioteca Jest. Para executar os testes, navegue até a pasta do projeto e execute o comando `npm test`:

```bash
cd projeto-final-ijs
npm test
```

O Jest exibirá os resultados dos testes na tela.

</br>
Os testes foram escritos usando o framework Jest. Aqui estão alguns exemplos de testes realizados nas classes Endereco, Restaurantes e Usuario.

### 🔸 Classe Endereço

Os testes para a classe Endereco verificam se um novo endereço pode ser criado e se as propriedades do endereço podem ser acessadas. Além disso, os testes garantem que um erro é lançado quando tentamos criar um endereço com bairro, número, CEP ou região inválidos.

### 🔸 Classe Restaurantes

Os testes para a classe Restaurantes verificam se um novo restaurante pode ser criado e se os métodos getNome, getInclusivo, getCulinaria e checarEndereco funcionam como esperado. Além disso, os testes garantem que um erro é lançado quando tentamos definir um nome, inclusivo ou culinária inválidos.

### 🔸 Classe Usuário

Os testes para a classe Usuario verificam se um novo usuário pode ser criado e se as propriedades de nome e email podem ser acessadas. Além disso, os testes garantem que o nome e o email do usuário podem ser atualizados corretamente.

</br>

## :clinking_glasses: Agradecimentos

</br>

Agradecimento as Professoras e a facilitadora Rqeual e a Ju por toda atenção, paciência e orientações fantásticas. 💜 

Agradecer também a minha namorada maravilhosa que me apoia em quase tudo na vida e nos estudos. :heart_on_fire:. <br> 

<br>

## 👽 Autora

<br>

<p align="center">
 <img style="border-radius: 50%; object-fit: cover; width: 200px; height: 200px;" src="https://github.com/brunardosanjos/projeto-final-ijs/assets/69405837/07e6b9eb-83ec-4383-89ed-ed9d3526a373" alt="Foto de Perfil de Bruna Andrade"/>
 <br/>
</a>
</p>

<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/bruna-dos-anjos/" target="_blank"><img src="https://img.shields.io/badge/-Bruna_Andrade-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruna-dos-anjos/" target="_blank"></a> </p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" /> <p align="center"></p>


