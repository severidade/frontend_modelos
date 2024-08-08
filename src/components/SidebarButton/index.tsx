/* eslint-disable react/react-in-jsx-scope */
import styles from './SidebarButton.module.css';
import { Movie } from '../../types/movie-types.ts';

type SidebarButtonProps = {
  movie: Movie;
  isSelected: boolean;
  isFavorite: boolean;
  onClick: () => void;
  key: number;
  toggleFavorite: (movieTitle: string) => void;
  // onRemoveFavorite: (movieTitle: string) => void;
};

function SidebarButton({
  movie, isSelected, isFavorite, onClick, key, toggleFavorite,
}: SidebarButtonProps) {
  return (
    <div className={styles.container_film_button} key={key}>
      <button
        onClick={onClick}
        type="button"
        className={`
          ${styles.film_item_button} 
          ${isSelected ? styles.selected : ''}
          ${isFavorite ? styles.favorite : ''} 
        `}
      >
        {movie.title}
      </button>
      {isFavorite && (
        <button
          type="button"
          onClick={() => toggleFavorite(movie.title)}
          className={`${styles.remove_from_favorite} `}
        >
          Remover dos favoritos
        </button>
      )}
    </div>
  );
}

export default SidebarButton;
