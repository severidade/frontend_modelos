/* eslint-disable react/react-in-jsx-scope */

import { Movie } from '../../types/movie.ts';
import { Data } from '../../types/data.ts';

type SidebarProps = {
  data: Data[]; // Tipo para o array de categorias
  selectedMovie: Movie; // Tipo para o filme selecionado
  setSelectedMovie: (movie: Movie) => void; // Tipo para a função que seleciona o filme
};

function Sidebar({ data, selectedMovie, setSelectedMovie }: SidebarProps) {
  return (
    <div className="sidebar">
      <div>
        {data.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <div className="movie_list">
              {category.movies.map((movie) => (
                <button
                  key={movie.id}
                  onClick={() => setSelectedMovie(movie)}
                  type="button"
                  className={selectedMovie.title === movie.title ? 'selected-button' : ''}
                >
                  {movie.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
