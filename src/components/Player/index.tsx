/* eslint-disable react/react-in-jsx-scope */
import { Movie } from '../../types/movie.ts';

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
          <button
            className={`favorite_button ${isFavorite ? 'is_favorite' : ''} `}
            type="button"
            onClick={() => toggleFavorite(selectedMovie.title)}
          >
            {isFavorite ? 'remover do favoritos' : 'adicionar aos favoritos'}
          </button>
        </>
      )}
    </div>
  );
}

export default Player;
