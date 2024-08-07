import { Movie } from './movie.ts';

export interface MovieState {
  selectedMovie: Movie;
  isPlaying: boolean;
}

// export interface RootState {
//   movies: MovieState;
// }
