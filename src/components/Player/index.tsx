/* eslint-disable react/react-in-jsx-scope */
import ReactPlayer from 'react-player';
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
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${selectedMovie.embedId}`}
            width="100%"
            height="315px"
            controls
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
