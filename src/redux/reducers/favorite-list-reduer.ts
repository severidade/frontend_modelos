/* eslint-disable default-param-last */
import { Action } from 'redux';
import { FavoritesListSate } from '../../types/global-state-types.ts';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoriteActions.ts';

const INITIAL_STATE: FavoritesListSate = {
  favoritesList: [],
};

const favoritListReducer = (state: FavoritesListSate = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favoritesList: [...state.favoritesList, action.payload as string],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favoritesList: state.favoritesList.filter((movie) => movie !== action.payload as string),
      };

    default:
      return state;
  }
};

export default favoritListReducer;
