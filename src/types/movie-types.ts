export interface Movie {
  id: number;
  title: string;
  released: number;
  embedId: string;
}

export interface Category {
  id: number;
  name: string;
  movies: Movie[]
}
