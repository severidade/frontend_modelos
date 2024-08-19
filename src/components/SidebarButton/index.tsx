/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../redux/actions/favoriteActions.ts';
import styles from './SidebarButton.module.css';
import { Movie } from '../../types/movie-types.ts';
import { RootState } from '../../types/global-state-types.ts';

type SidebarButtonProps = {
  movie: Movie;
  isSelected: boolean;
  onClick: () => void;
  key: number;
};

function SidebarButton({
  movie, isSelected, onClick, key,
}: SidebarButtonProps) {
  const dispatch = useDispatch();
  const favoritesList = useSelector((state: RootState) => state.favorites.favoritesList);
  const isFavorite = favoritesList.includes(movie.movieTitle);

  return (
    <div className={styles.container_film_button} key={key}>
      <button
        onClick={onClick}
        type="button"
        className={`
          ${styles.film_item_button} 
          ${isFavorite ? styles.favorite : ''} 
          ${isSelected ? styles.selected : ''}
        `}
      >
        {movie.movieTitle}
      </button>
      {isFavorite && (
        <button
          type="button"
          onClick={() => dispatch(removeFavorite(movie.movieTitle))}
          className={`${styles.remove_from_favorite} `}
        >
          Remover dos favoritos
        </button>
      )}
    </div>
  );
}

export default SidebarButton;
