export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (movieTitle: string) => ({
  type: ADD_FAVORITE,
  payload: movieTitle, // Dados enviados junto com a ação que no caso é o nome do filme
});

export const removeFavorite = (movieTitle: string) => ({
  type: REMOVE_FAVORITE,
  payload: movieTitle, // Dados enviados junto com a ação que no caso é o nome do filme
});
