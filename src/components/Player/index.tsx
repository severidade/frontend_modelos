/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
// import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Movie } from '../../types/movie-types.ts';
import FavoriteButton from '../FavoriteButton/index.tsx';
import styles from './Player.module.css';

type PlayerProps = {
  selectedMovie: Movie;
  favoritList: string[];
  toggleFavorite: (movie: string) => void;
  isPlaying: boolean;
  togglePlayVideo: () => void;
};

function Player({
  selectedMovie, favoritList, isPlaying, toggleFavorite, togglePlayVideo,
}: PlayerProps) {
  const isFavorite = favoritList.includes(selectedMovie.title);

  return (
    <div className={styles.player}>
      {selectedMovie && (
        <>
          <h2 className={styles.movie_title}>
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
                  onClick={togglePlayVideo}
                />
                <button
                  className={styles.play_button}
                  type="button"
                  onClick={togglePlayVideo}
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
