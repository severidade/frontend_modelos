/* eslint-disable react/react-in-jsx-scope */
import { Movie } from '../../types/movie.ts';
import FavoriteButton from '../FavoriteButton/index.tsx';

type PlayerProps = {
  selectedMovie: Movie;
  favoritList: string[];
  toggleFavorite: (movie: string) => void;
};

function Player({ selectedMovie, favoritList, toggleFavorite }: PlayerProps) {
  const isFavorite = favoritList.includes(selectedMovie.title);

  return (
    <div className="player">
      {selectedMovie && (
        <>
          <h2>
            {selectedMovie.title}
            {' '}
            (
            {selectedMovie.released}
            )
          </h2>
          <iframe
            title={selectedMovie.title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedMovie.embedId}`}
            frameBorder="0"
            allowFullScreen
          />
          <FavoriteButton
            title={selectedMovie.title}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        </>
      )}
    </div>
  );
}

export default Player;
