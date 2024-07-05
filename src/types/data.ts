import { Movie } from './movie.ts';

export interface Data {
  id: number;
  name: string;
  movies: Movie[]
}
