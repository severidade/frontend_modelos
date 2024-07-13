/* eslint-disable react/react-in-jsx-scope */
import styles from './FavoriteButton.module.css';

type FavoriteButtonProps = {
  title: string
  isFavorite: boolean;
  toggleFavorite: (movie: string) => void;
}

function FavoriteButton({ title, isFavorite, toggleFavorite }: FavoriteButtonProps) {
  return (
    <button
      className={`
        ${styles.favorite_button} 
        ${isFavorite ? styles.is_favorite : ''} 
      `}
      type="button"
      onClick={() => toggleFavorite(title)}
    >
      {isFavorite ? 'remover do favoritos' : 'adicionar aos favoritos'}
    </button>
  );
}

export default FavoriteButton;
