import { combineReducers } from 'redux';
import movieReducer from './movie-reducer.ts';
import favoriteListReducer from './favorite-list-reduer.ts';

const rootReducer = combineReducers({
  movie: movieReducer,
  favorites: favoriteListReducer,
});

export default rootReducer;

/*
combineReducers()
é uma function que recebe como parâmetro um objeto com todos os reducers da aplicação
*/
