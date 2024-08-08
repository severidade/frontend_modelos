import { Movie } from '../../types/movie.ts';

export const SELECT_MOVIE = 'SELECT_MOVIE';

export const selectedMovie = (movie: Movie) => ({
  type: SELECT_MOVIE,
  payload: movie,
});
