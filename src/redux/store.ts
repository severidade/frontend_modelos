import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers/index.ts';

// type ActionType = {
//   type: string;
// }

// const INITIAL_STATE = { count: 0 };

// const reducer = (state = INITIAL_STATE, action: ActionType) => state;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
