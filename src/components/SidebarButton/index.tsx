/* eslint-disable react/react-in-jsx-scope */
import styles from './SidebarButton.module.css';
import { Movie } from '../../types/movie.ts';

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
    <div className={styles.container_film_button}>
      <button
        key={key}
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
        >
          Remover dos favoritos
        </button>
      )}
    </div>
  );
}

export default SidebarButton;
