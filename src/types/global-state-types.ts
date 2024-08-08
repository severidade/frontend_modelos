import { Movie, Category } from './movie-types.ts';

export interface MovieState {
  selectedMovie: Movie;
  movieList: Category[];
  isPlaying: boolean;
}
export interface RootState {
  movie: MovieState;
}
