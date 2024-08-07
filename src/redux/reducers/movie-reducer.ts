/* eslint-disable default-param-last */
import { Action } from 'redux';
import data from '../../data/index2.ts';
import { MovieState } from '../../types/globalState.ts';

const INITIAL_STATE: MovieState = {
  selectedMovie: data[0].movies[0],
  isPlaying: false,
};

const movieReducer = (state: MovieState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default movieReducer;
