import { Movie } from '../../types/movie-types.ts';

export const SELECT_MOVIE = 'SELECT_MOVIE';

export const toggleSelectedMovie = (movie: Movie) => ({
  type: SELECT_MOVIE,
  payload: movie,
});

export const TOGGLE_PLAYING = 'TOGGLE_PLAYING';

export const togglePlayVideo = () => ({
  type: TOGGLE_PLAYING,
});
