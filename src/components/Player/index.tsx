/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Movie } from '../../types/movie.ts';
import FavoriteButton from '../FavoriteButton/index.tsx';
import styles from './Player.module.css';

type PlayerProps = {
  selectedMovie: Movie;
  favoritList: string[];
  toggleFavorite: (movie: string) => void;
};

function Player({ selectedMovie, favoritList, toggleFavorite }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const isFavorite = favoritList.includes(selectedMovie.title);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.player}>
      {selectedMovie && (
        <>
          <h2>
            {selectedMovie.title}
            {' '}
            (
            {selectedMovie.released}
            )
          </h2>
          <div className={styles.video_container}>

            {isPlaying ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${selectedMovie.embedId}`}
                width="100%"
                height="100%"
                controls
                playing={isPlaying}
              />
            ) : (
              <div className={styles.thumbnail_container}>
                <img
                  src={`https://img.youtube.com/vi/${selectedMovie.embedId}/hqdefault.jpg`}
                  alt="Thumbnail"
                  className={styles.thumbnail}
                  onClick={handlePlayVideo}
                />
                <button
                  onClick={handlePlayVideo}
                  className={styles.play_button}
                  type="button"
                >
                  play
                </button>
              </div>
            )}
            <FavoriteButton
              title={selectedMovie.title}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Player;
