# Async, await e testes assíncronos

- Este é um modelo de requisições assíncronas utilizando ``async/await``;
- Estou utilizando o ``try/catch`` para tratar erros;
- Escrevi testes para códigos assíncronos utilizando ``async/await``.

Estou consumindo dados da API REST do WordPress
OBS: ainda nao escrevi os testes para a aplicação.

<div class="destaque-box" style="background: #a9a9a9; padding: 10px; border-radius: 5px; display: flex; align-items: flex-start;">
  <div class="icone" style="margin-right: 10px;">💻</div>
  <a href="http://modeloassincrono.severidade.com.br">Deploy da Aplicação</a>
</div>
<br>

## Configurando o ambiente

  <details>
    <summary>📝 Checklist - Iniciando um projeto com Vite</summary>

##### Iniciando o Projeto com NPM

- [x] Criar o diretório do projeto;
- [x] Criar o diretório ``src/`` dentro do diretório do projeto;
- [x] Criar o arquivo ``main.js`` no diretório src/;
- [x] Criar o arquivo ``index.html`` na raiz do projeto;
- [x] Executar o comando ``npm init -y`` ou ``npm init`` para criar o package.json;

##### Configurar o projeto para utilizar a sintaxe ES Modules
- [x] Adicionar a linha ``<script type="module" src="./src/main.js"></script>`` no arquivo html;
- [x] Adicionar a chave ``"type": "module"`` ao arquivo package.json

##### Adicionar um bundler dev-server
- [X] Instalar o Vite com o comando ``npm i vite``;
- [X] Adicionar a chave ``"dev": "vite --open"`` à chave "scripts" do arquivo package.json;

##### Instalar e configurar o ESLint
- [X] Execute o comando ``npm init @eslint/config`` e siga o passo a passo que aparecerá no terminal.
- [x] instalar o lint da trybe ``npm i @trybe/eslint-config-frontend``
  </details>


## Instalar o jest

  <details>
    <summary>🧪 Checklist - Para realização dos testes é importante instalar o Jest com dependency</summary>

  - Instalar o Jest
    ```bash

    npm install --save-dev eslint-plugin-jest
    ```

  - Configurar o ESLint

    Adicione a configuração do plugin Jest no seu arquivo .eslintrc.js ou .eslintrc.json. Se você ainda não tem um arquivo de configuração, crie um. Aqui está um exemplo para .eslintrc.js:

    ```javascript
    #.eslintrc.js

    module.exports = {
        "env": {
            "browser": true,
            "es2021": true,
            "jest": true // Adiciona o ambiente Jest
        },
        "extends": [
            "eslint:recommended",
            "plugin:react/recommended"
        ],
        "overrides": [
            {
                "env": {
                    "node": true
                },
                "files": [
                    ".eslintrc.{js,cjs}"
                ],
                "parserOptions": {
                    "sourceType": "script"
                }
            }
        ],
        "parserOptions": {
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        "plugins": [
            "react",
            "jest" // Adiciona o plugin Jest
        ],
        "rules": {
        }
    }

    ```

  - Configurar o pakege.json
    ```bash

    "scripts": {
      "dev": "vite --open",
      "build": "vite build",
      "preview": "vite preview",
      "test": "NODE_OPTIONS=--experimental-vm-modules NODE_NO_WARNINGS=1 npx jest"
    },
    ```
<sumaty>