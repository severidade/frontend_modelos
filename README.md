# Shoe Haven
Esta aplicação fará uso de CSS Módules para estilização dos componetes, Props Children e servirá também para implementar uma nova froma de utilizar imagens nos componentes. 

### 📝 Iniciando um projeto React com Vite
  
<details>
    <summary>Criar e configurar uma aplicação React usando o VITE</summary>

- [ ] Criar o diretório do projeto;
- [ ] Instalar o react usando o Vite ``npm create vite@latest`` ;
      obs: entrar na pasta mas nao instalar as dependencias. so fazer isso depois de instalr o eslint
- [ ] Alterar a chave ``dev`` do arquivo ``package.json``  ;

    ```bash

    "scripts": {
      "dev": "vite --open",
      "build": "vite build",
    },
    ```

</details>

<details>
    <summary>Configurar o ESLint</summary>

- [ ] excluir o arquivo de configuração de lint criado pelo vite com o comando:

    ```bash
    rm .eslintrc.cjs
    ```
- [ ] Remover as dependências que foram instaladas pelo Vite.

    ```bash
    npm remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint-plugin-react-refresh
    ```
- [ ] instalar o pacote de regras de lint com o padrão da Trybe.

    ```bash
    npm i @trybe/eslint-config-frontend -D
    ```

- [ ] Criar o arquivo ``.eslintrc.json`` na raiz do projeto com o seguinte conteúdo.

    ```bash
    //.eslintrc.json
    {
      "extends": "@trybe/eslint-config-frontend/typescript"
    }
    ```

- [ ] Editar o arquivo ``pakage.json`` adicionando o script para rodar o ESlint.

    ```bash
    //package.json
    ...
      "scripts": {
        ...
        "lint": "eslint -c .eslintrc.json . --ext .js,.jsx,.ts,.tsx"
        ...
      },
    ...
    ```

- [ ] Criar o arquivo de configuração do VSCode ``.vscode/settings.json`` na raiz do projeto.

    ```bash
    //.vscode/settings.json
    {
      "editor.formatOnSave": true,
      "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true,
  },
      "extensions.ignoreRecommendations": false,
  }
    ```
</details>
