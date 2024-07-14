/* eslint-disable react/react-in-jsx-scope */
import styles from './SidebarButton.module.css';
import { Movie } from '../../types/movie.ts';

type SidebarButtonProps = {
  movie: Movie;
  isSelected: boolean;
  isFavorite: boolean;
  onClick: () => void;
  key: number;
};

function SidebarButton({
  movie, isSelected, isFavorite, onClick, key,
}: SidebarButtonProps) {
  return (
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
  );
}

export default SidebarButton;
