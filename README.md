# Async, await e testes assíncronos

- Este é um modelo de requisições assíncronas utilizando ``async/await``;
- Estou utilizando o ``try/catch`` para tratar erros;
- Escrevi testes para códigos assíncronos utilizando ``async/await``.

Estou consumindo dados da API REST do WordPress 

## Configurando o ambiente

  <details>
    <summary>📝 Checklist - Iniciando um projeto com Vite</summary>

##### Iniciando o Projeto com NPM

- [ ] Criar o diretório do projeto;
- [ ] Criar o diretório ``src/`` dentro do diretório do projeto;
- [ ] Criar o arquivo ``main.js`` no diretório src/;
- [ ] Criar o arquivo ``index.html`` na raiz do projeto;
- [ ] Executar o comando ``npm init -y`` ou ``npm init`` para criar o package.json;

##### Configurar o projeto para utilizar a sintaxe ES Modules
- [ ] Adicionar a linha ``<script type="module" src="./src/main.js"></script>`` no arquivo html;
- [ ] Adicionar a chave ``"type": "module"`` ao arquivo package.json

##### Adicionar um bundler dev-server
- [ ] Instalar o Vite com o comando ``npm i vite``;
- [ ] Adicionar a chave ``"dev": "vite --open"`` à chave "scripts" do arquivo package.json;

##### Instalar e configurar o ESLint
- [ ] Execute o comando ``npm init @eslint/config`` e siga o passo a passo que aparecerá no terminal.
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