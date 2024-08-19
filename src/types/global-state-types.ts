import { Movie, Category } from './movie-types.ts';

export interface MovieState {
  selectedMovie: Movie;
  movieList: Category[];
  isPlaying: boolean;
}
export interface FavoritesListSate {
  favoritesList: string[];
}
export interface RootState {
  movie: MovieState;
  favorites: FavoritesListSate;
}
