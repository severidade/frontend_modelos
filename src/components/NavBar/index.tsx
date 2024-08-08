/* eslint-disable react/react-in-jsx-scope */
import { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Movie, Category } from '../../types/movie-types.ts';
import { RootState } from '../../types/global-state-types.ts';

import './NavBar.css';
import SidebarButton from '../SidebarButton/index.tsx';
import { useDeviceInfo } from '../../utils/useDeviceInfo.tsx';
import MenuHamburger from '../MenuHamburger/index.tsx';

type NavBarProps = {
  data: Category[]; // Tipo para o array de categorias
  selectedMovie: Movie; // Tipo para o filme selecionado
  setSelectedMovie: (movie: Movie) => void; // Tipo para a função que seleciona o filme
  favoritList: string[];
  isPlaying: boolean;
  toggleFavorite: (movieTitle: string) => void;
  togglePlayVideo: () => void;
};

function NavBar({
  data, selectedMovie, setSelectedMovie, favoritList, isPlaying, toggleFavorite, togglePlayVideo,
}: NavBarProps) {
  const { isMobile } = useDeviceInfo();
  const [menuOpen, setMenuOpen] = useState(false);

  // importa do redux os dados do estado global
  const selectedMovieFromRedux = useSelector((state: RootState) => state.movie);
  // imprime no console o resultado
  console.log('Estado do Redux: ', selectedMovieFromRedux);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }, []);

  const handleMenuClick = useCallback(() => {
    if (isPlaying) {
      togglePlayVideo();
    }
    toggleMenu();
  }, [isPlaying, toggleMenu, togglePlayVideo]);

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
          {selectedMovieFromRedux.movieList.map((category) => (
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
                      setSelectedMovie(movie);
                      if (isMobile) {
                        toggleMenu();
                      } else if (isPlaying) {
                        togglePlayVideo();
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
