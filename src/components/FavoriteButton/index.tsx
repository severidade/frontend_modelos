/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions/favoriteActions.ts';
import { RootState } from '../../types/global-state-types.ts';

import styles from './FavoriteButton.module.css';

type FavoriteButtonProps = {
  title: string;
}

function FavoriteButton({ title }: FavoriteButtonProps) {
  const dispatch = useDispatch();
  const favoritesList = useSelector((state: RootState) => state.favorites.favoritesList);
  const isFavorite = favoritesList.includes(title);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(title));
    } else {
      dispatch(addFavorite(title));
    }
  };

  return (
    <button
      className={`
        ${styles.favorite_button} 
        ${isFavorite ? styles.is_favorite : ''} 
      `}
      type="button"
      onClick={handleToggleFavorite}
    >
      {isFavorite ? 'remover do favoritos' : 'adicionar aos favoritos'}
    </button>
  );
}

export default FavoriteButton;
