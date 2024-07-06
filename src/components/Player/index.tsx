/* eslint-disable react/react-in-jsx-scope */
import { Movie } from '../../types/movie.ts';

type PlayerProps = {
  selectedMovie: Movie;
};

function Player({ selectedMovie }: PlayerProps) {
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
          <button type="button">
            favoritar
            {/* {isFavorite ? 'remover do favoritos' : 'adicionar aos favoritos'} */}
          </button>
        </>
      )}
    </div>
  );
}

export default Player;
