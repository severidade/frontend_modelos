/* eslint-disable default-param-last */
import { Action } from 'redux';
import data from '../../data/index2.ts';
import { MovieState } from '../../types/globalState.ts';
import { SELECT_MOVIE } from '../actions/movieActions.ts';

const INITIAL_STATE: MovieState = {
  selectedMovie: data[0].movies[0],
  isPlaying: false,
};

const movieReducer = (state: MovieState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
