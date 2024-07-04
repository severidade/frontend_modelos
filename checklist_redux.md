# Gerenciamento de estado com Redux

Relembrando os conceitos:

- Store: É onde o estado global da aplicação é armazenado e é representado por um objeto JavaScript.
- Action: É um objeto JavaScript que representa uma ação que precisa acontecer no estado global.
- Reducer: É uma função JavaScript responsável por escrever no estado global de acordo com a ação solicitada pela action.
- Dispatch: É uma função que envia uma action para processamento.



### Configurando o Redux com React

##### 01. Crie e configure uma aplicação React.

```
npm create vite@latest
```

seguir os passos de [checklist_react](./checklist_react.md)

##### 02. Instalar as dependências do Redux.
``` 
npm install redux react-redux @redux-devtools/extension
```


##### 03. criando a estrutura de pastas do redux


```
mkdir -p ./src/redux/{actions,reducer} && touch ./src/redux/store.ts ./src/redux/actions/index.ts ./src/redux/reducers/index.ts
```

##### 04. Criar a Store e fazer a configuração Inicial

No arquivo `store.ts` colocar o seguinte código:

```
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

type ActionType = {
  type: string;
}

const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action: ActionType) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;
```

###### Provider
Para finalizar a configuração do React com Redux, é preciso passar as informações da store para o restante da aplicação. Assim, os componentes criados poderão acessar o estado global que você criou.

``` 
// ./src/main.tsx
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './redux/index.ts';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```
