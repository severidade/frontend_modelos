export interface Movie {
  id: number;
  movieTitle: string;
  released: number;
  embedId: string;
}

export interface Category {
  id: number;
  categoryName: string;
  movies: Movie[]
}
