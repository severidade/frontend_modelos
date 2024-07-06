/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect, useCallback } from 'react';
import { Movie } from '../../types/movie.ts';
import { Data } from '../../types/data.ts';

import './sidebar.css';

type SidebarProps = {
  data: Data[]; // Tipo para o array de categorias
  selectedMovie: Movie; // Tipo para o filme selecionado
  setSelectedMovie: (movie: Movie) => void; // Tipo para a função que seleciona o filme
};

function Sidebar({ data, selectedMovie, setSelectedMovie }: SidebarProps) {
  const MAX_WIDTH_MOBILE = 1024;

  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      setMenuOpen(false);

      // Se a largura da tela for maior que MAX_WIDTH_MOBILE, mantenha o menu aberto
      if (newWidth > MAX_WIDTH_MOBILE) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Execute o manipulador de redimensionamento ao iniciar
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div className="container_sidebar">

      {/* botao desaparece em telas maiores que MAX_WIDTH_MOBILE */}
      {windowWidth <= MAX_WIDTH_MOBILE && (
        <button
          onClick={toggleMenu}
          type="button"
          className="toggle_menu"
        >
          {menuOpen ? 'Fechar Menu' : 'Abrir Menu'}
        </button>
      )}

      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        {data.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <div className="movie_list">
              {category.movies.map((movie) => (
                <button
                  key={movie.id}
                  onClick={() => {
                    setSelectedMovie(movie);
                    if (windowWidth <= MAX_WIDTH_MOBILE) {
                      toggleMenu();
                    }
                  }}
                  type="button"
                  className={selectedMovie.title === movie.title ? 'selected-button' : ''}
                >
                  {movie.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
