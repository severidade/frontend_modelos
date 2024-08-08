import { combineReducers } from 'redux';
import movieReducer from './movie-reducer.ts';

const rootReducer = combineReducers({
  movie: movieReducer,
});

export default rootReducer;

/*
combineReducers()
é uma function que recebe como parâmetro um objeto com todos os reducers da aplicação
*/
