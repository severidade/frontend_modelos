/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import ReactPlayer from 'react-player';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePlayVideo } from '../../redux/actions/movieActions.ts';
import { RootState } from '../../types/global-state-types.ts';
import FavoriteButton from '../FavoriteButton/index.tsx';
import styles from './Player.module.css';

function Player() {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.movie.isPlaying);
  const selectedMovie = useSelector((state: RootState) => state.movie.selectedMovie);

  const handlePlayToggle = useCallback(() => {
    dispatch(togglePlayVideo());
  }, [dispatch]);

  return (
    <div className={styles.player}>
      {selectedMovie && (
        <>
          <h2 className={styles.movie_title}>
            {selectedMovie.movieTitle}
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
                  onClick={handlePlayToggle}
                />
                <button
                  className={styles.play_button}
                  type="button"
                  onClick={handlePlayToggle}
                >
                  play
                </button>
              </div>
            )}
            <FavoriteButton title={selectedMovie.movieTitle} />
          </div>
        </>
      )}
    </div>
  );
}

export default Player;
