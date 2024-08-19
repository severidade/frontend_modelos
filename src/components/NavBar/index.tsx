/* eslint-disable react/react-in-jsx-scope */
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../types/global-state-types.ts';

import './NavBar.css';
import SidebarButton from '../SidebarButton/index.tsx';
import { useDeviceInfo } from '../../utils/useDeviceInfo.tsx';
import MenuHamburger from '../MenuHamburger/index.tsx';
import { togglePlayVideo, toggleSelectedMovie } from '../../redux/actions/movieActions.ts';

type NavBarProps = {
  favoritList: string[];
  toggleFavorite: (movieTitle: string) => void;
};

function NavBar({
  favoritList, toggleFavorite,
}: NavBarProps) {
  const { isMobile } = useDeviceInfo();
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const isPlaying = useSelector((state: RootState) => state.movie.isPlaying);
  const movieList = useSelector((state: RootState) => state.movie.movieList);
  const selectedMovie = useSelector((state: RootState) => state.movie.selectedMovie);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }, []);

  const handleMenuClick = useCallback(() => {
    if (isPlaying) {
      dispatch(togglePlayVideo());
    }
    toggleMenu();
  }, [isPlaying, toggleMenu, dispatch]);

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav>
      <div className="nav-header">
        <h1 className="app_title">CineHits</h1>
        <MenuHamburger
          isMobile={isMobile}
          menuOpen={menuOpen}
          handleMenuClick={handleMenuClick}
        />
      </div>

      { isMobile && (
        <button
          className={`mascara ${menuOpen ? 'open' : ' '}`.trim()}
          type="button"
          onClick={handleMenuClick}
        >
          {menuOpen ? 'Fechar Menu' : 'Abrir Menu'}
        </button>
      )}

      <div className="container_sidebar">
        <div className={`menu ${menuOpen ? 'open' : ''}`.trim()}>
          {movieList.map((category) => (
            <div key={category.id}>
              <h3 className="film_category">{category.categoryName}</h3>
              <div className="film_list">
                {category.movies.map((movie) => (
                  <SidebarButton
                    key={movie.id}
                    movie={movie}
                    isSelected={selectedMovie.movieTitle === movie.movieTitle}
                    isFavorite={favoritList.includes(movie.movieTitle)}
                    onClick={() => {
                      dispatch(toggleSelectedMovie(movie));
                      if (isMobile) {
                        toggleMenu();
                      } else if (isPlaying) {
                        dispatch(togglePlayVideo());
                      }
                    }}
                    toggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
