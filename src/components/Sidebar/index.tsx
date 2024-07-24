/* eslint-disable react/react-in-jsx-scope */
import { useState, useCallback } from 'react';
import { Movie } from '../../types/movie.ts';
import { Data } from '../../types/data.ts';

import './sidebar.css';
import SidebarButton from '../SidebarButton/index.tsx';
import { useDeviceInfo } from '../../utils/useDeviceInfo.tsx';
import MenuHamburger from '../MenuHamburger/index.tsx';

type SidebarProps = {
  data: Data[]; // Tipo para o array de categorias
  selectedMovie: Movie; // Tipo para o filme selecionadowindowWidth
  setSelectedMovie: (movie: Movie) => void; // Tipo para a função que seleciona o filme
  favoritList: string[];
  isPlaying: boolean;
  toggleFavorite: (movieTitle: string) => void;
  togglePlayVideo: () => void;
};

function Sidebar({
  data, selectedMovie, setSelectedMovie, favoritList, isPlaying, toggleFavorite, togglePlayVideo,
}: SidebarProps) {
  const { isMobile } = useDeviceInfo();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }, []);

  const handleMenuClick = useCallback(() => {
    if (isPlaying) {
      togglePlayVideo();
    }
    toggleMenu();
  }, [isPlaying, toggleMenu, togglePlayVideo]);

  return (

    <div className="container_sidebar">
      <MenuHamburger
        isMobile={isMobile}
        menuOpen={menuOpen}
        handleMenuClick={handleMenuClick}
      />
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        {data.map((category) => (
          <div key={category.id}>
            <h3 className="film_category">{category.name}</h3>
            <div className="film_list">
              {category.movies.map((movie) => (
                <SidebarButton
                  key={movie.id}
                  movie={movie}
                  isSelected={selectedMovie.title === movie.title}
                  isFavorite={favoritList.includes(movie.title)}
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
      </nav>
    </div>
  );
}

export default Sidebar;
